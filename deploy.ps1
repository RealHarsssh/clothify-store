# Automated Deployment Script for Clothify Store
Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git not initialized. Initializing..." -ForegroundColor Yellow
    git init
}

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Committing changes..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy to production"
}

# Check for remote
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host ""
    Write-Host "⚠️  No GitHub remote found!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To deploy automatically:" -ForegroundColor Cyan
    Write-Host "1. Create a new repository on GitHub (github.com/new)" -ForegroundColor White
    Write-Host "2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor White
    Write-Host "3. Run: git push -u origin master" -ForegroundColor White
    Write-Host "4. Go to vercel.com and import your GitHub repository" -ForegroundColor White
    Write-Host ""
    Write-Host "OR deploy directly via Vercel CLI:" -ForegroundColor Cyan
    Write-Host "Run: npx vercel --prod" -ForegroundColor White
    Write-Host ""
    exit
}

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push origin master

Write-Host ""
Write-Host "✅ Code pushed to GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://vercel.com" -ForegroundColor White
Write-Host "2. Sign in with GitHub" -ForegroundColor White
Write-Host "3. Click 'Add New Project'" -ForegroundColor White
Write-Host "4. Import your repository" -ForegroundColor White
Write-Host "5. Click 'Deploy' - Your site will be live in 2 minutes!" -ForegroundColor White
Write-Host ""

