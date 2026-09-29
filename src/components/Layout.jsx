import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

/**
 * Layout — fixed nav + routed page + footer.
 * ScrollToTop restores scroll position on route change. If the target URL
 * carries a hash (e.g. /acoustic-panels#baffles) we honour it by scrolling
 * that element into view once the page has rendered, instead of forcing top.
 * Uses behavior 'instant' so it escapes html { scroll-behavior: smooth }.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Give the freshly mounted page a frame to lay out before scrolling.
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}