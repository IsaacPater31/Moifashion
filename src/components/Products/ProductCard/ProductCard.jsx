import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
        <p className="desc">Diseño cómodo y moderno — disponible en varias tallas.</p>
        <div className="card-actions">
          <button className="btn">Ver</button>
          <button className="btn outline">Añadir</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard

