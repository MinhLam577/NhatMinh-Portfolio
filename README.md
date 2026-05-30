# 🚀 Nhat Minh - Full Stack Developer Portfolio

A modern, interactive full-stack developer portfolio website built with cutting-edge web technologies. Features stunning animations, smooth scrolling, and responsive design across all devices.

## 📸 Portfolio Preview

### Hero Section
![Portfolio Preview](https://via.placeholder.com/1200x630?text=Nhat+Minh+Portfolio)

### Projects Showcase
![Projects Preview](https://via.placeholder.com/1200x630?text=Projects+Showcase)

### Tech Stack Display
![Tech Stack Preview](https://via.placeholder.com/1200x630?text=Tech+Stack)

### Full Page View
![Full Page Preview](https://via.placeholder.com/1200x900?text=Full+Page+Preview)

> 💡 **Note:** The above are placeholder images. Replace them in the `preview/` folder with your actual portfolio screenshots. Update the image URLs in this README once you add your real images.

## ✨ Features

- 🎨 **Modern UI Design** - Sleek and professional design with gradient effects
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 🌌 **Cinematic Background** - Dynamic particle effects and blackhole video background
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark/Light Theme** - Built-in theme switching support
- ⚡ **High Performance** - Optimized Next.js application with fast load times
- 🎯 **Interactive Components** - Orbit visualization, project showcase, and contact form
- 🔧 **Component Library** - Radix UI for accessible, customizable components
- 📝 **TypeScript** - Full type safety throughout the project

## 🏗️ Project Structure

```
NhatMinh-Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Background.tsx      # Static background component
│   ├── ParticleBackground.tsx # Animated particle system
│   ├── VideoBackground.tsx # Video background handler
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── Hero.tsx            # Hero section with intro & CTA
│   ├── OrbitTech.tsx       # Animated orbit tech visualization
│   ├── TechStack.tsx       # Technology skills showcase
│   ├── Security.tsx        # Security/features highlight section
│   ├── Projects.tsx        # Project showcase with cards
│   ├── Contact.tsx         # Contact form component
│   ├── Footer.tsx          # Footer with links
│   ├── ThemeProvider.tsx   # Theme context provider
│   └── ui/                 # Radix UI components (auto-generated)
├── hooks/
│   ├── use-mobile.ts       # Mobile device detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   ├── data.ts             # Configuration data (projects, tech stack, links)
│   └── utils.ts            # Utility functions
├── styles/                 # Additional style files
├── public/                 # Static assets
├── preview/                # Preview images for documentation
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
└── next.config.mjs         # Next.js configuration
```

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.2.6** - React framework with server-side rendering
- **React 19** - UI library with latest features
- **TypeScript 5.7.3** - Type-safe JavaScript

### Styling & Animation
- **Tailwind CSS 4.2.0** - Utility-first CSS framework
- **Framer Motion 12.40.0** - Powerful animation library
- **Lucide React 0.564.0** - Beautiful icon library
- **PostCSS 8.5** - CSS transformations

### UI Components
- **Radix UI** - Headless, accessible component library
- **Class Variance Authority 0.7.1** - CSS class management
- **clsx 2.1.1** - Conditional classname utility

### 3D Graphics
- **Three.js 0.184.0** - 3D JavaScript library
- **@react-three/fiber 9.6.1** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Three.js helpers

### Forms & Validation
- **React Hook Form 7.54.1** - Efficient form management
- **Zod 3.24.1** - Schema validation library
- **@hookform/resolvers 3.9.1** - Form resolver utilities

### Additional Libraries
- **Framer Motion 12.40.0** - Advanced animations
- **Next Themes 0.4.6** - Theme management
- **Recharts 2.15.0** - React charts library
- **Embla Carousel 8.6.0** - Carousel component
- **Sonner 1.7.1** - Toast notifications
- **Date FNS 4.1.0** - Date utilities
- **Vercel Analytics 1.6.1** - Analytics integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MinhLam577/NhatMinh-Portfolio.git
   cd NhatMinh-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎯 Main Sections

### 1. **Hero Section**
   - Animated introduction with gradient text
   - Cinematic blackhole background video
   - Interactive orbit technology visualization
   - CTA buttons (Contact & Download CV)

### 2. **Tech Stack**
   - Showcase of technical skills
   - Icons for each technology
   - Organized by category
   - Technologies: React, Node.js, TypeScript, Next.js, Docker, AWS, and more

### 3. **Security & Features**
   - Highlights key capabilities
   - Feature demonstrations
   - Professional achievements

### 4. **Projects Showcase**
   - Interactive project cards
   - Project descriptions and tags
   - Links to GitHub repositories and live demos
   - Hover animations and effects

### 5. **Contact Section**
   - Contact form with validation
   - Social media links
   - Quick contact methods

### 6. **Navigation**
   - Sticky navbar with smooth scrolling
   - Theme toggle (dark/light mode)
   - Mobile-responsive menu
   - Active section highlighting

## 🎨 Customization

### Update Your Information
1. Edit `lib/data.ts` to update:
   - Project information and images
   - Tech stack items
   - Social media links
   - Navigation links

2. Update component text:
   - Hero section: Edit `components/hero.tsx`
   - Tech stack: Edit `components/tech-stack.tsx`
   - Projects: Edit `components/projects.tsx`
   - Contact: Edit `components/contact.tsx`

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for design tokens
- Component-specific styles are in component files

### Colors & Theme
- Primary: Violet/Purple gradients
- Secondary: Blue accents
- Background: Dark theme by default
- Customize in Tailwind config and component className values

## 📦 Component Documentation

### Key Components

**Navbar** - Navigation bar with:
- Links to all main sections
- Theme toggle button
- Mobile menu support
- Smooth animations

**Hero** - Hero section with:
- Animated intro text
- Blackhole video background
- Orbit visualization
- Call-to-action buttons

**TechStack** - Skills showcase with:
- Technology cards
- Icon display
- Category organization
- Interactive hover effects

**Projects** - Project showcase with:
- Project cards
- Image preview
- Description and tags
- GitHub and live links

**Contact** - Contact form with:
- Form validation (Zod + React Hook Form)
- Email input
- Message textarea
- Submit button with loading state

## 🖼️ Preview Images

The `preview/` folder contains sample images for documentation and social media sharing:
- `hero-section.svg` - Hero section preview (placeholder)
- `projects-showcase.svg` - Projects section preview (placeholder)
- `tech-stack-preview.svg` - Tech stack display (placeholder)
- `full-page-preview.svg` - Full page screenshot (placeholder)

**To replace these images:**
1. Take screenshots of your actual portfolio
2. Optimize them (recommended: 1200x630px for sections, 1200x900px for full page)
3. Save them as PNG, JPG, or WebP in the `preview/` folder
4. Update the image URLs in this README file

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically handle the build and deployment!

### Deploy to Other Platforms

**Build the project:**
```bash
npm run build
```

The output will be in the `.next` directory.

## 📊 Performance

- ⚡ Optimized images with Next.js Image component
- 🎯 Code splitting and lazy loading
- 📦 Minimal dependencies
- 🚀 Fast page load times
- 🔍 SEO optimized

## 🔐 Security

- TypeScript for type safety
- Form validation with Zod
- Content Security Policy ready
- Sanitized user inputs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About the Author

**Lam Nhat Minh** - Full Stack Developer
- 1 year of experience in web, mobile, and software development
- Specialized in modern web technologies and responsive design
- Passionate about creating beautiful, functional applications

## 🔗 Links

- **GitHub**: [github.com/MinhLam577](https://github.com/MinhLam577)
- **Portfolio**: [Your portfolio URL]
- **Email**: [Your email]

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact via email
- Check the documentation

---

**Made with ❤️ by Lam Nhat Minh**

Give this project a ⭐ if you found it helpful!
