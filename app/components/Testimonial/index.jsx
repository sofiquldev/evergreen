"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Content } from '@/app/components'

// Import Swiper styles
import "swiper/css"
// import "swiper/css/navigation"
import testiStyle from './testimonial.module.scss'

export default function TestimonialSection() {
  const testimonials = [
    {msg: `We wouldn’t have such great product quality and design if it weren’t for them. Our customers and we are always satisfied at the end, and Devolfs always delivers excellent results.`,user: {name: 'Kraemer Deo',title: 'Houseowner',image: '/assets/images/testimonial-user-01.webp'}},
    {msg: 'This is message 2',user: {name: 'Kraemer Deo',title: 'Houseowner',image: '/assets/images/testimonial-user-01.webp'}},
    {msg: 'This is message 3',user: {name: 'Kraemer Deo',title: 'Houseowner',image: '/assets/images/testimonial-user-01.webp'}},
    {msg: 'This is message 4',user: {name: 'Kraemer Deo',title: 'Houseowner',image: '/assets/images/testimonial-user-01.webp'}},
  ]
  return (
    <section className={testiStyle.main}>
      <div className="container">
        <div className={ testiStyle.inner }>
          <Content className="text-white text-start">
            <h4>Our Testimonial</h4>
            <h2>What our <br /> clients say</h2>
          </Content>
          
          <Swiper 
            modules={[Navigation]}
            navigation={true}
            spaceBetween={30}
            slidesPerView="1"
            className={ testiStyle.testimonial }
          >
            {
              testimonials.map((testimonial, index) => 
                <SwiperSlide className="w-100 flex flex-col justify-between" style={{ display: 'flex' }} key={index}>
                  <p className={ testiStyle.testimonial__msg }>{ testimonial.msg }</p>
                  <div className={ testiStyle.testimonial__footer }>
                    <div className={ testiStyle.testimonial__user }>
                      <Image src={ testimonial.user.image } width={72} height={72} alt="user"  />
                      <div className="flex-1">
                        <h4 className="font-medium text-xl sm:text-3xl leading-none capitalize mb-2">{ testimonial.user.name }</h4>
                        <h5 className="font-light text-lg capitalize mb-0 leading-none">{ testimonial.user.title }</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            }
            <SwiperNav />
          </Swiper>
        </div>
      </div>
    </section>
  )
}


export const SwiperNav = () => {
  const swiper = useSwiper();

  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(swiper.isBeginning);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsPrevButtonDisabled(swiper.isBeginning);
      setIsNextButtonDisabled(swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);
  return (
    <div className={ testiStyle.navBtn }>
      <button onClick={() => swiper.slidePrev()} disabled={isPrevButtonDisabled} className="disabled:opacity-50"><span className="material-symbols-outlined text-3xl p-2">west</span></button>
      <button onClick={() => swiper.slideNext()} disabled={isNextButtonDisabled} className="disabled:opacity-50"><span className="material-symbols-outlined text-3xl p-2">east</span></button>
    </div>
  )
} 