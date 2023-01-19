import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <div className='flex flex-row mb-4 mt-16' style={{ backgroundColor: `#F1F6F7` }}>
        <div className=' bg-rose-500 pb-0 border-0 mb-0' style={{ flexBasis: `37%` }}>
          <img className="md:block hidden float-right border-0 pt-14 bottom-0 pb-0 h-full object-cover" src='https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp' alt="" style={{ transform: `translate(105px,1px)` }} />
        </div>
        <div className='md:basis-1/2 basis-1/1 md:px-10 pl-10 pr-10 h-96 md:ml-auto ml-0 md:mt-60 mt-16'>
          <h2 className="text-2xl title-font text-gray-500 tracking-widest mb-3">MyShop</h2>
          <h1 className="text-gray-900 title-font font-bold mb-4 text-4xl">BROWSE OUR PREMIUM PRODUCT</h1>
          <p className="leading-relaxed text-gray-500 mb-5" style={{ fontFamily: `"Roboto",sans-serif` }}>This is MyShop Products Web And We brought you many brands from our product list.So lets try Myshop to explore more and more new products as a choice of our customers.</p>
          <Link href='/products'><button className="text-white bg-rose-500 border-0 py-1 px-4 hover:bg-rose-600 active:bg-rose-800 focus:outline-none focus:ring focus:ring-rose-300  rounded text-base">Buy Items</button></Link>
        </div>
      </div>
      <div className=''>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-left w-full mb-16">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">New Arrival  in the market</p>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">New Products</h1>
                <div className="h-1 w-14 mt-3 bg-rose-500 rounded"></div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4">
              {props.products.data.map((item) => {
                return (
                  <div key={item.attributes.slug} className="lg:w-1/4 md:w-1/3 w-1/2  md:p-4 p-0 cursor-pointer mx-auto">
                    <div className="flex relative">
                      <img alt="gallery" className="absolute border p-2 inset-0 w-72 h-full object-contain object-center" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} />
                      <div className="md:px-8 px-3 md:py-10 py-0 relative text-center z-10 w-72 m-2 mt-2 mb-1 h-72 border-gray-200 bg-black transition ease-in-out opacity-0 hover:opacity-95 duration-700 hover:-translate-y-1 hover:scale-105">
                        <h1 className="title-font text-lg font-medium text-white md:mt-0 mt-10 mb-2 md:block hidden">{item.attributes.title}</h1>
                        <Link href={`topProduct/${item.attributes.slug}`}><p className="md:leading-relaxed leading-normal md:text-base text-sm text-gray-100 mb-2 md:mt-0 mt-16">{item.attributes.description}</p></Link>
                        <h2 className="tracking-widest text-sm font-light title-font text-rose-200 mb-1">Rs.{item.attributes.price}</h2>
                        <Link href={`topProduct/${item.attributes.slug}`}><button className="text-rose-500 hover:text-rose-600 hover:underline underline-offset-2 mt-1 border-0 py-1 px-2 rounded text-base">Buy item</button></Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>



      <div className='mb-32'>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-9 mx-auto">
            <div className="flex flex-col text-left w-full mb-0">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Popular Item in the market</p>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Trending Products</h1>
                <div className="h-1 w-20 mt-3 bg-rose-500 rounded"></div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4">
              {props.products2.data.map((item) => {
                return (
                  <div key={item.attributes.slug} className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer mx-auto">
                    <div className="flex relative">
                      <img alt="gallery" className="p-6 border-b-2 border-rose-600  inset-0 w-96 h-96 object-contain object-center" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} />
                      <div className=" absolute text-center z-10 w-full mb-1 h-96  bg-transparent transition ease-in-out opacity-0 hover:opacity-100 duration-300 ">
                        <Link href={`topProduct/${item.attributes.slug}`} className="absolute left-0 bottom-0 px-8 mt-0 text-center text-white font-bold py-3 w-full h-12 opacity-100 border-gray-200 bg-rose-600 hover:bg-rose-700">
                          Add To Cart
                        </Link>
                      </div>
                      {/* <Link href={`topProduct/${item.attributes.slug}`} className="px-8 absolute bottom-0 text-center text-white font-bold pt-5  w-full h-16 border-gray-200 bg-rose-900 transition ease-in-out opacity-5 hover:opacity-100 duration-500 ">
                        Add To Cart
                      </Link> */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer d668d37b6f1373a95bbfe8f2755b5c7e19e2e1228c79f529d23236b90a2a101ad03cc5855fe4a70c001b4375e24fc7084c695eb4af3ad0039b677ee2e05448ae38277f67aa94388e7784740cb7e136a224ec371736fccb76c50b0803611fd86ee80aacc40ef1a48825430f9b1fe91d368be9fee8761acf7cdb15ab2b8c4779f3" }
  let a = await fetch("http://localhost:1337/api/top-products?filters[image][id][$lte][0]=4&populate[0]=image", { headers: headers });
  let products = await a.json();

  let a2 = await fetch("http://localhost:1337/api/top-products?filters[image][id][$gte][0]=5&populate[0]=image", { headers: headers });
  let products2 = await a2.json();
  // console.log(products);
  return {
    props: { products: products, products2: products2 }, // will be passed to the page component as props
    // props: {},  will be passed to the page component as props
  }
}


// this api is used to fetch data which is greater than 2 id
// http://localhost:1337/api/top-products?filters[id][$gt][0]=2

// and with images like this
// http://localhost:1337/api/top-products?filters[image][id][$gt][0]=2&populate[0]=image