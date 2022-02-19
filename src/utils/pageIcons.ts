import aboutUsIcon from '../assets/pageIcons/about-us.png'
import faqIcon from '../assets/pageIcons/faq.png'
import scheduleIcon from '../assets/pageIcons/schedule.png'
import sponsorsIcon from '../assets/pageIcons/sponsors.png'
import tracks from '../assets/pageIcons/tracks.png'

const pageIcons = [
  {
    id: 'About Us',
    alt: 'Icon to go to the about us page',
    src: aboutUsIcon,
    link: '/',
    color: '#FFA78C'
  },
  {
    id: 'Sponsors',
    alt: 'Icon to go to the sponsors page',
    src: sponsorsIcon,
    link: '/sponsors', // TODO
    color: '#FF4B67'
  },
  {
    id: 'FAQ',
    alt: 'Icon to go to the FAQ page',
    src: faqIcon,
    link: '/faq',
    color: '#FD75C9'
  },
  {
    id: 'Schedule',
    alt: 'Icon to go to the schedule page',
    src: scheduleIcon,
    link: '/schedule',
    color: '#C964FF'
  },
  {
    id: 'Themes',
    alt: 'Icon to go to the themes page',
    src: tracks,
    link: '/themes',
    color: '#54A2FF'
  }
]

export default pageIcons
