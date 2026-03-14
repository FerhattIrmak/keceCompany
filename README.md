# Link in Bio - Influencer Landing Page

A modern, mobile-first "link in bio" landing page built with React and TailwindCSS. Perfect for Instagram bio usage and influencer marketing.

## Features

✨ **Modern Design**
- Gradient backgrounds with dark mode support
- Smooth animations and hover effects
- Mobile-optimized layout
- Responsive design for all devices

🎯 **Profile Section**
- Circular profile image
- Influencer name and bio
- Optional verification icon

🔗 **Social Media Integration**
- Pre-built buttons for Instagram, TikTok, YouTube, Twitter/X, LinkedIn
- Custom gradient colors for each platform
- Icon support with configurable links

📱 **Mobile-First**
- Optimized for Instagram bio links
- Touch-friendly button design
- Full-screen responsiveness

🌓 **Dark Mode**
- Toggle between light and dark themes
- Smooth transitions
- System preference detection ready

## Tech Stack

- **React 18** - UI framework
- **TailwindCSS** - Utility-first CSS
- **Vite** - Next-generation build tool
- **JavaScript/JSX** - Component development

## Project Structure

```
src/
├── components/
│   ├── ProfileCard.jsx      # Profile section with image and bio
│   ├── SocialLinkButton.jsx # Individual link button component
│   ├── LinkSection.jsx      # Container for link groups
│   └── Footer.jsx           # Footer component
├── App.jsx                  # Main application component
├── main.jsx                 # Entry point
└── index.css               # Global styles with TailwindCSS
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization

### Update Profile Information

Edit the `profileData` object in `App.jsx`:

```javascript
const profileData = {
  name: 'Your Name',
  bio: 'Your bio here',
  image: 'your-image-url',
  verified: true, // or false
}
```

### Add/Edit Social Media Links

Modify the `socialLinks` array in `App.jsx`:

```javascript
{
  icon: 'instagram', // or: tiktok, youtube, twitter, linkedin, website
  label: 'Instagram',
  href: 'https://instagram.com/yourprofile',
  color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
}
```

### Available Icons
- `instagram` - Instagram gradient
- `tiktok` - TikTok monochrome
- `youtube` - YouTube red
- `twitter` - Twitter/X gray
- `linkedin` - LinkedIn blue
- `website` - Generic link icon

### Add Custom Links

Use the `customLinks` array for additional buttons like portfolio, merch store, or contact forms:

```javascript
const customLinks = [
  {
    icon: 'website',
    label: 'My Portfolio',
    href: 'https://yourportfolio.com',
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
  },
]
```

## Color Customization

Each link button accepts a `color` prop with TailwindCSS gradient classes:

```javascript
color: 'bg-gradient-to-r from-color-500 to-color-600'
```

Available Tailwind color options:
- `blue`, `purple`, `pink`, `red`, `orange`, `yellow`, `green`, `teal`, `cyan`, `indigo`, `violet`

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Other Hosting
Build the project and deploy the `dist` folder:
```bash
npm run build
```

Then upload the `dist` folder to your hosting service.

## Dark Mode

The app automatically includes a dark mode toggle in the header. Users can switch between light and dark themes:

- **Light Mode**: Blue/purple gradient background
- **Dark Mode**: Dark gray/slate background

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with responsive loading
- Minimal CSS bundle (~30KB gzipped)
- Fast page loads with Vite
- Smooth 60fps animations

## License

Free to use and modify for personal and commercial projects.

## Tips for Instagram Bio

1. **URL Format**: Shorten your link with [bit.ly](https://bitly.com) or [linktree.com](https://linktree.com) if needed
2. **Mobile Preview**: Test on mobile devices since most Instagram users access via phone
3. **Image**: Use a high-quality profile photo (ideally square or circle-friendly)
4. **Bio Text**: Keep updated with current links and promotions
5. **CTA**: Add a clear call-to-action in your Instagram bio

## Support & Questions

For issues or feature requests, feel free to customize the components to your needs!

---

Made with ❤️ for influencers and content creators
