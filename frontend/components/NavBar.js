// rafce snappet
import React from 'react'
import Link from 'next/link'

const NavBar = ({ cart }) => {
    return (
        <div className='fixed w-full z-50 top-0 shadow-lg shadow-rose-100'>
            <header className="text-gray-900 bg-slate-100 body-font border-0 mt-0 ">
                <div className="container mx-auto flex flex-wrap p-1 md:flex-row items-center flex-end">
                    <Link href='/' className="flex title-font cursor-pointer font-medium items-center text-black  mb-4 md:mb-0">
                        <img width={64} src="/shop8.png" alt="" />
                        <span className="ml-3 cursor-pointer text-xl text-rose-500 mr-11">MyShop</span>
                    </Link>
                    <button className=" md:hidden flex mt-0 mb-1 mr-2 text-white bg-rose-500 border-0 py-1 px-6 focus:outline-none hover:bg-rose-600  rounded text-base ml-auto">Login</button>
                    <nav className="md:ml-auto mx-auto flex  items-center text-lg text-gray-500 justify-center">
                        <Link href='/' className="mr-5 cursor-pointer hover:text-gray-700">Home</Link>
                        <Link href='/about' className="mr-5 cursor-pointer hover:text-gray-700">About</Link>
                        <Link href='/products' className="mr-5 cursor-pointer hover:text-gray-700">Shop</Link>
                        <Link href='/contact' className="mr-5 cursor-pointer hover:text-gray-700">Contact</Link>
                        <Link href='/checkout' className="mr-2 relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg"><img className='h-12 w-11' src="/shop3.png" alt="" /> <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-1 ">{cart.length}</div></Link>
                    </nav>
                    <button className="md:mt-0 md:flex hidden mt-5 text-white bg-rose-500 border-0 py-1 px-8 hover:bg-rose-600 active:bg-rose-800 focus:outline-none focus:ring focus:ring-rose-300 rounded text-base ml-auto">Login</button>
                </div>
            </header>
        </div>
    )
}

export default NavBar
