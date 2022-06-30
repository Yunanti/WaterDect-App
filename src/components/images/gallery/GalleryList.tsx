import React from 'react'

export default function GalleryList({selectedProvinsi}: any) {
    const glist1 = [
        {
          image : <img src={require('../gallery/1.jpg')} alt="kekeringan" />,
        },
        {
          image : <img src={require('../gallery/2.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/3.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/4.webp')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/5.jpeg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/6.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/7.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/8.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/9.jpg')} alt="kekeringan" />,
        }
      ]

      const glist2 = [
        {
          image : <img src={require('../gallery/2.jpg')} alt="kekeringan" />,
        },
        {
          image : <img src={require('../gallery/1.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/3.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/4.webp')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/5.jpeg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/6.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/7.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/8.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/9.jpg')} alt="kekeringan" />,
        }
      ]

      const glist3 = [
        {
          image : <img src={require('../gallery/3.jpg')} alt="kekeringan" />,
        },
        {
          image : <img src={require('../gallery/1.jpg')} alt="kekeringan" />,
        },
        {
          image : <img src={require('../gallery/2.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/4.webp')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/5.jpeg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/6.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/7.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/8.jpg')} alt="kekeringan" />,
        },
        {
            image : <img src={require('../gallery/9.jpg')} alt="kekeringan" />,
        }
      ]

  const provinsiList1 = [
        "Aceh",
        "Bali",
        "Bangka Belitung",
        "Banten",
        "Bengkulu",
        "Jawa Tengah",
        "Kalimantan Tengah",
        "Sulawesi Tengah",
        "Jawa timur",
  ]
  const provinsiList2 = [
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
  ]

  const getGlist = (provinsi : any) => {
    if(provinsiList1.includes(provinsi)){
      return glist1
    } if(provinsiList2.includes(provinsi)){
      return glist2
    } 
      return glist3
  }

  return (
    <div className='gallery-list'>
        {getGlist(selectedProvinsi).map((item, index) => (
          <div className='gallery-img' key={index}>{item.image}</div>
        ))}
    </div>
  )
}
