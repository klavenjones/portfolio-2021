import Link from 'next/link'
import { motion, useCycle } from 'framer-motion'
import MenuToggle from './menu-toggle'

const mobile = {
  open: {
    opacity: 1,
    visibility: 'visible',
    y: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.4
    }
  },
  closed: {
    opacity: 0,
    y: 100,
    transition: {
      ease: 'easeOut',
      duration: 0.4
    },
    transitionEnd: {
      visibility: 'hidden'
    }
  }
}

export default function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <>
      <header className='navbar-container'>
        <nav className='navbar'>
          <div className='navbar__logo'>
            <h1>Klaven Jones</h1>
          </div>
          <div className='navbar__nav'>
            <ol>
              <li className='navbar__links'>
                <Link href='/'>
                  <a>Work</a>
                </Link>
              </li>
              <li className='navbar__links'>
                <Link href='/'>
                  <a>Resume</a>
                </Link>
              </li>
              <li className='navbar__links'>
                <Link href='/'>
                  <a>About</a>
                </Link>
              </li>
            </ol>
            <MenuToggle toggle={toggleOpen} />
          </div>
        </nav>
      </header>
      <motion.div
        initial={false}
        variants={mobile}
        animate={isOpen ? 'open' : 'closed'}
        className='nav-mobile'
      >
        <nav className='nav-mobile__nav'>
          <ol>
            <li className='nav-mobile__links'>
              <Link href='/'>
                <a>Work</a>
              </Link>
            </li>
            <li className='nav-mobile__links'>
              <Link href='www.facebook.com'>
                <a>Resume</a>
              </Link>
            </li>
            <li className='nav-mobile__links'>
              <Link href='#'>
                <a>About</a>
              </Link>
            </li>
          </ol>
        </nav>
      </motion.div>
    </>
  )
}
