import React from 'react'
import '../../styles/footer/Footer.css'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      Designed and Developed by Manas Kaushik.
      All Rights Reserved.
      © 2023 - {year}
    </footer>
  )
}