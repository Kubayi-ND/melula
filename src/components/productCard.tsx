
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
    <div className="">
        <a href="">
            <img src={product.image} alt={product.name} className=" w-full h-auto" />
            <h2 className="text-xl mb-2">{product.name}</h2>
            <span className="text-md ">{product.price} &nbsp; €  </span>
        </a>
      
    </div>
  );
};