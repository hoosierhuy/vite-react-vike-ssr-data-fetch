export { data }

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from 'node-fetch'

const data = async (pageContext) => {
  const response = await fetch(
    `https://dummyjson.com/products/${pageContext.routeParams.id}`
  )

  let product = await response.json()

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  product = minimize(product)

  return {
    product,
    title: product.title,
  }
}

function minimize(product) {
  const { id, title, description, category, price, stock, images } = product

  product = { id, title, description, category, price, stock, images }

  return product
}
