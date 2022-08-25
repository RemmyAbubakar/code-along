import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../components/Products';
import useAxios from '../hooks/useAxios';
import Spinner from '../components/Spinner';
import {useProductContext} from "../context/productContext"


function ProductList() {
  // const { data, isLoading, error } = useAxios( "https://api.escuelajs.co/api/v1/products");
  const { data, isLoading, error } = useAxios( "https://fakestoreapi.com/products");



// useEffect(() => {
//    const getProducts = async () => {
//     const results = await axios.get(
//       "https://api.escuelajs.co/api/v1/products"
//       );
//      setProducts(results.data);
//    };
//    getProducts();
// }, []);

const {products, setProducts} = useProductContext();

useEffect(() => {
  setProducts(data);
}, [data]);

if (isLoading) return <Spinner />;

if (error) return <p>{error}</p>;


// console.log(data);

  return (
    <div className='flex flex-wrap gap-10 justify-center pt-10'>
    {
      products?.map((data) => (<Products product={data}/>))
    }</div>
  )
}

export default ProductList;
