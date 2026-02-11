import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll suave al tope
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Mover el foco al contenido principal para accesibilidad con teclado
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
