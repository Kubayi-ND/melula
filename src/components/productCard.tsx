
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
        <a href="">
            <img src={product.image} alt={product.name} className="h-auto " />
            <h2 className="text-ld mb-2 -mt-8">{product.name}</h2>
            <span className="text-sm ">{product.price} &nbsp; €  </span>
        </a>
      
    </div>
  );
};