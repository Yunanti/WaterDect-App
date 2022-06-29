import React from 'react'

export default function Main() {
  return (
    <main className="profil">
    <h1>Profil Kelompok</h1>
    <div className="grid">
      <div className="card-name ganjil">
        <img
          src={require('../../images/joa.jpeg')}
          alt="avatar"
        />
        <h3>Jannatin Ockta A.</h3>
        <p>Front-End Engineer</p>
      </div>
      <div className="card-name genap">
        <img
          src={require('../../images/yuna.jpg')}
          alt="avatar"
        />
        <h3>Yunanti Moga H.</h3>
        <p>Front-End Engineer</p>
      </div>
      <div className="card-name ganjil">
        <img
          src={require('../../images/ava.jpg')}
          alt="avatar"
        />
        <h3>Faqih Afivan B.</h3>
        <p>Front-End Engineer</p>
      </div>
      <div className="card-name genap">
        <img
          src={require('../../images/ava.jpg')}
          alt="avatar"
        />
        <h3>Nuzha Musyafira</h3>
        <p>Mentor</p>
      </div>
    </div>
    <h3>Generasi GIGIH 2.0 by YABB-GoTo</h3>
  </main>
  )
}
