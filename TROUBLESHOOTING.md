# 🔧 Email Setup Troubleshooting Guide

## Step 1: Verify Both Servers Are Running

**IMPORTANT**: Run this command from the **ROOT** folder (not portfolio subfolder):

```bash
cd C:\Users\tusha\Java Practice Projects\potfolio
npm run dev
```

You should see **BOTH** these messages:
```
✅ Gmail connection successful!
Backend server is running on http://localhost:5000

VITE v8.0.10  ready in XXX ms
Local:   http://localhost:5173/
```

If you only see VITE and NOT the backend server message, **STOP and follow Step 2**.

---

## Step 2: Restart Servers Correctly

1. **Stop all terminals** (Press Ctrl+C to stop npm run dev)

2. **Clear cache** (in VS Code terminal at root):
```bash
# Kill any existing node processes
taskkill /F /IM node.exe
```

3. **Start fresh from ROOT folder**:
```bash
cd C:\Users\tusha\Java Practice Projects\potfolio
npm run dev
```

---

## Step 3: Test Gmail Connection

Once servers are running, open browser and visit:
```
http://localhost:5000/api/test-email
```

**If successful**, you'll see:
```json
{
  "success": true,
  "message": "Test email sent successfully! Check your inbox.",
  "messageId": "..."
}
```

**If it fails**, check the backend console (terminal) for the error message.

---

## Step 4: Verify Email Configuration

Your backend should have these files:

### `.env` file should contain:
```
PORT=5000
GMAIL_USER=tusharsamaniya.me@gmail.com
GMAIL_PASSWORD=appslodaudfgutsakafm
```

**Note**: NO SPACES in the password!

---

## Step 5: Check Browser Console

When you try to send an email from the contact form:

1. Open browser **Developer Tools** (F12)
2. Go to **Console** tab
3. Look for logs like:
   - `📨 Sending email with data: {...}`
   - `Response status: 200`
   - `Response data: {success: true}`

---

## Common Issues & Solutions

### Issue 1: "Failed to send message" Error

**Cause**: Backend is not running

**Solution**:
- Make sure you ran `npm run dev` from **ROOT folder**
- Check if you see both server messages (backend + Vite)

### Issue 2: Gmail Authentication Failed

**Cause**: Wrong App Password or spaces in password

**Solution**:
- Open `.env` file in backend folder
- Verify password has **NO SPACES**: `appslodaudfgutsakafm`
- Save and restart servers

### Issue 3: Backend shows "Gmail connection failed"

**Cause**: Invalid Gmail credentials

**Solution**:
1. Go to your Google Account → Security
2. Check if "Less secure app access" is enabled (if needed)
3. Regenerate the App Password
4. Update `.env` file
5. Restart servers

### Issue 4: Browser console shows "Failed to fetch"

**Cause**: Backend server not running or not on port 5000

**Solution**:
- Check if backend terminal shows "Backend server is running on http://localhost:5000"
- If not, stop and restart with `npm run dev` from ROOT folder

---

## Step 6: Test the Contact Form

1. Navigate to Contact section on your portfolio
2. Fill in the form:
   - Name: `Your Name`
   - Email: `yourtest@gmail.com`
   - Subject: `Test Message`
   - Message: `Hello, this is a test`
3. Click "Send Message"
4. Watch the **browser console** (F12) for logs
5. Check the **backend console** for server logs

---

## Debugging Commands

### Check if Node/Backend is running:
```bash
netstat -ano | findstr :5000
```

### Check if Port 5000 is in use:
```bash
Get-Process | where { $_.ProcessName -like "*node*" }
```

### Kill stuck Node processes:
```bash
taskkill /F /IM node.exe
```

---

## Final Checklist

✅ Running `npm run dev` from ROOT folder (not portfolio subfolder)  
✅ Both servers are running (backend + frontend)  
✅ Backend shows "✅ Gmail connection successful!"  
✅ `.env` file has correct password (no spaces)  
✅ Opened browser console (F12) to check for logs  
✅ Test email endpoint works: http://localhost:5000/api/test-email  

---

## Still Having Issues?

**Check these in order:**

1. **Backend Terminal** - Look for error messages
2. **Browser Console** (F12) - Click "Send Message" and watch for logs
3. **Task Manager** - Verify node.exe processes
4. **Port Conflict** - Run `netstat -ano | findstr :5000` to check port 5000

---

## Contact Form Email Format

When you send an email through the form, you'll receive:

```
From: Your Email
To: tusharsamaniya.me@gmail.com
Subject: New Contact Form Submission: [Your Subject]

Your Name + Your Message
```

---

**Good luck! 🚀**
