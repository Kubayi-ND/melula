import {Header} from '../components/header';
import { ProductCard } from '../components/productcard';
import bueImage from '../assets/Bue.jpg';
import skjold from '../assets/skjold.jpg';
import fille from '../assets/fille.jpg';
import mikka from '../assets/mikka.jpg';
import mint from '../assets/mint.jpg';
import purple from '../assets/purple.jpg';
import patentmint from '../assets/patent-mint.jpg';
import gold from '../assets/gold.jpg';
import peoni from '../assets/peoni.jpg';
import birk from '../assets/birk.jpg';
import vigga from '../assets/vigga.jpg';
import ville from '../assets/ville.jpg';
import corallaces from '../assets/coral-laces.jpg';
import turquoislaces from '../assets/turqouis-laces.jpg';
import royallaces from '../assets/royal-laces.jpg';
import yellowlaces from '../assets/yellow-laces.jpg';
import whitelaces from '../assets/white-laces.jpg';
import bluelaces from '../assets/blue-laces.jpg';


export const Shop = () => {
  const products = [
    { id: 1, name: 'Bue', price: '45.00', image: bueImage },
    { id: 2, name: 'Skjold', price: '45.00', image: skjold },
    { id: 3, name: 'Fille', price: '45.00', image: fille },
    { id: 4, name: 'Mikka', price: '45.00', image: mikka },
    { id: 5, name: 'Mint', price: '45.00', image: mint },
    { id: 6, name: 'Purple', price: '45.00', image: purple },
    { id: 7, name: 'Patent Mint', price: '50.00', image: patentmint },
    { id: 8, name: 'Gold', price: '45.00', image: gold },
    { id: 9, name: 'Peoni', price: '45.00', image: peoni },
    { id: 10, name: 'Birk', price: '45.00', image: birk },
    { id: 11, name: 'Vigga', price: '45.00', image: vigga },
    { id: 12, name: 'Ville', price: '45.00', image: ville },
    { id: 13, name: 'Coral Laces', price: '10.00', image: corallaces },
    { id: 14, name: 'Turquoise Laces', price: '10.00', image: turquoislaces },
    { id: 15, name: 'Royal Laces', price: '10.00', image: royallaces },
    { id: 16, name: 'Yellow Laces', price: '10.00', image: yellowlaces },
    { id: 17, name: 'White Laces', price: '10.00', image: whitelaces },
    { id: 18, name: 'Blue Laces', price: '10.00', image: bluelaces }
  ];

  return (
    <div>
      <Header 
        className=' h-[50vh] bg-center '
        title="Shop"
        subtitle={<span></span>}
        showButton={false}
        
      />
      <main className="p-4 md:p-20 text-center">
        <ul className='flex justify-center space-x-6 my-4 '>
          <li><a href="#" className='hover:text-gray-500'>Alle</a></li>
          <li><a href="#" className='hover:text-gray-500'>Kids Shoes</a></li>
          <li><a href="#" className='hover:text-gray-500'>No-tie Laces</a></li>
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}