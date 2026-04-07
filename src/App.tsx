import { useEffect, useState } from "react";
import Benefits from "./scenes/Benefits";
import Classes from "./scenes/Classes";
import Contact from "./scenes/Contact";
import Home from "./scenes/Home";
import Navbar from "./scenes/Navbar";
import Footer from "./scenes/Footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [selectedPage, setSelectedPage] = useState("none");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 dark:bg-dark-bg">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
