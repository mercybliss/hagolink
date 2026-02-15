# Deployment Guide for Replit

## Quick Start

1. **Create a new Repl**
   - Go to [replit.com](https://replit.com)
   - Click "Create Repl"
   - Choose "Node.js" template
   - Name: `elites-affiliate`

2. **Upload Files**
   - Option A: Drag and drop all files into the Repl file explorer
   - Option B: Use Git integration:
     - Click "Version control" → "Import from GitHub"
     - Connect your repository

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Project**
   - Click the "Run" button
   - Or use the command: `npm run dev`
   - Access your site via the generated URL

## Production Build

For a production build on Replit:

1. Update `.replit` file:
   ```toml
   run = "npm run build && npm start"
   ```

2. Or manually run:
   ```bash
   npm run build
   npm start
   ```

## Environment Variables (if needed)

If you need environment variables:

1. Click the "Secrets" tab (lock icon) in Replit
2. Add your variables:
   - `NEXT_PUBLIC_SITE_URL` = your site URL
   - Add any other API keys or secrets

## Troubleshooting

**Port Issues:**
- Replit automatically assigns a port
- Next.js will use `process.env.PORT` if available
- Check the Replit console for the assigned port

**Build Errors:**
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (should be 18+)
- Review error messages in the console

**Performance:**
- For better performance, use production build: `npm run build && npm start`
- Consider upgrading Replit plan for better resources

## Alternative: Deploy to Vercel (Easier)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and deploys
5. Done! Your site is live

Vercel is optimized for Next.js and offers:
- Automatic deployments
- Free SSL
- Global CDN
- Better performance
