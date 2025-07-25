import { ShoppingCart, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import defaultHeaderImage from '../assets/headershop.jpg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { useCart } from './ui/cartContext';


// Define types for the Header component props
type HeaderProps = {
  backgroundImage?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  showButton?: boolean;
  className?: string;
  cartItemCount?: number; // Add new prop for cart item count
};

export const Header = ({
  backgroundImage = defaultHeaderImage,
  title = "",
  subtitle = <><span> STEPS IN</span><span>&nbsp;LIFE</span></>,
  buttonText = "",
  buttonLink = "",
  showButton = true,
  className = "",
}: HeaderProps) => {
  // Use the cart context
  const { cart } = useCart?.() || { cart: [] };
  const cartItemCount = cart?.length || 0;

  // Add state to track if Shop link is hovered
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Only show the button if explicitly enabled AND we have button text
  const shouldShowButton = showButton && !!buttonText;


  return (
    <>
      {/* Mobile Navigation Bar */}
      {isMobile && (
        <div className="bg-[#002d5a] text-white w-full p-6 flex justify-between items-center">
          <a href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Vite logo" className="h-auto w-24" />
          </a>

            <div className="relative mr-6">
              <NavLink to="#">
                   <ShoppingCart className="flex  h-8 w-8" />
                {cartItemCount >= 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#fbb498] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </NavLink>
               
            
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          
        </div>
      )}
      
      {/* Mobile Slide Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 ">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 left-4 text-black"
          >
            <X size={24} />
          </button>
          <nav className="p-4 text-center">
            <ul className="pt-8 flex flex-col space-y-8 text-center text-2xl font-semibold">
              <li>
                <NavLink 
                  to="/shop" 
                  className="text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    
      <header 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
        className={`text-white md:pt-12 px-4 md:px-24 bg-fixed ${className}`}
      >
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex justify-between items-center">
            <a href="/">
              <img src="/logo.png" alt="Vite logo" className="h-auto w-40" />
            </a>
            <nav className='p-4'>
              <ul className="flex space-x-4 text-center text-md font-bold">
                <li>
                  <NavLink 
                    to="/shop" 
                    className={({ isActive }) => 
                      isActive ? "text-white" : "text-white"
                    }
                    onMouseEnter={() => setIsShopHovered(true)}
                    onMouseLeave={() => setIsShopHovered(false)}
                  >
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      isActive ? "text-white" : "text-white"
                    }
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    ABOUT
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="pr-8 relative">
              <a href="#" className="text-white hover:text-white">
                <ShoppingCart className="h-8 w-8" />
                {cartItemCount >= 0 && (
                  <span className="absolute -top-1 left-5 bg-[#fbb498] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </a>
            </div>   
          </div>
        )}
      
      
      <div className=" pt-6 md:mt-19 text-wrap "> 
        <h1 className='text-[60px] lg:text-[67px] text-white text-center  '>
          <span>{title}</span>
        </h1>
        <h1 className="text-[60px] md:text-[67px] text-white text-center">
          {subtitle}
        </h1>
      </div>
      
      {shouldShowButton && (
        <div className='pt-8'>
          <a 
            className="bg-[#0df8ad] text-white text-[18px] hover:opacity-75 mt-4 rounded-full text-md font-semibold py-5 px-10" 
            href={buttonLink}
          >
            {buttonText}
          </a>
        </div>
      )}
    </header>
    </>
  );
}