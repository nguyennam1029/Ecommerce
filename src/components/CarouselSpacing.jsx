import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";

export function CarouselSpacing() {
  const [products, setProducts] = React.useState();
  // console.log("🚀 ~ CarouselSpacing ~ products:", products);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/electronics?limit=10"
        );

        setProducts(response?.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {products &&
          products.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div className="h-[208px] p-5 bg-[#ffb0b0db] rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="px-5 py-[10px] rounded-lg bg-[#494949] text-sm text-white w-fit">
                      IPHONE
                    </p>
                    <p className="my-5">
                      <svg
                        width="62"
                        height="62"
                        viewBox="0 0 62 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="62" height="62" rx="16" fill="white" />
                        <g clipPath="url(#clip0_22_113)">
                          <path
                            d="M43.46 32.6274C43.4082 26.7474 48.1797 23.9245 48.3955 23.7869C45.7105 19.7898 41.5318 19.2422 40.041 19.1778C36.4868 18.8118 33.1025 21.3067 31.3009 21.3067C29.4993 21.3067 26.7136 19.2305 23.7666 19.2891C19.8872 19.3477 16.3158 21.5819 14.3185 25.1134C10.2923 32.2203 13.2911 42.7534 17.2108 48.522C19.1303 51.342 21.4154 54.5191 24.4199 54.402C27.315 54.2849 28.4086 52.4986 31.9024 52.4986C35.3961 52.4986 36.3804 54.402 39.4396 54.3464C42.5505 54.2849 44.5248 51.4649 46.4299 48.6362C48.6286 45.3624 49.5381 42.194 49.5899 42.0271C49.5208 41.9979 43.5233 39.6582 43.46 32.6274Z"
                            fill="#222222"
                          />
                          <path
                            d="M37.7127 15.1889C39.3071 13.224 40.3834 10.4919 40.0869 7.76868C37.7902 7.86248 35.0103 9.32655 33.3613 11.2914C31.8849 13.028 30.5899 15.8097 30.9408 18.4775C33.5023 18.6795 36.1182 17.1508 37.7127 15.1889Z"
                            fill="#222222"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_22_113">
                            <rect
                              width="37.2"
                              height="46.5"
                              fill="white"
                              transform="translate(12.4 7.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                    <h3 className="text-2xl text-[#222222] font-semibold">
                      UP to 80% OFF
                    </h3>
                  </div>
                  <img src={item.image} alt="" className="w-[150px] h-[183px] mix-blend-multiply" />
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
