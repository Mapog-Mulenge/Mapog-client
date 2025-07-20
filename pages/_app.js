import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Sync theme
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(theme);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
