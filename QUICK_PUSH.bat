@echo off
echo.
echo ========================================
echo   Quick GitHub Push
echo ========================================
echo.
echo Step 1: Create repo at https://github.com/new
echo Step 2: Copy your repository URL
echo.
set /p REPO_URL="Paste your GitHub repository URL: "

if "%REPO_URL%"=="" (
    echo Error: No URL provided
    pause
    exit
)

echo.
echo Adding remote repository...
git remote add origin %REPO_URL% 2>nul
if errorlevel 1 (
    git remote set-url origin %REPO_URL%
)

echo.
echo Pushing code to GitHub...
echo (You'll be asked for username and password/token)
echo.
git push -u origin master

if errorlevel 1 (
    echo.
    echo ========================================
    echo   Push Failed
    echo ========================================
    echo.
    echo Use a Personal Access Token instead of password:
    echo 1. Go to: https://github.com/settings/tokens
    echo 2. Generate new token (classic)
    echo 3. Check 'repo' permission
    echo 4. Copy token and use as password
    echo.
    echo Then run: git push -u origin master
    echo.
) else (
    echo.
    echo ========================================
    echo   SUCCESS!
    echo ========================================
    echo.
    echo Your code is now on GitHub!
    echo.
    echo Next: Go to https://vercel.com/new
    echo        Import your repository
    echo        Deploy and get your live URL!
    echo.
)

pause

