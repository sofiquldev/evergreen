import Image from 'next/image'
import { Button, Content } from '@/app/components'

import imageSection from './imageSection.module.scss'

export default function ImageSection(props) {
  return(
    <section className="home-provider-section">
      <div className="container">
        <div className="grid gap-y-10 sm:grid-cols-2 items-center">
          <div className={imageSection.image}>
            <Image className='rounded-3xl max-w-[300px] sm:max-w-full mx-auto sm:mx-0' src="/assets/images/home-provide.webp" width={612} height={612} alt='home-provide' />
          </div>
          <Content className="text-white sm:ps-5 md:ps-[3.5em]">
            <h4>What we provide</h4>
            <h2>Evergreen qwide range of services</h2>
            <p>Our company provides a wide range of services, including Solar, Home improvement, Roofing, Firepits, Landscaping, Water and gas intakes, restoration of existing concrete, stamping, staining, and decorative finishes, cutting and demolition services, sealing, and maintenance. We're dedicated to providing high-quality workmanship and eco-friendly practices that ensure your satisfaction.</p>
            <Button href="#" className="btn-dark" >Explore Services</Button>
          </Content>
        </div>
      </div>
    </section>
  )
}