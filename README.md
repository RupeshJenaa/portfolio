# Portfolio Website

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features interactive animations, particle effects, and a sleek dark theme to showcase professional work and skills.

## 🚀 Live Demo

Visit the live portfolio: [https://rupeshjenaa.github.io/portfolio]([https://rupesh-jena-portfolio.netlify.app/])

## ✨ Features

- **Dark Theme**: Modern black background with vibrant green (#00ff88) accents
- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Interactive Particles**: Dynamic particle background using Particles.js
- **Custom Cursor**: Animated cursor with hover effects and smooth transitions
- **Typing Animation**: Dynamic text effect showcasing different roles
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional form with validation and user feedback
- **Performance Optimized**: Lightweight vanilla JavaScript implementation

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Particles.js** - Dynamic background particle effects

## 🏗️ Project Structure

```
portfolio/
├── images/
│   └── profile.jpg              # Profile/avatar image
├── index.html                   # Main HTML file
├── styles.css                   # Complete stylesheet
├── index.js                     # JavaScript functionality
├── particles.json               # Particle.js configuration
├── Rupesh_Jena_Resume.pdf      # Downloadable resume
└── README.md                    # Project documentation
```

## 🎯 Website Sections

### Header & Navigation
- Fixed navigation bar with smooth scroll links
- Responsive hamburger menu for mobile devices
- Clean logo/brand positioning

### Hero Section
- Dynamic typing effect showing multiple roles
- Particle.js animated background
- Call-to-action buttons (Resume download, Contact)
- Professional introduction with scroll indicator

### About Section
- Personal introduction and background
- Professional summary and skills overview
- Profile image with hover effects

### Skills Section
- Categorized skill sets (Frontend, Backend, Tools)
- Interactive skill badges with technology logos
- Responsive grid layout

### Projects Section
- Portfolio project showcase with hover effects
- Technology stack tags for each project
- Links to live demos and source code
- Detailed project descriptions

### Contact Section
- Contact form with validation
- Social media links and professional details
- Form submission feedback

### Footer
- Copyright information and social links
- Back to top functionality

## ⚙️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Text editor (VS Code, Sublime Text, etc.)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/RupeshJenaa/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply double-click index.html or
   open index.html
   ```

3. **Development Server (Optional)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization

### Color Scheme
```css
:root {
  --primary-color: #00ff88;      /* Bright green accent */
  --secondary-color: #0066cc;    /* Blue highlights */
  --background-dark: #000000;    /* Pure black background */
  --text-primary: #ffffff;       /* Primary white text */
  --text-secondary: #cccccc;     /* Secondary gray text */
  --accent-orange: #ff6b35;      /* Orange accents */
}
```

### Typography
- **Primary Font**: Inter, -apple-system, BlinkMacSystemFont, sans-serif
- **Monospace**: 'JetBrains Mono', 'Fira Code', Consolas, monospace
- **Responsive scaling** using clamp() function

### Updating Content
1. **Personal Info**: Edit hero section and about content in `index.html`
2. **Skills**: Modify skill categories and items
3. **Projects**: Add/update project cards with descriptions and links
4. **Styling**: Update CSS custom properties for colors and fonts
5. **Particles**: Edit `particles.json` for background effects

## 📱 Responsive Design

- **Mobile** (< 480px): Single column layout, hamburger menu
- **Tablet** (480px - 768px): Two-column layout, adjusted typography
- **Desktop** (> 768px): Multi-column layouts, enhanced hover effects

## 🔍 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Access via `https://username.github.io/portfolio`

### Netlify/Vercel
1. Connect GitHub repository
2. Deploy automatically on push
3. Zero configuration needed for static site

## 📊 Performance

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Optimized**: Compressed images and efficient code structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines
- Follow existing code style and structure
- Test across multiple browsers and devices
- Update documentation for new features
- Optimize for performance and accessibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Rupesh Jena**
- GitHub: [@RupeshJenaa](https://github.com/RupeshJenaa)
- Portfolio: [Live Demo](https://rupeshjenaa.github.io/portfolio)
- Email: Available through contact form on portfolio

## 🙏 Acknowledgments

- [Particles.js](https://vincentgarreau.com/particles.js/) for background animations
- [Google Fonts](https://fonts.google.com/) for typography
- Inspiration from modern web design trends

## 🚧 Future Enhancements

- [ ] Blog section integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced animation library integration
- [ ] PWA (Progressive Web App) features
- [ ] Enhanced SEO optimization

---

⭐ **If you found this project helpful, please consider giving it a star!**

🔄 **Fork and customize it for your own portfolio**
