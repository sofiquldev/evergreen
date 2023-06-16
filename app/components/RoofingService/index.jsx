import Image from 'next/image'
import { Button, Content, IconList } from '@/app/components'

import roofingStyle from './roofing.module.scss'

export default function RoofingServiceSection() {
  const listItems = ['Roof repair', 'Home additions', 'Roof replacement', 'Exterior remodeling', 'New construction', 'Commercial construction']
  const listIcon = <span className="material-symbols-outlined">check</span> 
  return(
    <section className={ roofingStyle.main }>
      <div className="container">
        <div className={ ` grid md:grid-cols-2 gap-14 ${roofingStyle.inner}` }>
          <Content className="text-start">
            <h4>Roofing Services</h4>
            <h2>Need roofing <br /> services?</h2>
            <p className="font-medium">We got you covered. Our comprehensive construction services include</p>
            <IconList items={ listItems } icon={ listIcon } />
            <p className="font-medium">With our expertise and experience, we can handle all aspects of roofing while ensuring customer satisfaction.</p>
            <br />
            <Button className="btn-dark" href="#">Explore Services</Button>
          </Content>
          <div className={ roofingStyle.image }>
            <Image src="/assets/images/home-roofing-image.webp" width={ 850 } height={ 800 } alt="home-roofing-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* 
export const List = props => {
  return(
    <ul className={ `${roofingStyle.list} ${ props.className }` }>
      {props.items.map((item, index) => <li key={ index } className={ roofingStyle.list__item }>
        <span className={ `material-symbols-outlined ${ roofingStyle.list__icon }` }>check</span> 
        { item }
      </li>)}
    </ul>
  )
} */