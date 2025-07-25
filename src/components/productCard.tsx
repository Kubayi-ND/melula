
type Product = {
  id: number;
  name: string;
  price: string;
  image: string | { default: string } | any; // Update to accept imported image modules
};

type ProductCardProps = {
  product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
        <a href="">
            <img 
              src={typeof product.image === 'string' ? product.image : product.image} 
              alt={product.name} 
              className="h-auto " 
            />
            <h2 className="text-ld mb-2 -mt-8">{product.name}</h2>
            <span className="text-sm ">{product.price} &nbsp; €  </span>
        </a>
      
    </div>
  );
};