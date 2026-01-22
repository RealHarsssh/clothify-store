Write-Host "`nAutomated GitHub Push Setup`n" -ForegroundColor Green

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null

if ($existingRemote) {
    Write-Host "Remote 'origin' already exists: $existingRemote" -ForegroundColor Yellow
    $useExisting = Read-Host "Use this remote? (y/n)"
    if ($useExisting -ne "y") {
        git remote remove origin
        $existingRemote = $null
    } else {
        Write-Host "`nPushing to existing remote..." -ForegroundColor Cyan
        git push -u origin master
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`nSuccess! Code pushed to GitHub!" -ForegroundColor Green
            Write-Host "`nNext: Go to https://vercel.com/new and import your repo!" -ForegroundColor Cyan
        }
        exit
    }
}

Write-Host "Step 1: Create a GitHub repository first" -ForegroundColor Cyan
Write-Host "   Go to: https://github.com/new" -ForegroundColor White
Write-Host "   Name: clothify-store (or any name)" -ForegroundColor White
Write-Host "   Click 'Create repository'`n" -ForegroundColor White

$repoUrl = Read-Host "Step 2: Paste your repository URL here (e.g., https://github.com/username/repo.git)"

if ($repoUrl -eq "" -or $repoUrl -notmatch "github\.com") {
    Write-Host "`nInvalid URL. Please provide a valid GitHub repository URL." -ForegroundColor Red
    exit
}

Write-Host "`nAdding remote repository..." -ForegroundColor Cyan
git remote add origin $repoUrl

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error adding remote. It might already exist." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

Write-Host "Remote added successfully!" -ForegroundColor Green

Write-Host "`nPushing code to GitHub..." -ForegroundColor Cyan
Write-Host "   (You'll be asked for username and password/token)`n" -ForegroundColor Yellow

git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSUCCESS! Your code is now on GitHub!" -ForegroundColor Green
    Write-Host "`nRepository URL: $repoUrl" -ForegroundColor Cyan
    Write-Host "`nNext Steps:" -ForegroundColor Yellow
    Write-Host "   1. Go to: https://vercel.com/new" -ForegroundColor White
    Write-Host "   2. Sign in with GitHub" -ForegroundColor White
    Write-Host "   3. Import your repository: $repoUrl" -ForegroundColor White
    Write-Host "   4. Click 'Deploy' - Get your live URL in 2 minutes!`n" -ForegroundColor White
} else {
    Write-Host "`nPush failed. Common solutions:" -ForegroundColor Red
    Write-Host "`nSolution 1: Use Personal Access Token" -ForegroundColor Yellow
    Write-Host "   1. Go to: https://github.com/settings/tokens" -ForegroundColor White
    Write-Host "   2. Generate new token (classic)" -ForegroundColor White
    Write-Host "   3. Check 'repo' permission" -ForegroundColor White
    Write-Host "   4. Copy token and use it as password`n" -ForegroundColor White
    
    Write-Host "Solution 2: Try again with correct credentials" -ForegroundColor Yellow
    Write-Host "   Run: git push -u origin master`n" -ForegroundColor White
}

