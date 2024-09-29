"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlobalApi from '../_utils/GlobalApi';
import { toast } from 'react-toastify';

function ItemDetails({ items }) {
    const jwt = sessionStorage.getItem('jwt');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const [quantity, setQuantity] = useState(1);
    const [ItemTotalPrice, setItemTotalPrice] = useState(items.mrp || items.sellingprice);
    const router = useRouter();

    useEffect(() => {
        if (items) {
            setItemTotalPrice(items.mrp || items.sellingprice);
        }
    }, [items]);

    const addtocart = () => {
        if (!jwt) {
            router.push('/sign-in');
            return;
        }
    
        // Prepare data for the request
        const data = {
            data: {
                quantity: quantity,
                amount: quantity * ItemTotalPrice, // Use the actual total price calculation
                item: items.id, // Ensure this matches Strapi's expected key (e.g., item or items)
                user: user.id, // Ensure user field matches the expected field in Strapi
            },
        };
    
        console.log('Data sent to Strapi:', data); // Debugging to check the payload
    
        // Call the API to add item to cart
        GlobalApi.addtocart(data, jwt).then(
            (resp) => {
                console.log('Response from Strapi:', resp); // Log the response
                toast("Added to cart");
            },
            (e) => {
                console.error('Error adding to cart:', e);
                toast(e?.message || "Error adding to cart");
            }
        );
    };

    if (!items) {
        return <div>Loading...</div>; // Optional loading state
    }

    const { id, mrp, sellingprice, images, name, description, quantity: availableQuantity, categories } = items;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
            <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${images[0]?.url || ''}`}
                alt='Product Image'
                width={300}
                height={300}
                className='bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg'
            />
            <div>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-sm font-bold text-orange-600'>{description}</p>
                <div className='flex gap-3 p-4'>
                    <h2 className='text-3xl font-bold text-green-500'>₹{mrp}</h2>
                    <h2 className='text-3xl line-through font-medium text-red-500'>₹{sellingprice}</h2>
                </div>
                <p className='text-lg font-medium'>Available Quantity: {availableQuantity}</p>
                <div className='flex flex-col items-baseline gap-5'>
                    <div className='flex gap-3 items-center'>
                        <div className='p-2 border flex gap-10 items-center'>
                            <button disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                            <h2>{quantity}</h2>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <h2 className='font-bold text-2xl'>Total: ₹{quantity * ItemTotalPrice}</h2>
                    </div>
                    <Button className="flex gap-3 bg-purple-600" onClick={addtocart}>
                        <ShoppingBag />
                        Add To Cart
                    </Button>
                </div>
                <h2 className='text-2xl'>
                    <span className='p-3 font-bold'>Category:</span> {categories[0]?.name || 'Uncategorized'}
                </h2>
            </div>
        </div>
    );
}

export default ItemDetails;
