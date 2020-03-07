import React, { useEffect, useState } from 'react'
import './App.css'
import Info from './Components/Info'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [promoText, setPromoText] = useState()
  const [priceText, setPriceText] = useState()
  const [contactText, setContactText] = useState()
  const [showPrices, setShowPrices] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_API_KEY}`
        )
        const json = await response.json()
        json.items.forEach(item => {
          if (item.fields.id === 'promo') setPromoText(item.fields)
          if (item.fields.id === 'pricing') setPriceText(item.fields)
          if (item.fields.id === 'contacts') setContactText(item.fields)
        })
      } catch (err) {
        console.error('Error fetching texts:', err)
      }
    }
    fetchData()
  }, [])

  const menuClick = () => {
    setShowPrices(!showPrices)
  }

  return (
    <div className="App">
      <Header showPrices={showPrices} menuClick={menuClick} />
      <Info
        promoText={promoText}
        priceText={priceText}
        showPrices={showPrices}
      />
      <Footer
        showPrices={showPrices}
        menuClick={menuClick}
        contactText={contactText}
        month={promoText && promoText.month}
      />
    </div>
  )
}

export default App
