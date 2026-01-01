import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Gamepad2, Sparkles, Github, ChevronRight } from 'lucide-react';
import './i18n';
import './index.css';

// --- Shared Components ---

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.split('-')[0];

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">TheStoway</Link>
          <div className="nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav.home')}</Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>{t('nav.projects')}</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link>
          </div>
          <div className="lang-switch">
            <button
              className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${currentLanguage === 'es' ? 'active' : ''}`}
              onClick={() => changeLanguage('es')}
            >
              ES
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '24px' }}>
          <a href="https://github.com/TheStoway" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github size={24} />
          </a>
          <a href="https://discord.gg/29fRaUEq" target="_blank" rel="noopener noreferrer" title="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
        </div>
        <p>{t('footer')}</p>
      </div>
    </footer>
  );
};

// --- Page Components ---

const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <span className="hero-badge">{t('nav.home')}</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              TheStoway
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('subtitle')}
            </motion.p>
            <motion.p
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('description')}
            </motion.p>
            <div className="hero-btns">
              <Link to="/projects" className="btn btn-primary">{t('hero.cta')}</Link>
              <Link to="/projects" className="btn btn-secondary">{t('hero.secondary')}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="section container">
        <div className="grid">
          <motion.div
            className="card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-icon"><Code2 size={24} color="#007bff" /></div>
            <h3>Open Source</h3>
            <p>Contributing to the community through modern tools and libraries built for developers.</p>
          </motion.div>
          <motion.div
            className="card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-icon"><Gamepad2 size={24} color="#34a853" /></div>
            <h3>Game Dev</h3>
            <p>Crafting immersive experiences and interactive stories using cutting-edge game engines.</p>
          </motion.div>
          <motion.div
            className="card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-icon"><Sparkles size={24} color="#fbbc04" /></div>
            <h3>Experiments</h3>
            <p>Pushing boundaries with AI, creative coding, and experimental web technologies.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="page-content container">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{t('about.title')}</h1>
        <p>{t('about.intro')}</p>

        <div className="work-list">
          <p><strong>{t('about.work_title')}</strong></p>
          <div className="work-item"><span></span> {t('about.item1')}</div>
          <div className="work-item"><span></span> {t('about.item2')}</div>
          <div className="work-item"><span></span> {t('about.item3')}</div>
        </div>

        <div className="about-footer">
          {t('about.footer')}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="page-content container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{t('projects_page.title')}</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          {t('projects_page.subtitle')}
        </p>

        <div style={{
          padding: '80px 40px',
          background: 'var(--bg-secondary)',
          borderRadius: '24px',
          border: '1px dashed var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <Code2 size={48} color="var(--text-secondary)" opacity={0.5} />
          <h2 style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>
            {t('projects_page.no_projects')}
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
