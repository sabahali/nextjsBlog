import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"
export const Navbar = () => {
    return (
        <nav className='bg-slate-600 p-4 sticky top-0 z-10 drop-shadow-xl'>
            <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col md:flex-row'>
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href='/' className=' no-underline hover:text-white text-white/80 '>Sabah Ali</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-5 text-white text-4xl lg:text-5xl">
                 
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaLaptop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
