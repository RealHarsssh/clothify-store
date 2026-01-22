# Deployment Guide for Clothify Store

This guide will help you deploy your Next.js website online using Vercel (recommended) or other platforms.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the best platform for Next.js apps as it's made by the creators of Next.js.

### Method A: Deploy via Vercel Website (No CLI needed)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

3. **Import your project**:
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site will be live in minutes!**
   - Vercel will provide you with a URL like: `your-project.vercel.app`
   - Every push to your main branch will auto-deploy

### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub

3. **Import project**:
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

4. **Deploy!**

## Option 3: Deploy to Railway

1. **Install Railway CLI**:
   ```bash
   npm i -g @railway/cli
   ```

2. **Login and deploy**:
   ```bash
   railway login
   railway init
   railway up
   ```

## Important Notes

- Make sure your `package.json` has the build script (it does!)
- No environment variables needed for basic deployment
- Your site will be accessible worldwide once deployed
- Vercel provides free SSL certificates automatically

## Quick Deploy Commands (Vercel CLI)

If you have Vercel CLI installed:
```bash
vercel --prod
```

This will deploy your site to production immediately!

