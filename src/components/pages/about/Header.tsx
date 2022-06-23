import React from 'react'

export default function Header() {
  return (
    <header>
        <img src={require('../../images/ava.jpg')} alt="avatar" />
        <h1>WaterDect</h1>
        <h3>Front-End Disaster Management 3 Group</h3>
        <p>
          Sebuah website gallery yang menampilkan beberapa berita terkini dan
          gambar yang memberikan informasi mengenai daerah-daerah di Indonesia
          yang akan dan mengalami kekeringan, sehingga masyarakat Indonesia
          dapat melakukan pencegahan dini terhadap kekeringan yang akan datang.
        </p>
      </header>
  )
}
