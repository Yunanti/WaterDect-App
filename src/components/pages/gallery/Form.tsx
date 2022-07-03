import { useDispatch, useSelector } from 'react-redux';
import { setSelect } from '../../redux/action';

export default function Form({setisFirstTimeRender}: any) {
    const { select } = useSelector((state: any) => state.select);
    const dispatch = useDispatch();
  
    const handleChange = (e: any) => {
      setisFirstTimeRender(true);
      dispatch(setSelect(e.target.value))
    }
  
    const provinsiList = [
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
  
    const provinsi = provinsiList.sort().map((prov, index) =>
      <option key={index} selected={select === prov} value={prov}>{prov}</option>
    );
  return (
    <>
        <form className='form-gallery' data-aos="fade-up">
          <select onChange={(e) => handleChange(e)}>
            <option value={""}>Pilih Provinsi...</option>
            {provinsi}
          </select>
        </form>
    </>
  )
}
