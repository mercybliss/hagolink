# Elites - Curated Essentials for Smart Living

A premium affiliate marketing website built with Next.js, React, and Tailwind CSS. Features a sophisticated dark luxury aesthetic with smooth animations and a fully responsive design.

## Features

- 🎨 **Premium Design**: Black, white, and soft gold color scheme with elegant typography
- ✨ **Smooth Animations**: Framer Motion powered scroll animations and transitions
- 📱 **Fully Responsive**: Optimized for all devices
- 🛍️ **Product Showcase**: Dynamic product cards with affiliate link placeholders
- 📧 **Email Capture**: Newsletter signup form
- 📝 **SEO Optimized**: Meta tags and semantic HTML
- ⚡ **Fast Performance**: Next.js 14 with App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
elites/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── TrustSection.tsx    # Authority/trust section
│   ├── ProductCard.tsx     # Reusable product card component
│   ├── FeaturedProducts.tsx # Featured products grid
│   ├── CategorySections.tsx # Category-based product sections
│   ├── EmailCapture.tsx    # Newsletter signup form
│   ├── BlogPreview.tsx     # Blog article previews
│   └── Footer.tsx          # Footer with disclosures
├── data/
│   └── products.json       # Product data (easily editable)
└── public/                 # Static assets
```

## Customization

### Adding Products

Edit `data/products.json` to add or modify products. Each product should include:

```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "image": "Image URL",
  "rating": 4.8,
  "retailer": "Amazon",
  "tag": "Best Seller",
  "category": "Category Name"
}
```

### Adding Affiliate Links

In `components/ProductCard.tsx`, replace the placeholder link:

```tsx
// Replace this link with your affiliate link
<a href={`YOUR_AFFILIATE_LINK_HERE`}>
```

### Email Integration

Update `components/EmailCapture.tsx` to integrate with your email service provider (Mailchimp, ConvertKit, etc.):

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your email service API call here
};
```

### Colors & Styling

Customize colors in `tailwind.config.ts`:

```ts
colors: {
  gold: {
    // Your gold color palette
  },
  dark: {
    // Your dark color palette
  },
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Replit

1. **Create a new Repl**:
   - Go to [Replit](https://replit.com)
   - Click "Create Repl"
   - Select "Node.js" template
   - Name it "elites-affiliate"

2. **Upload your files**:
   - Upload all project files to your Repl
   - Or connect via Git: Click "Version control" → "Import from GitHub"

3. **Configure Replit**:
   - Create a `.replit` file in the root directory:
   ```toml
   run = "npm run dev"
   ```
   - Or use the Replit UI to set the run command

4. **Install dependencies**:
   - Replit will auto-install, or run:
   ```bash
   npm install
   ```

5. **Run the project**:
   - Click the "Run" button
   - Replit will start the Next.js dev server
   - Access via the generated URL

6. **For Production Build**:
   - Update `.replit`:
   ```toml
   run = "npm run build && npm start"
   ```

### Deploy to Other Platforms

**Netlify**:
- Connect your Git repository
- Build command: `npm run build`
- Publish directory: `.next`

**Railway**:
- Connect your repository
- Railway auto-detects Next.js
- Deploys automatically

## SEO & Meta Tags

Meta tags are configured in `app/layout.tsx`. Update the `metadata` object to customize:

```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ... more meta tags
};
```

## Affiliate Disclosure

The footer includes an FTC-compliant affiliate disclosure. Make sure to:

1. Update the disclosure text if needed
2. Add links to your Privacy Policy and Terms of Service
3. Ensure compliance with FTC guidelines for affiliate marketing

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting is handled automatically by Next.js
- CSS is purged in production builds
- Fonts are loaded with `display: swap` for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
