import { useFetch } from "../hooks/useFetch"

const ProductList = () => {
  const { data, loading } = useFetch('https://dummyjson.com/products')
  
  if (loading) return <div>Loading...</div>

  return (
    <div>
      <ul>
        {data.products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList