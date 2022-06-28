import React, { useRef, useState } from 'react';

export default function Form() {
  const formRef = useRef(null);
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxt-jbSFNXznaJ-_Pkf2ug2BDI4esngIE5vGjmkhUXgFcxsQNRhOUvGkKrH_w9B2xKo/exec';
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    nama: '',
    email: '',
    topik: '',
    pesan: '',
  });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED');
        setInputValue({
          ...inputValue,
          nama: '',
          email: '',
          topik: '',
          pesan: '',
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <h1>Kritik dan Saran</h1>
      <div className="form-item">
        <form
          method="post"
          ref={formRef}
          onSubmit={handleSubmit}
          name="google-sheet"
        >
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            name="nama"
            value={inputValue.nama}
            onChange={handleChange}
          />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
          />
          <label htmlFor="name">Subject/topik</label>
          <input
            type="text"
            name="topik"
            value={inputValue.topik}
            onChange={handleChange}
          />
          <label className="pesan" htmlFor="name">
            Pesan
          </label>
          <textarea
            name="pesan"
            value={inputValue.pesan}
            onChange={handleChange}
          />
          <button
            className="kirim"
            type="submit"
            value={loading ? 'Loading...' : 'SEND MESSAGE'}
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
