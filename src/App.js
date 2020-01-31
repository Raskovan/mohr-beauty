import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [promoText, setpromoText] = useState()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_API_KEY}`
        )
        const json = await response.json()
        setpromoText(
          json.items.map(item => {
            return item.fields
          })
        )
      } catch (err) {
        console.error('Error fetching texts:', err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className="logo">
        <p className="logo_slogan">Customized skincare</p>
        <p className="logo_text">Mohr Beauty.</p>
      </div>
      <div className="promotion">
        {promoText && (
          <p className="fade-in">
            {promoText[0].month}.{' '}
            <span className="no_br">{promoText[0].description}</span>
          </p>
        )}
      </div>
      <div className="address">
        <a
          className="address_street"
          href="https://goo.gl/maps/hCxGuAWUtywzmiHq5"
          target="_new"
        >
          303 fith avenue • suite 906 • new york
        </a>
        <p>
          <a href="tel:917 658 6404">917 658 6404</a> •{' '}
          <a href="mailto:info@mohr-beauty.com">info@mohr-beauty.com</a>
        </p>
      </div>
    </div>
  )
}

export default App
