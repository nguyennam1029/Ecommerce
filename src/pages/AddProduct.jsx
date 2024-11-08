// src/components/AddProduct.js
import { Button } from "@/components/ui/button";
import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [isLoading, setIsLoading] = useState(false); // Trạng thái loading

   const handleAddProduct = async () => {
      if (!name || !price) {
         toast.error("Vui lòng điền đầy đủ thông tin!");
         return;
      }
  setIsLoading(true); // Bắt đầu loading
      try {
         await addDoc(collection(db, "products"), {
            name,
            price: parseFloat(price),
         });
         toast.success("Thêm sản phẩm thành công!");
         setName("");
         setPrice("");
      } catch (error) {
         toast.error("Lỗi khi thêm sản phẩm!");
      }finally {
         setIsLoading(false); // Kết thúc loading
      }
   };

   return (
      <div>
         <h2>Thêm sản phẩm</h2>
         <input
            type="text"
            placeholder="Tên sản phẩm"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="number"
            placeholder="Giá sản phẩm"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
         />
         <Button onClick={handleAddProduct} disabled={isLoading}>
            {isLoading ? (
               <span className="loading-spinner" aria-label="loading"></span>
            ) : (
               "Thêm sản phẩm"
            )}
         </Button>
      </div>
   );
};

export default AddProduct;
