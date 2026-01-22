Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Green
Write-Host ""
Write-Host "This will open your browser for authentication (one-time only)" -ForegroundColor Yellow
Write-Host "After you log in, the deployment will start automatically" -ForegroundColor Yellow
Write-Host ""
Write-Host "Starting deployment..." -ForegroundColor Cyan
Write-Host ""

npx --yes vercel --prod

Write-Host ""
Write-Host "✅ Check the output above for your deployment URL!" -ForegroundColor Green
Write-Host "It will look like: https://your-project.vercel.app" -ForegroundColor Cyan

