import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Ubicacion from './components/Ubicacion';
import FAQ from './components/FAQ';

// Componente principal envuelto en Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Componente interno para usar useLocation
function AppContent() {
  const location = useLocation();

  const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9'
    },
    header: {
      backgroundColor: '#003366',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    logo: {
      fontSize: '1.8rem'
    },
    nav: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      padding: '6px 12px',
      borderRadius: '4px',
      transition: 'background 0.3s, color 0.3s'
    },
    activeLink: {
      backgroundColor: '#ffcc00',
      color: '#003366',
      fontWeight: 'bold',
      padding: '6px 12px',
      borderRadius: '4px'
    },
    main: {
      flex: 1,
      padding: '20px'
    },
    homeContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      textAlign: 'justify'
    },
    footer: {
      backgroundColor: '#e0e0e0',
      textAlign: 'center',
      padding: '1rem',
      marginTop: 'auto',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <span style={styles.logo}>📦</span>
          <h1>Sistema Estafeta</h1>
        </div>
        <nav style={styles.nav}>
          <Link
            to="/"
            style={location.pathname === '/' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            style={location.pathname === '/nosotros' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            ¿Quiénes somos?
          </Link>
          <Link
            to="/mision"
            style={location.pathname === '/mision' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Misión
          </Link>
          <Link
            to="/vision"
            style={location.pathname === '/vision' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Visión
          </Link>
          <Link
            to="/ubicacion"
            style={location.pathname === '/ubicacion' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Ubicación
          </Link>
          <Link
            to="/faq"
            style={location.pathname === '/faq' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Preguntas Frecuentes
          </Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Nosotros />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <footer style={styles.footer}>
        <p>© 2026 Sistema de Gestión de Entregas – Osvaldo Preciado Benites</p>
      </footer>
    </div>
  );
}

// Página de inicio
function Home() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      textAlign: 'justify'
    }}>
      <h2>Bienvenido al Sistema de Gestión de Entregas</h2>
      <p>
        Este sistema permite a los operadores de Estafeta registrar el estado de sus entregas
        en tiempo real, asegurando que la información persista incluso si otro operador toma su ruta.
      </p>
    </div>
  );
}

export default App;