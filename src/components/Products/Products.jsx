import ProductCard from './ProductCard'
import './Products.css'

const products = [
  { id: 1, name: 'Playera Oversize', price: '$29.99', img: 'https://picsum.photos/seed/shirt1/600/600' },
  { id: 2, name: 'Chaqueta Denim', price: '$79.00', img: 'https://picsum.photos/seed/shirt2/600/600' },
  { id: 3, name: 'Vestido Floral', price: '$59.50', img: 'https://picsum.photos/seed/shirt3/600/600' },
  { id: 4, name: 'Pantalón Slim', price: '$49.00', img: 'https://picsum.photos/seed/shirt4/600/600' },
  { id: 5, name: 'Sudadera con capucha', price: '$39.99', img: 'https://picsum.photos/seed/shirt5/600/600' },
  { id: 6, name: 'Blazer Casual', price: '$99.00', img: 'https://picsum.photos/seed/shirt6/600/600' }
]

function Products() {
  return (
    <section className="products">
      <h2 className="section-title">Productos destacados</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default Products

