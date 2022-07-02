import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import GalleryList from '../../components/images/gallery/GalleryList';
import Footer from '../../components/pages/about/Footer';
import Form from '../../components/pages/gallery/Form';

export default function Gallery() {
  const [isFirstTimeRender, setisFirstTimeRender] = useState(false);
  const { select } = useSelector((state: any) => state.select);

  return (
    <div className='bg-gallery'>
      <header className='header-gallery'>
        <div className="container">
          {isFirstTimeRender && select ? (
            <div>
              <h3 data-aos="fade-up">Gallery Kekeringan {select}</h3>
              <Form setisFirstTimeRender={setisFirstTimeRender}/>
              {isFirstTimeRender && select && <GalleryList selectedProvinsi={select}/>}
            </div>
          ) : (
          <div className='grid-header-gallery'>
            <div className='grid-header-gallery-left'>
              <h1 data-aos="fade-up-right">Gallery Kekeringan</h1>
              <Form setisFirstTimeRender={setisFirstTimeRender}/>
              {isFirstTimeRender && select && <GalleryList selectedProvinsi={select}/>}
            </div>
            <div className='img-header-gallery' data-aos="fade-up-left">
              <img src={require('../../components/images/gallery/9.jpg')} alt="gallery-kekeringan" />
              <img src={require('../../components/images/gallery/6.jpg')} alt="gallery-kekeringan" />
            </div>
          </div>
          )}
        </div>
        <h4 data-aos="fade-up">Generasi GIGIH 2.0 by YABB-GoTo</h4>
      </header>
      <Footer />
    </div>
  )
}
