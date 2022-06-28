import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelect } from '../../redux/action';

export default function Form() {

    const dispatch = useDispatch();
  
    const handleChange = (e: any) => {
      dispatch(setSelect(e.target.value))
    }
  
    const provinsiList = [
        "Pilih Provinsi...",
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
  
    const provinsi = provinsiList.map((prov, index) =>
      <option key={index} value={prov}>{prov}</option>
    );
  return (
    <>
        <form className='form-gallery'>
          <select onChange={(e) => handleChange(e)}>
            {provinsi}
          </select>
        </form>
    </>
  )
}