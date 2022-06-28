import React, { useState } from 'react'
import GalleryList from '../../components/images/gallery/GalleryList';

export default function Gallery() {
  const [select, setSelect] = useState("");

  const handleChange = (e: any) => {
    setSelect(e.target.value)
  }

  const provinsiList = [
      "Pilih Provinsi",
      "Aceh",
      "Bali",
      "Bangka Belitung",
      "Banten",
      "Bengkulu",
      "Jawa Tengah",
      "Kalimantan Tengah",
      "Sulawesi Tengah",
      "Jawa timur",
      "Kalimantan Timur",
      "Nusa Tenggara Timur",
      "Gorontalo",
      "Daerah Khusus Ibukota Jakarta",
      "Jambi",
      "Lampung",
      "Maluku",
      "Sulawesi Utara",
      "Sumatera Utara",
      "Papua",
      "Riau",
      "Kepulauan Riau",
      "Sulawesi Tenggara",
      "Kalimantan Selatan",
      "Sulawesi Selatan",
      "Sumatera Selatan",
      "Jawa Barat",
      "Kalimantan Barat",
      "Nusa tenggara Barat",
      "Papua Barat",
      "Sulawesi Barat",
      "Sumatera Barat",
      "Daerah Istimewa Yogyakarta",
      "Kalimantan Utara",
      "Maluku Utara"
  ];

  const provinsi = provinsiList.map((prov) =>
    <option value={prov}>{prov}</option>
  );

  return (
    <>
      <header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form>
          <select onChange={(e) => handleChange(e)}>
            {provinsi}
          </select>
        </form>
        <div className="container">
          <h1>Gallery Kekeringan di {select}</h1>
          <GalleryList />
        </div>
      </header>
    </>
  )
}
