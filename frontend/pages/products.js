import React from 'react'
import Link from 'next/link'

const products = (props) => {
  return (
    <div className='container m-auto mt-16'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
              <div className="h-1 w-20 bg-rose-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">We brought you many brands from our product list.So lets try Myshop to explore more and more new products as a choice of our customers.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              return (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/3 p-2  m-auto">

                  <div className='border-4 border-gray-100 bg-white cursor-pointer p-5 m-auto  hover:shadow-lg'>
                    <img className=" m-auto transition ease-in-out delay-75 w-64 hover:-translate-y-1 hover:scale-110 duration-500 rounded object-contain object-center h-64 " src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="content" />
                  </div>
                  <div className="bg-gray-100 p-2 h-60 hover:shadow-xl">

                    <h3 className="tracking-widest text-rose-500 text-xs font-medium title-font mb-1">{item.attributes.category}</h3>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-1">{item.attributes.title}</h2>

                    <div className="hidden bg-red-800 bg-yellow-800 bg-amber-800 bg-gray-800 bg-blue-800 bg-pink-800 bg-green-800 bg-red-800"></div>
                    <button className={`border-2 border-gray-300 mb-1 bg-${item.attributes.color}-800 rounded-full w-6 h-6 focus:outline-none`}></button>

                    <div className="hidden hover:text-red-800 hover:text-yellow-800 hover:text-amber-800 hover:text-gray-800 hover:text-blue-800 hover:text-pink-800 hover:text-green-800 hover:text-red-800"></div>
                    <Link href={`/product/${item.attributes.slug}`} className={`leading-relaxed block text-base hover:text-${item.attributes.color}-800 hover:underline mb-3`}>{item.attributes.description.slice(0, 100)}...</Link>

                    <Link href={`/product/${item.attributes.slug}`}><button className="text-white bg-rose-500 border-0 py-1 px-2 hover:bg-rose-600 active:bg-rose-800 focus:outline-none focus:ring focus:ring-rose-300  rounded text-base">Buy Now</button></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer d668d37b6f1373a95bbfe8f2755b5c7e19e2e1228c79f529d23236b90a2a101ad03cc5855fe4a70c001b4375e24fc7084c695eb4af3ad0039b677ee2e05448ae38277f67aa94388e7784740cb7e136a224ec371736fccb76c50b0803611fd86ee80aacc40ef1a48825430f9b1fe91d368be9fee8761acf7cdb15ab2b8c4779f3" }
  let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers });
  let products = await a.json();
  // console.log(products);
  return {
    props: { products: products }, // will be passed to the page component as props
  }
}

export default products
