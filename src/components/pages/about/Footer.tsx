import React from 'react'
import { iconsList } from '../../svg/svg-list'

export default function Footer() {
  return (
    <footer>
        {iconsList.map((item) => (
          <span>{item.icons}</span>
        ))}
      </footer>
  )
}
