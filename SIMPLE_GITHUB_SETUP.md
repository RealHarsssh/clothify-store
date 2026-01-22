# 🚀 Simple GitHub Setup (3 Steps)

## Step 1: Create Repository on GitHub

1. Go to: **https://github.com/new**
2. Repository name: `clothify-store`
3. Choose **Public** or **Private**
4. **DO NOT** check "Add README" or any other options
5. Click **"Create repository"**

## Step 2: Copy Your Repository URL

GitHub will show you a URL like:
```
https://github.com/YOUR_USERNAME/clothify-store.git
```

## Step 3: Run This Script

In your terminal, run:
```powershell
powershell -ExecutionPolicy Bypass -File push-to-github.ps1
```

Then paste your repository URL when asked.

**OR manually run these commands:**

```bash
# Replace with YOUR actual repository URL
git remote add origin https://github.com/YOUR_USERNAME/clothify-store.git
git push -u origin master
```

---

## If It Asks for Password:

GitHub no longer accepts passwords. Use a **Personal Access Token**:

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token (classic)"**
3. Give it a name like "Vercel Deploy"
4. Check **"repo"** permission
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## After Pushing:

✅ Your code will be on GitHub
✅ Then go to **https://vercel.com/new**
✅ Import your repository
✅ Get your live website URL!

