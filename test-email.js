import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.local' });

async function test() {
  console.log('📧 Testing email configuration...\n');
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_PASSWORD set:', !!process.env.GMAIL_PASSWORD);
  console.log('GMAIL_PASSWORD length:', process.env.GMAIL_PASSWORD?.length);

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error('\n❌ Error: GMAIL_USER or GMAIL_PASSWORD not set in .env.local');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    console.log('\n🔗 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully\n');

    console.log('📤 Sending test email...');
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'Test email from portfolio',
      text: 'If you see this, email sending works!',
      html: '<h2>Portfolio Test Email</h2><p>If you see this, email sending works!</p>',
    });

    console.log('✅ Test email sent successfully!');
    console.log('\nYour email configuration is working correctly.');
  } catch (err) {
    console.error('\n❌ Error:', err.message);
    console.error('Code:', err.code);
    console.error('\nFull error:', err);
    
    if (err.code === 'EAUTH') {
      console.error('\n⚠️  Authentication failed. Check:');
      console.error('1. GMAIL_USER and GMAIL_PASSWORD in .env.local');
      console.error('2. 2-Factor Authentication is enabled on the Gmail account');
      console.error('3. App Password is generated (not your regular password)');
    }
  }
}

test();
