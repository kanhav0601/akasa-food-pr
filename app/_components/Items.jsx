"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ItemDetails from './ItemDetails';



function Items({ items }) {
    return (
        <div className='p-2 md:p-4 
            flex flex-col items-center justify-center
            gap-3 border rounded-lg 
            transition-transform transform hover:scale-105 
            hover:shadow-xl hover:shadow-pink-600 
            max-w-xs w-full' // Restrict max width and make it full width
        >

            <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${items.images[0].url}`}
                alt='Item Image'
                width={200} // Setting width for a smaller size on mobile
                height={200} // Maintain aspect ratio
                className='w-full h-auto object-contain' // Ensure the image fits within the box while maintaining aspect ratio
            />


            <h2 className='font-semibold text-lg text-center'>
                {items.name}
            </h2>
            <h2 className='text-xl font-bold text-green-500'>₹{items.mrp}</h2>
            <h2 className='text-xl line-through font-medium text-red-500'>
                ₹{items.sellingprice}

            </h2>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='transform transition-transform hover:scale-110'>
                        🛒 Add to Cart
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <ItemDetails items = {items}/>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    );
}

export default Items;
