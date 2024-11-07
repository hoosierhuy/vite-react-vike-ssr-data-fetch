export { data }

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from 'node-fetch'

/** The reason for the eslint escape below is because the "pageContext" */
// eslint-disable-next-line no-unused-vars
const data = async (pageContext) => {
  const response = await fetch('https://dummyjson.com/products?limit=5')

  const data = await response.json()

  // Minimize the amount of data sent across the wire
  const products = minimize(data.products)

  return {
    products,
    title: `${products.length} Products`,
  }
}

function minimize(products) {
  return products.map((product) => {
    const { title, rating, id, thumbnail } = product

    return { title, rating, id, thumbnail }
  })
}
