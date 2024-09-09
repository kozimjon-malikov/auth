import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Main() {
    const [products, setProducts] = useState([]);
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products));
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our products</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                        {products.map((items, index) => (
                            <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <Link>
                                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={items.thumbnail} alt="Bonnie Avatar" />
                                </Link>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <Link to={`/product-details/${items.id}`}>
                                            {items.title}
                                        </Link>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {items.category}
                                    </span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                        {items.description}
                                    </p>
                                    <ul>
                                        <li>
                                            <span>
                                                $ {items.price}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}
