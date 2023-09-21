import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Pencere boyutu değiştikçe bu fonksiyon çağrılır
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Event dinleyici ekleyin
    window.addEventListener("resize", handleResize);

    // Component kaldırıldığında event dinleyiciyi kaldırın
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Boş bağımlılık dizisi, component yüklendiğinde sadece bir kez çalışmasını sağlar

  return windowSize;
}

export default useWindowSize;
