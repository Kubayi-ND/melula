
export const Header = () => {
  return (
    <header className="bg-[url(assets/headershop.jpg)] bg-center text-white py-10 px-20 h-[40vh]">
      <div className="flex justify-between items-center">
        <img src="/logo.png" alt="Vite logo" className="h-auto w-40" />
        <nav>
          <ul className="flex space-x-4 text-center">
            <li><a href="#" className="hover:text-green-300">SHOP</a></li>
            <li><a href="#" className="hover:text-green-300">ABOUT</a></li>
            
          </ul>
        </nav>
        <div >
          <a href="#" className="text-green-300 hover:text-white">Cart</a>
        </div>
      </div>
    </header>
  );
}