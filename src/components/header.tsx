import { ShoppingCart } from 'lucide-react';
import defaultHeaderImage from '../assets/headershop.jpg';

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
  cartItemCount = 0, // Default to 0 items
}: HeaderProps) => {

  // Only show the button if explicitly enabled AND we have button text
  const shouldShowButton = showButton && !!buttonText;

  return (
    <header 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
      className={`bg-center bg-cover text-white pt-12 px-24 ${className}`}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img src="/logo.png" alt="Vite logo" className="h-auto w-40" />
        </a>
        <nav className='p-4'>
          <ul className="flex space-x-4 text-center text-md font-bold">
            <li><a href="shop" className="hover:text-gray-300">SHOP</a></li>
            <li><a href="about" className="hover:text-gray-300">ABOUT</a></li>
          </ul>
        </nav>
        <div className="pr-8 relative">
          <a href="#" className="text-white hover:text-white">
            <ShoppingCart className="h-8 w-8" />
            {cartItemCount >= 0 && (
              <span className="absolute -top-1  left-5 bg-[#fbb498] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </a>
        </div>   
      </div>
      
      <div className="mt-19 text-wrap"> 
        <h1 className="text-[67px] text-white text-center">
          <span>{title}</span>
        </h1>
        <h1 className="text-[67px] text-white text-center">
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
  );
}