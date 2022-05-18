import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services';

// const categories = [{name:'React',slug:'react'},{name:'Web Development',slug:'web-dev'}]

function Header() {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        getCategories().then(newCategories=> setCategories(newCategories)).catch(err=>console.log(err))
    },[])
  return (
    <div className='container backdrop-blur-lg backdrop-brightness-50 rounded-lg mx-auto px-10 mb-8 lg:sticky lg:top-5 z-40'>
        <div className="border-b w-full inline-block border-yellow-400 py-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        Graph CMS
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category)=>
                    (<Link href={`/category/${category.slug}`} key={category.slug}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span>
                    </Link>)
                    )}
            </div>
        </div>
    </div>
  )
}

export default Header
