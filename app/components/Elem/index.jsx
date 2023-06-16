import Image from 'next/image'
import elem from './elem.module.scss'

export const CirclerRotateButton = props => {
  return(
    <div className={`${elem.circlerRotateButton} ${props.className}`}>
      <span className={`material-symbols-outlined ${elem.circlerRotateButton__icon}`}>arrow_right_alt</span>
      <Image style={{animationName: 'rotate360'}} src={`${ props.circleBg ? props.circleBg : '/assets/images/home-banner-circle.webp'}`} width={120} height={120} alt="circler-button-image" />
    </div>
  )
}
