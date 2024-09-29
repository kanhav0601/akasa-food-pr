import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function Slider({ sliderList }) {
    return (
        <Carousel>
            <CarouselContent>
                {sliderList.map((slider,index)=>(
                    <CarouselItem key={index}>
                        <Image src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${slider.image[0].url}`}
                        width={900}
                        height={500}
                        alt='slider'
                        className='w-full h-[250px] md:h-[400px] object-fit rounded-2xl'/>
                    </CarouselItem>
                ))}
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default Slider