import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]); 

    if (!product) return <div>Loading...</div>;

    return (
        <div className='container max-w-[800px] mx-auto my-[50px]'>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={product.thumbnail} alt="Bonnie Avatar" />
                </a>
                <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href='#'>
                            {product.title}
                        </a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                        <strong className='uppercase my-2'>{product.category}</strong>
                    </span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                        {product.description}
                    </p>
                    <ul>
                        <li>
                            <span>
                                <strong>Price:</strong> $ {product.price}
                            </span>
                        </li>
                        <li>
                            <span>
                                <strong>Rating:</strong> {product.rating}
                            </span>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
            <h4 className='text-2xl font-bold my-5'>About product:</h4>
            <ul className='list-disc mx-1'>
                {product.reviews.map((data => (
                    <li className='my-3 flex items-center text-center'>
                        <span className='text-sm rounded-full w-5 h-5 bg-rose-700 text-white'>
                            {data.rating}
                        </span>
                        <p className='text-gray-600 mx-3'>
                            {data.comment} <strong>---- 👉{data.reviewerName}</strong>
                        </p>
                        <span>
                            {data.date}
                        </span>
                    </li>
                )))}
            </ul>
            <img className='w-64 h-36 object-cover my-5' src={product.images} alt="data" />
        </div>
    );
};

export default ProductDetails;
