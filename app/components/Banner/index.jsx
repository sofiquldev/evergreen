import Image from 'next/image'
import Link from 'next/link'

import { Button, Content, CirclerRotateButton } from '@/app/components'


import banner from './banner.module.scss'


export default function Banner() {
  return (
    <div className={banner.wrapper}>
      <div className="container">
        <div className={banner.inner}>
          <CirclerRotateButton className={banner.circlerRotateButton} circleBg="/assets/images/home-banner-circle.webp" />
          <Content className="text-white">
            <h1>Creating a <strong>greener tomorrow</strong> through expert landscaping and <strong>solar panel benefits</strong> today.</h1>
          </Content>
          <div className={banner.image}>
            <Image src="/assets/images/home-banner.webp" width={514} height={436} alt='home-banner' />            
          </div>
        </div>
        {/* Home banner footer */}
        <div className={`${banner.footer} border-t grid gap-y-5 sm:grid-cols-2 mt-4 text-white`}>
          <div className={`${banner.footer__widget} text-center sm:text-left`}>
            <h4 className='font-semibold uppercase text-lg tracking-[2px]'>Contact Us</h4>
            <Link className='inline-block font-light uppercase mt-2' href='mailto:info@evergreensolar.pro'>info@evergreensolar.pro</Link>
          </div>
          <div className={`${banner.footer__widget} border-t border-t-white translate-y-[-1px]`}>
            <p className="text-center sm:text-left sm:ps-9 leading-relaxed">Creating a greener tomorrow through expert landscaping and solar panel benefits today.</p>
          </div>
        </div>
      </div>
      <div className={banner.about}>
        <div className={banner.about__image}>
          <CirclerRotateButton className={banner.about__circlerRotateButton} circleBg="/assets/images/home-banner-about-circle.webp" />
          <Image width={787} height={715} src="/assets/images/home-banner-about.webp" alt="home-banner-about" />
        </div>
        <div className="container">
          <div className={`${banner.about__content} grid gap:6 sm:gap-10 sm:grid-cols-2 justify-between items-start`}>
            <Content>
             <h2>Make the Switch to <br className='hidden md:block' />Solar Energy Today!</h2> 
             <Button href="#" className="btn-dark" >Solar Services</Button>
            </Content>
            <p className="text-center sm:text-start pb-4 sm:pb-2">You've come to the right place! Our team of professionals is here to help you  switch to solar energy and start saving money while saving the planet!</p>
          </div>
        </div>
      </div>
    </div>
  )
} 
 