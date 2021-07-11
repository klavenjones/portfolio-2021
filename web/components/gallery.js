import Link from 'next/link'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const works = [
  {
    title: 'CEMS',
    img: 'https://via.placeholder.com/600',
    url: `url to project`,
    demo: 'url to live site'
  },
  {
    title: 'CODR Blog',
    img: 'https://via.placeholder.com/600',
    url: `url to project`,
    demo: 'url to live site'
  },
  {
    title: 'MJ Graphics Design',
    img: 'https://via.placeholder.com/600',
    url: `url to project`,
    demo: 'url to live site'
  },
  {
    title: 'Seekr',
    img: 'https://via.placeholder.com/600',
    url: `url to project`,
    demo: 'url to live site'
  }
]

function Work({ work }) {
  return (
    <div className='gallery__piece'>
      <Link href=''>
        <a>
          <div className='gallery__image'>
            <div className='gallery__image-inner'>
              <img src={work.img} alt={`${work.title}`} />
            </div>
          </div>
        </a>
      </Link>
      <div className='gallery__info'>
        <p>{work.title}</p>
        {/* <div className='gallery__demo'>
          <Link href='#'>
            <a>
              <FiExternalLink className='h-6 w-6 md:h-8 md:w-8' />
              Demo
            </a>
          </Link>
          <Link href='#'>
            <a>
              <FiGithub className='h-6 w-6 md:h-8 md:w-8' />
              Code
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className='gallery'>
      <div className='gallery__container'>
        {works.map((work, i) => (
          <Work work={work} />
        ))}
      </div>
    </section>
  )
}
