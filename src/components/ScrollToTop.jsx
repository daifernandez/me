import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };

    // Usar scrollTo con opciones para un scroll más suave
    window.scrollTo(scrollOptions);

    // Configurar event listener pasivo
    const handleTouchStart = (event) => {
      // Manejar el evento touchstart si es necesario
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Limpieza del event listener
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [pathname]);

  return null;
}
