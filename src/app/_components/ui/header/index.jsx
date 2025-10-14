'use client';
import { Dot } from "lucide-react";
import { MagneticButton } from "../../common/magnetic-button";
import { useEffect, useState } from "react";
import { FloatingMenuButton } from "../../common/floating-menu-button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full px-4 lg:p-6 z-49 text-white">
      {/* Floating Menu Button */}
      <FloatingMenuButton 
        isMenuOpen={isMenuOpen} 
        onToggle={handleMenuToggle} 
      />
      
      <nav className="flex justify-between items-center h-16">
          {/* Logo - Home button */}

          <div className="flex-shrink-0">
            <MagneticButton className="flex items-center space-x-3" to="/">
              <img
                src="/logo-white.png"
                alt="Abdulrahman Nasser Logo"
                className="h-8 w-8"
              />
            </MagneticButton>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <MagneticButton to="/about">About</MagneticButton>
              <MagneticButton to="/projects">Projects</MagneticButton>
              <MagneticButton to="/contact">Contact</MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MagneticButton onClick={handleMenuToggle}>
              <span className="flex items-center ml-2 text-sm font-medium">
                <Dot className="-mr-1" />
                Menu
              </span>
            </MagneticButton>
          </div>
      </nav>
    </header>
  );
}
