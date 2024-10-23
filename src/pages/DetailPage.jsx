import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout';

export default function DetailPage() {
  const {id} = useParams();
  const [data, setData] = useState();
  console.log("🚀 ~ DetailPage ~ data:", data)
 useEffect(()=> {
  const fetchData = async() => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setData(response.data)
      console.log("🚀 ~ fetchData ~ response:", response)
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error)
      
    }
  }
  fetchData()

 },[id])

  return (
    <MainLayout>

    <div>DetailPage
      <h1>
       {data?.title}
      </h1>
    </div>
    </MainLayout>
  )
}
