@echo off
cd /d "%~dp0"
echo Starting local server on port 3000...
start /b npx --yes serve . -p 3000
timeout /t 4 /nobreak >nul
echo.
echo Opening tunnel - your shareable link will appear below:
echo.
npx --yes localtunnel --port 3000
pause
