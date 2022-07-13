import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <img src={require('../../images/logo.jpg')} alt="avatar" data-aos="flip-up"/>
        <h1  data-aos="fade-up">WaterDect</h1>
        <h3  data-aos="fade-up">Front-End Disaster Management 3 Group</h3>
        <p  data-aos="fade-up">
          Sebuah website gallery yang menampilkan beberapa berita terkini dan
          gambar yang memberikan informasi mengenai daerah-daerah di Indonesia
          yang akan dan mengalami kekeringan, sehingga masyarakat Indonesia
          dapat melakukan pencegahan dini terhadap kekeringan yang akan datang.
        </p>
    </header>
  )
}
