import Link from 'next/link'
import Image from 'next/image'
import Button from '@/app/components/Button'

import header from './header.module.scss'

export default function Header() {
  return(
    <header className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-2'>
          <div className="header-left">
            <Link href='/' className={header.brand}>
              <Image src='/assets/images/logo.webp' width={300} height={60} alt='logo' />
            </Link>
          </div>
          <div className="header-right ml-auto flex items-center gap-x-4">
            <Button href="#" className="btn-primary hidden sm:inline-flex">Start a Project</Button>
            <button className='btn-menu'>
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}