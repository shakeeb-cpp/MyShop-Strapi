import React from 'react'

const contact = () => {
  return (
    <>
      {/* <div className='h-96 w-full' style={{ backgroundColor: `#f0f0f2` }}>
        <div>

        </div>
        <img className='h-full float-right mr-32' src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" />
      </div> */}


      <div className='flex flex-row mb-4 mt-16' style={{ backgroundColor: `#f0f0f2` }}>
        <div className='pb-0 border-0 mb-0' >
          <img className="float-right border-0 bottom-0 pb-0 h-full object-cover" src='https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp' alt="" />
        </div>
        <div className='md:basis-1/2 basis-1/2 md:px-8 pl-10 pr-10 h-96 md:ml-auto ml-0 md:mt-80 mt-16'>
          <h2 className="text-2xl title-font text-gray-500 tracking-widest mb-3">MyShop</h2>
          <h1 className="text-gray-900 title-font font-bold mb-4 text-4xl">Contact To Our Team</h1>
          <p className="leading-relaxed text-gray-500 mb-5" style={{ fontFamily: `"Roboto",sans-serif` }}>Contact for more details And stay tune with us.</p>
          {/* <Link href='/'><button className="text-white bg-rose-500 border-0 py-1 px-4 hover:bg-rose-600 active:bg-rose-800 focus:outline-none focus:ring focus:ring-rose-300  rounded text-base">Buy Now</button></Link> */}
        </div>
      </div>


      <div className='container m-auto'>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: `grayscale(1) contrast(1.5)`, opacity: `0.6` }}></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Pakistan , Peshawer , Mardan</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-rose-500 leading-relaxed">example@email.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Post Your Feedback To Improve Our Sevices.</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg">Submit</button>
              <p className="text-xs text-gray-500 mt-3">submit your form to cantact us.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default contact
