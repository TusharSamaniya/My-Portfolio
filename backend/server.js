import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Gmail configuration
const GMAIL_USER = process.env.GMAIL_USER || 'tusharsamaniya.me@gmail.com';
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || 'whlx bjyz yyxh eajw';

console.log(`📧 Gmail configured for: ${GMAIL_USER}`);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD
  }
});

// Test Gmail connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Gmail connection failed:', error.message);
  } else {
    console.log('✅ Gmail connection successful!');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('\n📨 New email request received:');
  console.log(`   From: ${email}`);
  console.log(`   Name: ${name}`);
  console.log(`   Subject: ${subject}`);

  // Validate required fields
  if (!name || !email || !subject || !message) {
    console.error('❌ Missing required fields');
    return res.status(400).json({ 
      success: false, 
      error: 'All fields (name, email, subject, message) are required' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error('❌ Invalid email format:', email);
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide a valid email address' 
    });
  }

  try {
    // Email content
    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from Contact Form</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin-top: 20px; padding: 20px; border-left: 4px solid #007bff;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p><strong>Reply to:</strong> ${email}</p>
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log(`   Message ID: ${info.messageId}`);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully! I\'ll get back to you soon.' 
    });
  } catch (error) {
    console.error('❌ Email sending error:', error.message);
    console.error('   Full error:', error);
    
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.message.includes('Invalid login')) {
      errorMessage = 'Gmail authentication failed. Please check your App Password.';
    } else if (error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Network error. Please check your internet connection.';
    }
    
    res.status(500).json({ 
      success: false, 
      error: errorMessage 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'Server is running',
    gmail: GMAIL_USER,
    timestamp: new Date().toISOString()
  });
});

// Test email endpoint (for debugging)
app.post('/api/test-email', async (req, res) => {
  console.log('\n🧪 Testing Gmail connection...');
  
  try {
    const testMail = {
      from: GMAIL_USER,
      to: GMAIL_USER,
      subject: 'Test Email from Portfolio - Connection Verified ✅',
      html: `
        <h2>Test Email Successful!</h2>
        <p>If you received this email, your portfolio contact form is working correctly!</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `
    };

    const info = await transporter.sendMail(testMail);
    
    console.log('✅ Test email sent successfully!');
    res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully! Check your inbox.',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('❌ Test email failed:', error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
