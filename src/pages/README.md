# Pages Organization Guide

This guide explains how pages are organized in the YouthTech project and how to create new pages.

## 📁 Pages Structure

```
src/pages/
├── Home.jsx              # Homepage - combines HomepageComponents
├── About.jsx             # About Us page - combines AboutUsComponents  
├── Contact.jsx           # Contact page - combines ContactComponents
├── Programs.jsx          # Programs page
├── Team.jsx              # Team page
└── Blog.jsx              # Blog page
```

## 🎯 Page Component Structure

Each page component should:
1. Import necessary components
2. Combine them into a complete page
3. Handle page-specific logic
4. Export as default

### Example: Home.jsx
```jsx
import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';
import HeroSection from '../components/HomepageComponents/HeroSection';
import FeaturesSection from '../components/HomepageComponents/FeaturesSection';
import StatsSection from '../components/HomepageComponents/StatsSection';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
    </div>
  );
};

export default Home;
```

## 📝 Creating New Pages

### 1. Create the Page File
```bash
touch src/pages/NewPage.jsx
```

### 2. Use the Page Template
```jsx
import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';

const NewPage = () => {
  return (
    <div className="new-page">
      <Navbar />
      <main>
        {/* Page content goes here */}
        <h1>New Page</h1>
        <p>This is a new page component</p>
      </main>
    </div>
  );
};

export default NewPage;
```

### 3. Add to App.jsx
```jsx
import NewPage from './pages/NewPage';

// Add to your routing or component switching logic
```

## 🎨 Page Styling Guidelines

### Page Container
```jsx
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="page-content">
        {/* Page sections */}
      </main>
    </div>
  );
};
```

### Section Spacing
```jsx
// Use consistent spacing between sections
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section content */}
  </div>
</section>
```

## 🔧 Page-Specific Features

### SEO Meta Tags
```jsx
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>YouthTech - Empowering Tanzania Through Technology</title>
        <meta name="description" content="YouthTech is dedicated to fostering technology education in Tanzania" />
      </Helmet>
      {/* Page content */}
    </div>
  );
};
```

### Page State Management
```jsx
import { useState, useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Page initialization logic
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Page content */}
    </div>
  );
};
```

## 📱 Responsive Design

### Mobile-First Approach
```jsx
const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Use responsive classes */}
        <section className="py-8 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl">
              Responsive Heading
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
};
```

## 🚀 Best Practices

### 1. Keep Pages Simple
- Pages should mainly combine components
- Move complex logic to custom hooks
- Keep page components focused on layout

### 2. Use Semantic HTML
```jsx
const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section aria-label="Hero Section">
          <HeroSection />
        </section>
        <section aria-label="Features">
          <FeaturesSection />
        </section>
      </main>
    </div>
  );
};
```

### 3. Handle Loading States
```jsx
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Page content */}
    </div>
  );
};
```

## 🔗 Navigation Between Pages

### Using React Router (if implemented)
```jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
```

### Simple Page Switching
```jsx
// In App.jsx
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};
```

## 📚 Learning Resources

- [React Router Documentation](https://reactrouter.com/)
- [Semantic HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Responsive Design Principles](https://web.dev/responsive-web-design-basics/)

---

**Remember**: Pages are the main entry points that combine multiple components into complete user experiences.
