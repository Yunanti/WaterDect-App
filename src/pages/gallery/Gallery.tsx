import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import GalleryList from '../../components/images/gallery/GalleryList';
import Footer from '../../components/pages/about/Footer';
import Form from '../../components/pages/gallery/Form';

export default function Gallery() {
  const [isFirstTimeRender, setisFirstTimeRender] = useState(false);
  const { select } = useSelector((state: any) => state.select);

  return (
    <>
      <header className='header-gallery'>
        <div className="container">
          <h1>Gallery Kekeringan {isFirstTimeRender? select : ""}</h1>
          <Form setisFirstTimeRender={setisFirstTimeRender}/>
          {isFirstTimeRender && select && <GalleryList selectedProvinsi={select} />}
        </div>
        <h4>Generasi GIGIH 2.0 by YABB-GoTo</h4>
      </header>
      <Footer />
    </>
  )
}
