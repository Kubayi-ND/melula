import {Header} from '../components/header';

export const Shop = () => {
  return (
    <div>
      <Header 
        title="Shop"
        subtitle={<span></span>}
        showButton={false}
        
      />
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">Shop</h1>
        <p className="mb-4">Explore our collection of colorful and playful kids' shoes designed in Denmark and produced in Portugal.</p>
        {/* Add your shop content here */}
      </main>
    </div>
  );
}