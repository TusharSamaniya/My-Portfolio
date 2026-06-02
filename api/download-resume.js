import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Try multiple paths where resume might be located
    const possiblePaths = [
      path.join(__dirname, '../public/resume.pdf'),
      path.join(__dirname, '../portfolio/public/resume.pdf'),
      path.join(__dirname, 'resume.pdf'),
      '/var/task/public/resume.pdf'
    ];

    let resumePath = null;
    for (const filePath of possiblePaths) {
      if (fs.existsSync(filePath)) {
        resumePath = filePath;
        break;
      }
    }

    if (!resumePath) {
      console.error('❌ Resume file not found at any location');
      console.error('Checked paths:', possiblePaths);
      return res.status(404).json({ 
        success: false, 
        error: 'Resume file not found' 
      });
    }

    console.log('📥 Serving resume from:', resumePath);

    // Get file stats
    const stats = fs.statSync(resumePath);
    const fileStream = fs.createReadStream(resumePath);

    // Set proper headers for direct viewing/download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', stats.size);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    fileStream.pipe(res);

    fileStream.on('error', (error) => {
      console.error('❌ Stream error:', error.message);
      if (!res.headersSent) {
        res.status(500).json({ 
          success: false, 
          error: 'Error downloading resume' 
        });
      }
    });

  } catch (error) {
    console.error('❌ Resume download error:', error.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Error downloading resume: ' + error.message 
    });
  }
}
