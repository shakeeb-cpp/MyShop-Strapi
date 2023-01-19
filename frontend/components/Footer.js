import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="text-white bg-rose-800 body-font">
                <div className="container ml-auto px-5 py-24 flex md:items-start lg:items-center lg:flex-row lg:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 lg:block hidden flex-shrink-0 mx-auto mt-0 text-left lg:text-left" style={{ marginTop: `-22px` }}>
                        <a className="flex title-font font-medium items-centerlg:justify-start justify-start text-gray-900">
                            <span className="text-4xl font-bold tracking-tight leading-6 mb-2  text-white" style={{ fontFamily: `"Oswald",sans-serif` }}>Our Mission</span>
                        </a>
                        <p className="text-medium text-gray-300">We all want to make our site as a best choice of of our customers.We provide free delivery with full safety and authenticity.We provide many services on full discount.So lets try MyShop.</p>
                    </div>
                    <div className="flex-grow flex md:pl-20 -mb-10 lg:mt-2 mt-0 lg:text-left text-left">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font text-xl font-extrabold text-white tracking-tight leading-6 mb-3" style={{ fontFamily: `"Oswald",sans-serif` }}>Quick Links</h2>
                            <nav className="list-none mb-10 cursor-pointer">
                                <li className='mb-3'>
                                    <Link href='/' className="text-gray-300  hover:text-gray-400 hover:underline underline-offset-2">Home</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href='/about' className="text-gray-300  hover:text-gray-400 hover:underline underline-offset-2">About</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href='/products' className="text-gray-300  hover:text-gray-400 hover:underline underline-offset-2">Shop</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href='/contact' className="text-gray-300 hover:text-gray-400 hover:underline underline-offset-2">Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full md:block hidden px-4">
                            <h2 className="title-font font-extrabold  text-white text-xl tracking-tight leading-6  mb-3" style={{ fontFamily: `"Oswald",sans-serif` }}>Gallary</h2>
                            <nav className="list-none">
                                <li className='flex'>
                                    <a className="text-gray-300 mr-1 hover:text-gray-400"><img src="https://preview.colorlib.com/theme/aroma/img/gallery/r1.jpg.webp" alt="" /></a>
                                    {/* <a className="text-gray-300 hover:text-gray-400"><img src="https://preview.colorlib.com/theme/aroma/img/gallery/r2.jpg.webp" alt="" /></a> */}
                                </li>

                                <li className='flex'>
                                    <a className="text-gray-300 mr-1 hover:text-gray-400"><img src="https://preview.colorlib.com/theme/aroma/img/gallery/r3.jpg.webp" alt="" /></a>
                                    {/* <a className="text-gray-300 hover:text-gray-400"><img src="https://preview.colorlib.com/theme/aroma/img/gallery/r5.jpg.webp" alt="" /></a> */}
                                </li>
                                <li className='flex'>
                                    {/* <a className="text-gray-300 mr-1 hover:text-gray-400"><img src="https://preview.colorlib.com/theme/aroma/img/gallery/r3.jpg.webp" alt="" /></a> */}
                                    <a className="text-gray-300 hover:text-gray-400"><img src="https://preview.colorlib.com/theme/aroma/img/gallery/r5.jpg.webp" alt="" /></a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-extrabold  text-white tracking-tight leading-6 text-xl mb-2" style={{ fontFamily: `"Oswald",sans-serif` }}>Contact Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-100 font-bold">Head Office<span className='block text-gray-400 mt-0 font-normal mb-2'>123, Main Street, Your City</span> </a>
                                </li>
                                <li>
                                    <a className="text-gray-100 font-bold ">Phone Number<span className='block text-gray-400 mt-0 font-normal mb-2'>+923085662249</span> </a>
                                </li>
                                <li>
                                    <a className="text-gray-100 font-bold ">Email<span className='block text-gray-400 mt-0 font-normal mb-2'>MyShop@gmail.com</span> </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-rose-500">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2020 MyShop —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@myshop.com</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-white cursor-pointer" href="https://facebook.com" target="_blank">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-white cursor-pointer" href="https://twitter.com" target="_blank">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-white cursor-pointer" href="https://instagram.com" target="_blank">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-white cursor-pointer" href="https://linkedin.com" target="_blank">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
