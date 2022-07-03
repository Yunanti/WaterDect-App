import React from 'react'
import { iconsList } from '../../svg/svg-list'

export default function Footer() {
  return (
    <footer>
        {iconsList.map((item) => (
          <span  data-aos="fade-up">{item.icons}</span>
        ))}
    </footer>
  )
}
