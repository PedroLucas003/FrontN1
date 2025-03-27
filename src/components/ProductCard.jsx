function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image" 
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard