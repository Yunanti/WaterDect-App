import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../components/redux/action';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage("Home"));
  }, [dispatch])
  
  return (
    <div className='bg-home'>
      <header className='header-home'>
          <h1>Jurus BPBD DKI Hadapi Krisis Air Saat Musim Kemarau Melanda Jakarta</h1>
           <a href="https://www.liputan6.com/news/read/4959237/jurus-bpbd-dki-hadapi-krisis-air-saat-musim-kemarau-melanda-jakarta" target='_blank' rel="noreferrer">Lihat Selengkapnya</a>
          
      </header>

      <main className='main-home-top'>
        <div className='card-news-top'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/1.jpg")} alt="kekeringan" />
            <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
          </a>
        </div>
        <div className='card-news-top'>
          <a href="https://news.detik.com/berita/d-6081428/daftar-15-kecamatan-di-dki-yang-rawan-krisis-air-bersih-saat-kemarau" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <h4>Daftar 15 Kecamatan di DKI yang Rawan Krisis Air Bersih saat Kemarau</h4>
          </a>
        </div>
        <div className='card-news-top'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/1.jpg")} alt="kekeringan" />
            <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
          </a>
        </div>
        <div className='card-news-top'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
          </a>
        </div>
      </main>
      
      <main className='main-home-bottom'>
        <div className='card-news-bottom'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <div className='title-news'>
              <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
              <h6>17/03/2020, 19:50 WIB</h6>
              <p>Kepala BPBD Sikka, Daeng Bakir, mengatakan, pemerintah telah berupaya mengatasi kekeringan itu dengan mendistribusikan air bersih ke setiap desa yang mengalami kekeringan. "BPBD Sikka sudah mendistribusikan 465 tangki air bersih berukuran 5.000 liter," jelas Bakir saat dihubungi, Jumat (12/11/2021) pagi. Seluruh biaya pengadaan air bersih yang berdampak atas penanganan bencana ini bersumber dari biaya tidak terduga (BTT) tahun 2021 senilai Rp 222.742.250.</p>
            </div>
          </a>
        </div>
        <div className='card-news-bottom'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <div className='title-news'>
              <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
              <h6>17/03/2020, 19:50 WIB</h6>
              <p>Kepala BPBD Sikka, Daeng Bakir, mengatakan, pemerintah telah berupaya mengatasi kekeringan itu dengan mendistribusikan air bersih ke setiap desa yang mengalami kekeringan. "BPBD Sikka sudah mendistribusikan 465 tangki air bersih berukuran 5.000 liter," jelas Bakir saat dihubungi, Jumat (12/11/2021) pagi. Seluruh biaya pengadaan air bersih yang berdampak atas penanganan bencana ini bersumber dari biaya tidak terduga (BTT) tahun 2021 senilai Rp 222.742.250.</p>
            </div>
          </a>
        </div>
        <div className='card-news-bottom'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <div className='title-news'>
              <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
              <h6>17/03/2020, 19:50 WIB</h6>
              <p>Kepala BPBD Sikka, Daeng Bakir, mengatakan, pemerintah telah berupaya mengatasi kekeringan itu dengan mendistribusikan air bersih ke setiap desa yang mengalami kekeringan. "BPBD Sikka sudah mendistribusikan 465 tangki air bersih berukuran 5.000 liter," jelas Bakir saat dihubungi, Jumat (12/11/2021) pagi. Seluruh biaya pengadaan air bersih yang berdampak atas penanganan bencana ini bersumber dari biaya tidak terduga (BTT) tahun 2021 senilai Rp 222.742.250.</p>
            </div>
          </a>
        </div>
        <div className='card-news-bottom'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <div className='title-news'>
              <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
              <h6>17/03/2020, 19:50 WIB</h6>
              <p>Kepala BPBD Sikka, Daeng Bakir, mengatakan, pemerintah telah berupaya mengatasi kekeringan itu dengan mendistribusikan air bersih ke setiap desa yang mengalami kekeringan. "BPBD Sikka sudah mendistribusikan 465 tangki air bersih berukuran 5.000 liter," jelas Bakir saat dihubungi, Jumat (12/11/2021) pagi. Seluruh biaya pengadaan air bersih yang berdampak atas penanganan bencana ini bersumber dari biaya tidak terduga (BTT) tahun 2021 senilai Rp 222.742.250.</p>
            </div>
          </a>
        </div>
        <div className='card-news-bottom'>
          <a href="https://regional.kompas.com/read/2021/11/12/151502978/17-kecamatan-di-sikka-darurat-kekeringan-bpbd-kirim-465-tangki-air-bersih" target='_blank' rel="noreferrer">
            <img src={require("../../components/images/gallery-home/2.jpg")} alt="kekeringan" />
            <div className='title-news'>
              <h4>17 Kecamatan di Sikka Darurat Kekeringan, BPBD Kirim 465 Tangki Air Bersih</h4>
              <h6>17/03/2020, 19:50 WIB</h6>
              <p>Kepala BPBD Sikka, Daeng Bakir, mengatakan, pemerintah telah berupaya mengatasi kekeringan itu dengan mendistribusikan air bersih ke setiap desa yang mengalami kekeringan. "BPBD Sikka sudah mendistribusikan 465 tangki air bersih berukuran 5.000 liter," jelas Bakir saat dihubungi, Jumat (12/11/2021) pagi. Seluruh biaya pengadaan air bersih yang berdampak atas penanganan bencana ini bersumber dari biaya tidak terduga (BTT) tahun 2021 senilai Rp 222.742.250.</p>
            </div>
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
