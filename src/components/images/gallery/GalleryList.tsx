import React from 'react'

export default function GalleryList() {
    const glist = [
        {
          image : <img src={require('../gallery/1.jpg')} alt="kekeringan" />,
        },
        {
          image : <img src={require('../gallery/2.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/3.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/4.webp')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/5.jpeg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/6.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/7.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/8.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/9.jpg')} alt="kekeringan" />,
        }
      ]
  return (
    <>
        {glist.map((item) => (
          <span>{item.image}</span>
        ))}
    </>
  )
}
