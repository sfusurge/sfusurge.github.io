import styles from './Home.module.scss'
import ImageLink from '../../components/ImageText'
import Cube from 'react-cube-navigation';
import React from "react";
import background from "../../assets/backgrounds/background.png"

import sponsorsIcon from "../../assets/pageIcons/sponsorsBg.png";
import aboutIcon from "../../assets/pageIcons/aboutBg.png";
import faqIcon from "../../assets/pageIcons/faqBg.png";
import scheduleIcon from "../../assets/pageIcons/scheduleBg.png";
import introIcon from "../../assets/pageIcons/intro.png";

import socials from '../../utils/socials'

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const w = window.innerWidth - 25;
  const h = window.innerHeight - 25;

  const images = [
    introIcon,
    aboutIcon,
    sponsorsIcon,
    faqIcon,
    scheduleIcon,
  ];

  const urls = [
    "https://form.typeform.com/to/xvjiDqqp",
    "/about",
    "/sponsors",
    "/faq",
    "/schedule",
  ]

  return (
    <div style={{
      height: window.innerHeight,
      width: window.innerWidth,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "cover",
      backgroundSize: "100% 100vh",
    }}>
      <Cube
        index={index}
        onChange={i => setIndex(i)}
        width={w > 0.4*window.innerWidth ? 0.4*window.innerWidth : w}
        height={h > 0.7*window.innerHeight ? 0.7*window.innerHeight : h}
        lockScrolling
        hasNext={((i) => {
          if (i < images.length - 1) {
            return i < images.length - 1;
          } else if (i == images.length - 1) {
            setIndex(images.length - 2);
            return false;
          } else {
            return false
          }
        })}
        renderItem={(i, active) => {
          return (
            <form action={urls[index]} style={{
              backgroundImage: `url(${images[i]})`,
              backgroundSize: "cover",
              flex: 1,
            }}>
              <div style={{
                height: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }} >
                  <input type="image" src={images[i]} style={{
                    width: 400,
                    height: 400,
                    opacity: 0
                  }}>
                  </input>
              </div>
            </form>
          );
        }}
      />
      <div className={styles.socials}>
        {socials.map(({ id, src, link }) => (
          <div className={styles.icon} style={{
            margin: 20,
          }}>
            <ImageLink
              key={id}
              src={src}
              alt={id}
              link={link}
              style={{
                width: 50,
                height: 50,
                opacity: 0.9
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
