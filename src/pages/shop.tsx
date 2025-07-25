import {Header} from '../components/header';
import { ProductCard } from '../components/productCard';
import { useState } from 'react';
import bueImage from '../assets/bue.jpg';
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
  const [activeFilter, setActiveFilter] = useState('all');
  
  const products = [
    { id: 1, type:'shoe', name: 'Bue', price: '45.00', image: bueImage },
    { id: 2, type:'shoe', name: 'Skjold', price: '45.00', image: skjold },
    { id: 3, type:'shoe', name: 'Fille', price: '45.00', image: fille },
    { id: 4, type:'shoe', name: 'Mikka', price: '45.00', image: mikka },
    { id: 5, type:'shoe', name: 'Mint', price: '45.00', image: mint },
    { id: 6, type:'shoe', name: 'Purple', price: '45.00', image: purple },
    { id: 7, type:'shoe', name: 'Patent Mint', price: '50.00', image: patentmint },
    { id: 8, type:'shoe', name: 'Gold', price: '45.00', image: gold },
    { id: 9, type:'shoe', name: 'Peoni', price: '45.00', image: peoni },
    { id: 10, type:'shoe', name: 'Birk', price: '45.00', image: birk },
    { id: 11, type:'shoe', name: 'Vigga', price: '45.00', image: vigga },
    { id: 12, type:'shoe', name: 'Ville', price: '45.00', image: ville },
    { id: 13, type:'lace', name: 'Coral Laces', price: '10.00', image: corallaces },
    { id: 14, type:'lace', name: 'Turquoise Laces', price: '10.00', image: turquoislaces },
    { id: 15, type:'lace', name: 'Royal Laces', price: '10.00', image: royallaces },
    { id: 16, type:'lace', name: 'Yellow Laces', price: '10.00', image: yellowlaces },
    { id: 17, type:'lace', name: 'White Laces', price: '10.00', image: whitelaces },
    { id: 18, type:'lace', name: 'Blue Laces', price: '10.00', image: bluelaces }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.type === activeFilter);

  return (
    <div>
      <Header 
        className=' h-[50vh] bg-center '
        title="Shop"
        subtitle={<span></span>}
        showButton={false}
        
      />
      <main className="p-4 md:p-20 text-center">
        <ul className='flex justify-center space-x-6 my-4'>
          <li>
            <button 
              onClick={() => setActiveFilter('all')} 
              className={`hover:text-gray-500 ${activeFilter === 'all' ? ' font-bold' : ''}`}
            >
              Alle
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveFilter('shoe')} 
              className={`hover:text-gray-500 ${activeFilter === 'shoe' ? ' font-bold' : ''}`}
            >
              Kids Shoes
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveFilter('lace')} 
              className={`hover:text-gray-500 ${activeFilter === 'lace' ? ' font-bold' : ''}`}
            >
              No-tie Laces
            </button>
          </li>
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}