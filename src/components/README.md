# Components Organization Guide

This guide explains how components are organized in the YouthTech project to make collaboration easier for beginners and experienced developers.

## 📁 Folder Structure

```
src/
├── components/
│   ├── CommonComponents/          # Shared components used across multiple pages
│   │   ├── Navbar.jsx            # Navigation bar (used on all pages)
│   │   ├── Footer.jsx           # Footer component (to be created)
│   │   └── LoadingSpinner.jsx   # Loading component (to be created)
│   │
│   ├── HomepageComponents/        # Components specific to homepage
│   │   ├── HeroSection.jsx       # Main hero banner
│   │   ├── FeaturesSection.jsx   # Features showcase
│   │   ├── StatsSection.jsx      # Statistics display
│   │   └── TestimonialsSection.jsx # User testimonials
│   │
│   ├── AboutUsComponents/         # Components for About Us page
│   │   ├── AboutHero.jsx         # About page hero
│   │   ├── MissionVision.jsx     # Mission and vision
│   │   ├── TeamSection.jsx       # Team members
│   │   └── ValuesSection.jsx     # Company values
│   │
│   └── ContactComponents/         # Components for Contact page
│       ├── ContactForm.jsx       # Contact form
│       ├── ContactInfo.jsx       # Contact details
│       └── MapSection.jsx        # Location map
│
└── pages/                        # Page components that combine multiple components
    ├── Home.jsx                  # Homepage (combines HomepageComponents)
    ├── About.jsx                 # About page (combines AboutUsComponents)
    ├── Contact.jsx                # Contact page (combines ContactComponents)
    └── Programs.jsx              # Programs page
```

## 🎯 Component Naming Conventions

### File Naming
- Use PascalCase for component files: `HeroSection.jsx`
- Be descriptive: `ContactForm.jsx` not `Form.jsx`
- Include the purpose: `MissionVision.jsx` not `Mission.jsx`

### Component Naming
- Export components with descriptive names:
```jsx
// ✅ Good
export const HeroSection = () => { ... }
export const ContactForm = () => { ... }

// ❌ Avoid
export const Hero = () => { ... }
export const Form = () => { ... }
```

## 📝 How to Add New Components

### 1. Determine the Component Type
- **CommonComponents**: Used on multiple pages (Navbar, Footer, etc.)
- **Page-Specific**: Only used on one page (HeroSection, ContactForm, etc.)

### 2. Create the Component
```bash
# For homepage components
touch src/components/HomepageComponents/NewComponent.jsx

# For common components
touch src/components/CommonComponents/NewComponent.jsx
```

### 3. Component Template
```jsx
import React from 'react';

const NewComponent = () => {
  return (
    <div className="new-component">
      {/* Component content */}
    </div>
  );
};

export default NewComponent;
```

## 🔗 How to Use Components in Pages

### Example: Home.jsx
```jsx
import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';
import HeroSection from '../components/HomepageComponents/HeroSection';
import FeaturesSection from '../components/HomepageComponents/FeaturesSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
```

## 🎨 Styling Guidelines

### Tailwind Classes
- Use the custom YouthTech colors defined in `tailwind.config.js`:
  - `bg-youth-primary` for primary green
  - `text-youth-orange` for orange text
  - `border-youth-red` for red borders

### Component Styling
```jsx
// ✅ Good - Use semantic class names
<div className="hero-section bg-youth-primary text-white">
  <h1 className="hero-title text-4xl font-bold">Welcome to YouthTech</h1>
</div>

// ❌ Avoid - Generic class names
<div className="div1 bg-green-500 text-white">
  <h1 className="h1 text-4xl">Welcome</h1>
</div>
```

## 🚀 Best Practices for Beginners

### 1. Start Small
- Create simple components first
- Test each component individually
- Build complex components by combining simple ones

### 2. Use Props for Reusability
```jsx
// ✅ Good - Reusable component
const Button = ({ text, color, onClick }) => {
  return (
    <button 
      className={`px-4 py-2 rounded ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Usage
<Button text="Donate Now" color="bg-youth-orange" onClick={handleClick} />
```

### 3. Keep Components Focused
- One component = One responsibility
- If a component is doing too much, split it into smaller components

### 4. Document Your Components
```jsx
/**
 * HeroSection - Main banner for homepage
 * @param {string} title - Main heading text
 * @param {string} subtitle - Subheading text
 * @param {string} backgroundImage - Background image URL
 */
const HeroSection = ({ title, subtitle, backgroundImage }) => {
  // Component implementation
};
```

## 🔧 Development Workflow

### 1. Create a New Feature
```bash
# Create new component
touch src/components/HomepageComponents/NewFeature.jsx

# Create corresponding page if needed
touch src/pages/NewPage.jsx
```

### 2. Test Your Component
```jsx
// Create a simple test in your component
const NewFeature = () => {
  console.log('NewFeature component loaded'); // For debugging
  
  return (
    <div>
      <h2>New Feature</h2>
      <p>This is a new feature component</p>
    </div>
  );
};
```

### 3. Import and Use
```jsx
// In your page component
import NewFeature from '../components/HomepageComponents/NewFeature';

const Home = () => {
  return (
    <div>
      <Navbar />
      <NewFeature />
    </div>
  );
};
```

## 📚 Learning Resources

- [React Components Guide](https://react.dev/learn/your-first-component)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [YouthTech Brand Colors](./tailwind.config.js)

## 🤝 Collaboration Tips

1. **Ask Questions**: Don't hesitate to ask for help
2. **Follow Naming Conventions**: Keep the structure consistent
3. **Test Before Committing**: Make sure your components work
4. **Document Changes**: Update this README when adding new patterns

---

**Need Help?** 
- Check the main project README.md
- Ask team members for guidance
- Review existing components for examples
