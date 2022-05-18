import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {getCategories} from '../services'

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    getCategories().then(newCategories=> setCategories(newCategories)).catch(err=>console.log(err))
  },[])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg pb-12">
      <h3 className="mb-8 border-b text-xl font-semibold">
        Categories
      </h3>
      {categories.map(category =>(<Link key={category.slug} href={category.slug}>
        <span className="cursor-pointer block pb-3 mb-3">{category.name}</span></Link>))}
    </div>
  )
}

export default Categories
