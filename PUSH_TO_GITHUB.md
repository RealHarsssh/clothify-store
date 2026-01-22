# 📤 Push Your Code to GitHub

## Step 1: Create a New Repository on GitHub

1. **Go to:** https://github.com/new
2. **Repository name:** `clothify-store` (or any name you want)
3. **Make it Public** (or Private - your choice)
4. **DO NOT** check "Initialize with README" (we already have code)
5. **Click "Create repository"**

## Step 2: Copy Your Repository URL

After creating, GitHub will show you a URL like:
- `https://github.com/YOUR_USERNAME/clothify-store.git`

## Step 3: Run These Commands

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**OR if your default branch is `master`:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin master
```

---

## Quick Copy-Paste Commands

After creating your repo on GitHub, run:

```bash
# Add remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/clothify-store.git

# Push to GitHub
git push -u origin master
```

If it asks for credentials, use a **Personal Access Token** (not your password):
- Go to: https://github.com/settings/tokens
- Generate new token (classic)
- Give it `repo` permissions
- Use that token as your password

---

## After Pushing:

Once your code is on GitHub, you can:
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Deploy automatically!

