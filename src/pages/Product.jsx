import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products.json";
import NotFound from "./NotFound.jsx";// Componente para produtos não encontrados

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full md:w-1/2 rounded-lg object-cover"
          loading="lazy"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-emerald-600 font-semibold">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}