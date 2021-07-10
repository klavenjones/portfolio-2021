import Link from 'next/link'
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='order-2 md:order-2'>
          <p>© 2021 Klaven Jones</p>
        </div>
        <div className='footer__icons'>
          <Link href='mailto:&#107;&#108;&#097;&#118;&#101;&#110;&#115;&#106;&#111;&#110;&#101;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'>
            <a>
              <FaEnvelope className='icon' />
            </a>
          </Link>
          <Link href='https://twitter.com/KlavenJ'>
            <a target='_blank'>
              <FaTwitter className='icon' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/klaven-jones/'>
            <a target='_blank'>
              <FaLinkedin className='icon' />
            </a>
          </Link>
          <Link href='https://github.com/klavenjones'>
            <a target='_blank'>
              <FaGithub className='icon' />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
