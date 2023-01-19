import React from 'react'

const about = () => {
  return (
    <div className='container m-auto mt-16'>
      <section className="text-gray-600 body-font">
        <h1 className='text-center relative md:mt-28 mt-36 text-4xl text-gray-900'>About Us</h1>
        <div className="container px-5 pt-6 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-rose-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-100 text-rose-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">MyShop</h2>
                <p className="leading-relaxed">MyShop is an ecommerce website here we provide all branded products to our customers with full discount.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-rose-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-100 text-rose-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Our Misssion</h2>
                <p className="leading-relaxed">We all want to make our site as a best choice of of our customers.We provide free delivery with full safety and authenticity.We provide many services on full discount.So lets try MyShop.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-rose-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-100 text-rose-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Our Services</h2>
                <p className="leading-relaxed">We provide many services on our site like delivery , promotions etc.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-rose-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-100 text-rose-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Our Team</h2>
                <p className="leading-relaxed">We have a strong and professional team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Statistics</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">MyShop is the best platform for whole selling and customers best choice due to which we have high Statistics.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-rose-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-rose-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-rose-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-rose-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-0 pb-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have a strong and professional team</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-top flex-shrink-0 rounded-full mr-4" src="/shakeeb.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Shakeeb Ahmad</h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-top object-cover flex-shrink-0 rounded-full mr-4" src="/shakeeb.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Shakeeb Ahmad</h2>
                  <p className="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.shutterstock.com/image-photo/close-photo-charming-guy-entrepreneur-260nw-1531460651.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                  <p className="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.shutterstock.com/image-photo/headshot-young-handsome-european-caucasian-260nw-1180874644.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://thumbs.dreamstime.com/b/close-up-portrait-european-man-perfect-white-smile-isolated-grey-background-154181254.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default about
