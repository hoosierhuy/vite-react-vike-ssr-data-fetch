export default Page

// Local import
import { useData } from '../../../renderer/useData'

function Page() {
  const { products } = useData()

  return (
    <>
      <h1>Dummy Products</h1>

      {products.map(({ id, title, rating, thumbnail }) => (
        <div key={id} className="product-card">
          <a href={`/fetching-products/${id}`}>{title}</a>
          <p className="capitalize">Rating: {rating} ⭐️</p>
          <p>
            <img src={thumbnail} />
          </p>
        </div>
      ))}

      <p>
        Source: <a href="https://dummyjson.com/products">dummy json</a>.
      </p>
      <p>
        Data can be fetched by using the <code>data()</code> hook.
      </p>
    </>
  )
}
