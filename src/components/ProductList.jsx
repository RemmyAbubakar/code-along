import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Products';

function ProductList() {
  const [products, setProducts] = useState([]);


useEffect(() => {
   const getProducts = async () => {
    const results = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
      );
     setProducts(results.data);
   };
   getProducts();
}, []);

console.log(products);

  return (
    <div className='flex flex-wrap gap-10 justify-center pt-10'>
    {
      products.map((product) => (<Products product={product}/>))
    }</div>
  )
}

export default ProductList;
