import React, { useEffect, useState } from 'react'

const checkout = ({ cart }) => {
    const [subtotal, setsubtotal] = useState(0);
    const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });

    useEffect(() => {
        let myTotal = 0;
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            myTotal = myTotal + cart[index][1];
        }
        setsubtotal(myTotal);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log({ ...form, [e.target.name]: e.target.value });
    }



    return (
        <div className='mt-12 mb-32'>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-16">
                        <div className="container px-5 mx-auto">
                            <div className="flex flex-col text-center w-full mb-4">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900">Checkout</h1>
                                <h2 className="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold">{cart.length ? `Your Cart Details` : `Your Cart Is Empty!`}</h2>
                            </div>
                            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                                <table className="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Items</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => {
                                            return <tr>
                                                <td className="flex py-6 "><img className='object-contain object-center h-16 w-16' src={`http://localhost:1337${item[2]}`} alt="" /><span className='my-auto ml-2 font-semibold'>{item[0]}</span></td>
                                                <td className="px-4 py-6 ">{item[1]} pkr</td>
                                            </tr>


                                        })}
                                    </tbody>
                                    <tbody className='pt-10'>
                                        <tr>
                                            <td className="px-4 py-3 font-bold border-t text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Total Amount</td>
                                            <td className="px-4 py-3 border-t text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl font-semibold">{subtotal} pkr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                    <div className="lg:w-1/1 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input onChange={handleChange} value={form.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input onChange={handleChange} value={form.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                    <input onChange={handleChange} value={form.phone} type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                                    <input onChange={handleChange} value={form.address} type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea onChange={handleChange} value={form.message} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-rose-500 border-0 py-1 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg">Pay Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default checkout
