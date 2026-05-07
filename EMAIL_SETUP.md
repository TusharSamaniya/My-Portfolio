# Tushar's Portfolio - Email Setup Guide

## Project Structure

```
portfolio/
├── backend/              # Node.js/Express backend for email
│   ├── server.js        # Main server file
│   ├── package.json     # Backend dependencies
│   ├── .env             # Environment variables (Gmail credentials)
│   └── .env.example     # Example environment variables
└── portfolio/           # React frontend
    ├── src/
    ├── package.json
    └── vite.config.js
```

## Setup Instructions

### Step 1: Install Dependencies

Run from the root directory:

```bash
npm run install-all
```

This will install dependencies for both frontend and backend.

### Step 2: Backend Setup (Already Done)

The backend is configured with:
- **Email Service**: Gmail with App Password
- **Framework**: Express.js
- **Email Library**: Nodemailer

### Step 3: Running the Project

**Option 1: Run both frontend and backend together**
```bash
npm run dev
```

**Option 2: Run only frontend**
```bash
npm run dev:frontend
```

**Option 3: Run only backend**
```bash
npm run dev:backend
```

## How It Works

1. **Contact Form** (Contact.jsx)
   - User fills in: Name, Email, Subject, Message
   - Sends data to backend via HTTP POST request

2. **Backend API** (server.js)
   - Receives form data at `http://localhost:5000/api/send-email`
   - Validates all required fields
   - Uses Nodemailer to send email via Gmail SMTP

3. **Email Delivery**
   - Email is sent to: `tusharsamaniya.me@gmail.com`
   - Subject: "New Contact Form Submission: [User's Subject]"
   - Body contains: Sender's name, email, subject, and message
   - Formatted as HTML for better readability

## Gmail App Password

The project uses Gmail's App Password authentication (more secure than storing your actual Gmail password).

**Current Setup:**
- Gmail: `tusharsamaniya.me@gmail.com`
- App Password: `apps loda udfg utsa kafm`

### Important Security Note

**⚠️ NEVER commit `.env` file to public repositories!**

To protect your credentials:
1. Add `.env` to your `.gitignore`
2. Keep the `.env.example` as a template
3. When deploying, set environment variables on the hosting platform

## Testing the Email Function

1. Start the development servers:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section on your portfolio

3. Fill in the form:
   - Name: Your name
   - Email: Your email
   - Subject: Test message
   - Message: This is a test

4. Click "Send Message"

5. You should receive an email at `tusharsamaniya.me@gmail.com`

## Troubleshooting

### Issue: "Failed to send message"

**Possible causes:**
1. Backend is not running
2. Gmail credentials are incorrect
3. App Password has expired
4. CORS issue

**Solutions:**
1. Ensure backend is running on `http://localhost:5000`
2. Check backend console for error messages
3. Verify `.env` file has correct credentials
4. Check browser console for network errors

### Issue: Email not received

1. Check spam/junk folder
2. Verify the email address in server.js is correct
3. Check backend console logs for errors

## Backend API Endpoints

### Send Email
- **URL**: `POST /api/send-email`
- **Body**: 
  ```json
  {
    "name": "Sender Name",
    "email": "sender@example.com",
    "subject": "Subject",
    "message": "Message content"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Email sent successfully!"
  }
  ```

### Health Check
- **URL**: `GET /api/health`
- **Response**: 
  ```json
  {
    "status": "Server is running"
  }
  ```

## Environment Variables

- `PORT`: Server port (default: 5000)
- `GMAIL_USER`: Gmail address
- `GMAIL_PASSWORD`: Gmail App Password

## Dependencies

### Frontend
- React 18.2.0
- Vite
- Tailwind CSS
- React Icons

### Backend
- Express.js 4.18.2
- Nodemailer 6.9.7
- CORS 2.8.5
- Dotenv 16.3.1
- Concurrently (for running both servers)

---

**Happy emailing! 🚀**
