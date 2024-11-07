export { Page }

// Local import
import { useData } from '../../../renderer/useData'

function Page() {
  const { product } = useData()
  return (
    <>
      <h2>{product.title}</h2>
      <p>
        <strong>Description</strong>: {product.description}
      </p>

      <p className="capitalize">
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Availability:</strong> {product.stock} in stock
      </p>
      <p>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{ width: '100%', height: 'auto' }}
        />
      </p>
    </>
  )
}
