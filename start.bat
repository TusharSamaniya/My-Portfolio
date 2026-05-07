@echo off
REM Kill any existing node processes
echo Cleaning up old processes...
taskkill /F /IM node.exe 2>nul

REM Start the development servers
echo.
echo Starting Portfolio Development Servers...
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press Ctrl+C to stop servers
echo.

npm run dev
