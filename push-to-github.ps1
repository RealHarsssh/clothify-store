Write-Host "`n📤 Push Code to GitHub`n" -ForegroundColor Green

# Get repository URL from user
$repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/clothify-store.git)"

if ($repoUrl -eq "") {
    Write-Host "`n❌ No URL provided. Exiting." -ForegroundColor Red
    Write-Host "`n💡 First create a repo at: https://github.com/new" -ForegroundColor Yellow
    exit
}

Write-Host "`n🔄 Adding remote repository..." -ForegroundColor Cyan
git remote add origin $repoUrl 2>&1 | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Remote might already exist. Trying to update..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

Write-Host "✅ Remote added!" -ForegroundColor Green

Write-Host "`n📤 Pushing code to GitHub..." -ForegroundColor Cyan
Write-Host "   (You may be asked for your GitHub username and password/token)" -ForegroundColor Yellow
Write-Host ""

git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Success! Your code is now on GitHub!" -ForegroundColor Green
    Write-Host "`n🌐 Next step: Go to https://vercel.com/new and import your repository!" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Push failed. Common issues:" -ForegroundColor Red
    Write-Host "   1. Wrong repository URL" -ForegroundColor Yellow
    Write-Host "   2. Need to use Personal Access Token instead of password" -ForegroundColor Yellow
    Write-Host "   3. Repository doesn't exist yet" -ForegroundColor Yellow
    Write-Host "`n💡 Get a token at: https://github.com/settings/tokens" -ForegroundColor Cyan
}

