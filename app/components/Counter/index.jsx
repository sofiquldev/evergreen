import Image from 'next/image'
import counterStyle from './counter.module.scss'

export default function CounterSection() {
  return(
    <section className={counterStyle.main}>
      <div className="container">
        <Image className="mx-auto mb-16 sm:mb-20 lg:mb-[5vw] max-w-[75%]" src="/assets/images/logo.webp" width={337} height={65} alt='logo' />
        <div className={ `grid gap-8 grid-cols-2 sm:grid-cols-4 justify-items-center ${counterStyle.inner}` }>
          <Counter count="35" title="Team of Experts" suffix="+" />
          <Counter count="1" title="Homes improved" suffix="k+" />
          <Counter count="750" title="Fire pits installed" suffix="+" />
          <Counter count="70" title="Ongoing Projects" suffix="+" />
        </div>
      </div>
    </section>
  )
}

export const Counter = props => {
  return (
    <div className={ counterStyle.counter }>
      <h1 className={ counterStyle.counter__count }>{`${props.count}${props.suffix ? props.suffix:'+'}`}</h1>
      <h5 className={ counterStyle.counter__title }>{ props.title}</h5>
    </div>
  )
}