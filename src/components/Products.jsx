// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ ProductList ~ products:", products)

  useEffect(() => {
    // Hàm lấy dữ liệu từ Firestore
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log("🚀 ~ fetchProducts ~ querySnapshot:", querySnapshot)
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}$
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
