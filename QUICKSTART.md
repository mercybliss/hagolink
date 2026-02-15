# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Visit [http://localhost:3000](http://localhost:3000)

---

## ✏️ Customize Your Site

### Add Your Affiliate Links

1. Open `components/ProductCard.tsx`
2. Find line 114: `{/* Replace this link with your affiliate link */}`
3. Replace the `href` on line 116 with your actual affiliate link

Example:
```tsx
<a
  href="https://www.amazon.com/dp/B08XYZ1234?tag=yourtag-20"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
```

### Add Products

Edit `data/products.json`:
- Add products to `featured` array
- Add products to category arrays
- Update images, descriptions, ratings

### Customize Colors

Edit `tailwind.config.ts`:
- Modify `gold` colors for accent color
- Modify `dark` colors for background

### Connect Email Service

Edit `components/EmailCapture.tsx`:
- Replace the `handleSubmit` function
- Add your email service API (Mailchimp, ConvertKit, etc.)

---

## 📦 Deploy

### Option 1: Vercel (Recommended - Free & Easy)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy!

### Option 2: Replit
See `DEPLOYMENT.md` for detailed instructions

---

## 🎨 Design Features

✅ Dark luxury aesthetic  
✅ Smooth scroll animations  
✅ Fully responsive  
✅ SEO optimized  
✅ Fast loading  
✅ Production ready  

---

## 📝 Important Notes

- **Affiliate Links**: Remember to replace placeholder links with your actual affiliate links
- **FTC Compliance**: Footer includes affiliate disclosure - customize if needed
- **Images**: Using Unsplash placeholders - replace with actual product images
- **Email**: Email form needs integration with your email service provider

---

Need help? Check `README.md` for detailed documentation.
