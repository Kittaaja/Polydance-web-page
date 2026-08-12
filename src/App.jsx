import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navigation/navbar";
import HomePage from "./pages/homePage";
import ClassesPage from "./pages/classesPage";
import EventsPage from "./pages/events";
import QuizPage from "./pages/quizPage";
import Footer from "./components/navigation/footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer = null;
    let mutationObserver = null;
    const start = () => {
      const elements = Array.from(document.querySelectorAll('.reveal'));
      const observed = new WeakSet();

      if (prefersReduced) {
        elements.forEach(el => {
          el.classList.add('is-visible');
          el.style.transition = 'none';
        });
        return;
      }

      observer = new IntersectionObserver((entries, obs) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        visible.forEach((entry, idx) => {
          const el = entry.target;
          // larger stagger for a slower, smoother cascade
          const delay = idx * 140 + 40;
          el.style.transitionDelay = `${delay}ms`;
          // ensure the reveal class has taken effect before toggling visible
          setTimeout(() => {
            el.classList.add('is-visible');
          }, 0);
          obs.unobserve(el);
        });
      }, {
        root: null,
        // increase bottom root margin so elements begin revealing earlier (while still offscreen)
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
      });

      elements.forEach((el, i) => {
        // If already mostly in view (e.g., after navigation), mark visible shortly after mount
        const rect = el.getBoundingClientRect();
        const baseDelay = i * 80 + 30;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // small timeout to allow CSS initial state to apply
          setTimeout(() => el.classList.add('is-visible'), baseDelay);
          observed.add(el);
          return;
        }
        observer.observe(el);
        observed.add(el);
      });

      // Watch for dynamically added .reveal nodes (some components mount slightly later)
      mutationObserver = new MutationObserver(muts => {
        muts.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            // if the added node itself has the class
            if (node.classList && node.classList.contains('reveal')) {
              if (prefersReduced) {
                node.classList.add('is-visible');
              } else if (!observed.has(node)) {
                const r = node.getBoundingClientRect();
                if (r.top < window.innerHeight && r.bottom > 0) {
                  // give a small timeout so transition runs properly
                  setTimeout(() => node.classList.add('is-visible'), 40);
                } else {
                  observer.observe(node);
                }
                observed.add(node);
              }
            }
            // also check descendants
            if (node.querySelectorAll) {
              node.querySelectorAll('.reveal').forEach(child => {
                if (prefersReduced) {
                  child.classList.add('is-visible');
                } else if (!observed.has(child)) {
                  const r2 = child.getBoundingClientRect();
                  if (r2.top < window.innerHeight && r2.bottom > 0) setTimeout(() => child.classList.add('is-visible'), 40);
                  else observer.observe(child);
                  observed.add(child);
                }
              });
            }
          });
        });
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    };

    // small delay to allow browser to perform scroll-to-hash before measuring
    const timer = setTimeout(start, 80);
    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [location]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
