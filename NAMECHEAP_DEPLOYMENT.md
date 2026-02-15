# Hosting on Namecheap - Complete Guide

## ⚠️ Important: Namecheap Shared Hosting Limitation

**Namecheap's shared hosting does NOT support Next.js** because:
- Next.js requires Node.js runtime
- Shared hosting typically only supports PHP, static HTML, or basic server-side languages
- Next.js needs a Node.js environment to run

## ✅ Your Options

### Option 1: Namecheap VPS (If You Want to Stay with Namecheap)

If you have a Namecheap VPS, you can host Next.js. Here's how:

#### Prerequisites:
- Namecheap VPS with root access
- SSH access to your server
- Node.js 18+ installed

#### Setup Steps:

1. **Connect to Your VPS via SSH**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js** (if not already installed)
   ```bash
   # Using NodeSource repository
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Verify installation
   node --version
   npm --version
   ```

3. **Install PM2** (Process Manager for Node.js)
   ```bash
   npm install -g pm2
   ```

4. **Upload Your Project**
   - Option A: Use Git
     ```bash
     git clone your-repo-url
     cd elites
     ```
   - Option B: Use SFTP/FTP to upload files to `/var/www/elites` or similar

5. **Install Dependencies**
   ```bash
   cd /path/to/elites
   npm install
   ```

6. **Build the Production Version**
   ```bash
   npm run build
   ```

7. **Start with PM2**
   ```bash
   pm2 start npm --name "elites" -- start
   pm2 save
   pm2 startup
   ```

8. **Configure Nginx** (Reverse Proxy)
   ```bash
   sudo apt-get install nginx
   ```

   Create `/etc/nginx/sites-available/elites`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/elites /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Set Up SSL** (Let's Encrypt)
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

**Cost**: VPS starts around $6-10/month

---

### Option 2: Vercel (Recommended - FREE & EASIEST) ⭐

**Best option for Next.js** - It's made by the creators of Next.js!

#### Why Vercel?
- ✅ **100% FREE** for personal projects
- ✅ Optimized specifically for Next.js
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN (fast worldwide)
- ✅ Zero configuration needed
- ✅ Automatic HTTPS

#### Steps:

1. **Push to GitHub** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up (free) with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Connect Your Namecheap Domain**
   - In Vercel dashboard, go to your project → Settings → Domains
   - Add your domain (e.g., `yourdomain.com`)
   - Update DNS records in Namecheap:
     - Add A record: `@` → Vercel IP (shown in dashboard)
     - Or add CNAME: `www` → `cname.vercel-dns.com`
   - SSL is automatic!

**Cost**: FREE (paid plans start at $20/month for teams)

---

### Option 3: Netlify (Also FREE & Easy)

Similar to Vercel, great for Next.js:

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

**Cost**: FREE (paid plans available)

---

### Option 4: Railway (Easy VPS Alternative)

1. Go to [railway.app](https://railway.app)
2. Connect GitHub
3. Create new project
4. Deploy from GitHub
5. Railway auto-detects Next.js

**Cost**: $5/month (free trial available)

---

### Option 5: Render (Free Tier Available)

1. Go to [render.com](https://render.com)
2. Connect GitHub
3. Create Web Service
4. Auto-detects Next.js

**Cost**: FREE tier available (with limitations)

---

## 🎯 Recommendation

**For your affiliate marketing site, I recommend:**

1. **Vercel** (Best choice)
   - Free, fast, perfect for Next.js
   - Easy domain connection from Namecheap
   - Professional and reliable

2. **Namecheap VPS** (If you prefer Namecheap)
   - More control but requires technical setup
   - Good if you want everything in one place

## 📝 Quick Comparison

| Platform | Cost | Difficulty | Next.js Optimized | Best For |
|----------|------|------------|-------------------|----------|
| **Vercel** | FREE | ⭐ Easy | ✅ Yes | Everyone |
| **Netlify** | FREE | ⭐ Easy | ✅ Yes | Everyone |
| **Namecheap VPS** | $6-10/mo | ⭐⭐⭐ Hard | ⚠️ Manual | Advanced users |
| **Railway** | $5/mo | ⭐⭐ Medium | ✅ Yes | Developers |
| **Render** | FREE | ⭐⭐ Medium | ✅ Yes | Budget-conscious |

## 🔗 Connecting Your Namecheap Domain

Regardless of where you host, you can use your Namecheap domain:

1. **For Vercel/Netlify:**
   - Add domain in hosting dashboard
   - Update DNS in Namecheap:
     - Type: `A` or `CNAME`
     - Value: Provided by hosting service
   - SSL is automatic

2. **For VPS:**
   - Point domain's A record to VPS IP
   - Set up SSL with Let's Encrypt (free)

---

## Need Help?

- **Vercel Setup**: See `README.md` → Deployment section
- **VPS Setup**: Follow Option 1 steps above
- **Domain Setup**: Contact Namecheap support for DNS help

---

**Bottom Line**: Use Vercel for easiest deployment, or Namecheap VPS if you want to stay with Namecheap and don't mind the setup.
