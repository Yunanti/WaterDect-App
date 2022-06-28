import React from 'react'
import { useSelector } from 'react-redux';
import GalleryList from '../../components/images/gallery/GalleryList';
import Form from '../../components/pages/gallery/Form';

export default function Gallery() {
  const { select } = useSelector((state: any) => state.select);

  return (
    <>
      <header className='header-gallery'>
        <div className="container">
          <h1>Gallery Kekeringan {select}</h1>
          <Form />
          <GalleryList />
        </div>
      </header>
    </>
  )
}
