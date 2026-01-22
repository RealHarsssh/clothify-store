const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Vercel deployment...\n');

try {
  // Run vercel deployment
  const output = execSync('npx --yes vercel --prod', { 
    encoding: 'utf-8',
    stdio: 'inherit'
  });
  
  console.log('\n✅ Deployment complete!');
  console.log('Check the output above for your deployment URL.');
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  console.log('\n💡 Alternative: Go to https://vercel.com/new and drag your folder there.');
}

