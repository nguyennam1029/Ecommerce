import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarouselSpacing } from "@/components/CarouselSpacing";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout";
import ProductList from "@/components/Products";

function HomePage() {
  const [products, setProducts] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProducts(response?.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <MainLayout>

    <div className="max-w-[1202px] mx-auto">
      <div className="flex mt-[120px] justify-between border-b border-b-[#EDEDED] pb-4 mb-10  ">
        <h1 className="font-bold text-[#666666]   ">
          Grab the best deal on{" "}
          <span className=" text-[#008ECC]">Smartphones</span>
        </h1>
        <Link to={""} className="text-base flex items-center gap-2">
          View All
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.375 3.75L11.625 9L6.375 14.25"
                stroke="#008ECC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {products &&
          products.map((item) => (
            <Link to={`/detail/${item.id}`}
              className="shadow-md border border-[#f9f9f9] rounded-2xl overflow-hidden"
              key={item.id}
            >
              <div className="bg-[#F5F5F5] flex items-center justify-center ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[212px] object-contain"
                />
              </div>
              <div className="p-3">
                <h1 className="text-base mb-3 font-semibold line-clamp-1">{item.title}</h1>
                <div className="flex gap-3 border-b border-[#EDEDED] pb-3">
                  <span className="font-bold">₹{item.price}</span>
                  <span className="line-through">₹{item.price_del || 85999 }</span>
                </div>
                <div className="text-[#249B3E] font-semibold pt-3">
                  <p>Save - ₹{item.price_del - item.price}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="flex mt-[120px] justify-between border-b border-b-[#EDEDED] pb-4 mb-10  ">
        <h1 className="font-bold text-[#666666]   ">
          Shop From
          <span className=" text-[#008ECC]"> Top Categories</span>
        </h1>
        <Link to={""} className="text-base flex items-center gap-2">
          View All
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.375 3.75L11.625 9L6.375 14.25"
                stroke="#008ECC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-7 gap-[46px]">
        {Array.from({ length: 7 }).map((_, index) => (
          <div className="" key={index}>
            <div className="w-[132px] h-[132px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
              <img src="/image 3 (4).png" alt="" />
            </div>
            <p className=" text-center mt-5 font-medium">Cosmetics</p>
          </div>
        ))}
      </div>
      <div className="flex mt-[120px] justify-between border-b border-b-[#EDEDED] pb-4 mb-10  ">
        <h1 className="font-bold text-[#666666]   ">
          Top
          <span className=" text-[#008ECC]">Electronics Brands</span>
        </h1>
        <Link to={""} className="text-base flex items-center gap-2">
          View All
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.375 3.75L11.625 9L6.375 14.25"
                stroke="#008ECC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
      <CarouselSpacing />
    


    <ProductList />
    </div>

    </MainLayout>

  );
}

export default HomePage;
