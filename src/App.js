import React, { useEffect, useState } from 'react'
import * as helper from './helper'
import './App.css'

function App() {
  const [promoText, setPromoText] = useState()
  const [priceText, setPriceText] = useState()
  const [contactText, setContactText] = useState()
  const [showPrices, setShowPrices] = useState(false)
  const [color, setColor] = useState({
    addr: 'white',
    tel: 'white',
    mail: 'white'
  })

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

  function changeStyle(month) {
    if (color[month] === 'white')
      setColor({ ...color, [month]: helper.getColor(promoText.month) })
    else setColor({ ...color, [month]: 'white' })
  }

  const menuClick = () => {
    setShowPrices(!showPrices)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <p className="logo_slogan">Customized skincare</p>
          <p className="logo_text">Mohr Beauty.</p>
        </div>
        <div className="desktop_only">
          <button
            className={!showPrices ? 'prices' : 'promo'}
            onClick={() => menuClick()}
          >
            {!showPrices ? 'PRICING' : 'PROMO'}
          </button>
        </div>
      </div>
      <div className="promotion">
        {!showPrices ? (
          promoText ? (
            <p
              className="fade-in"
              style={{ color: helper.getColor(promoText.month) }}
            >
              <span className="caps_lock">{promoText.month}.</span>{' '}
              <span>{promoText.description}</span>
            </p>
          ) : null
        ) : priceText ? (
          <div className="fade-in">
            <p className="intro_pricing">{priceText.intro}</p>
            {priceText.details.map((detail, i) => (
              <p className="line-spacing" key={i}>
                {detail}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <div className="address">
        <div className="mobile_only">
          <button
            style={{ color: 'auto' }}
            className={!showPrices ? 'prices' : 'promo'}
            onClick={() => menuClick()}
          >
            {!showPrices ? 'PRICING' : 'PROMO'}
          </button>
        </div>

        {contactText ? (
          <>
            <a
              style={{ color: color['addr'] }}
              onMouseOver={() => changeStyle('addr')}
              onMouseOut={() => changeStyle('addr')}
              className="address_street"
              href={helper.createMapLink(contactText.address)}
              target="_new"
            >
              {contactText.address}
            </a>
            <p>
              <a
                style={{ color: color['tel'] }}
                onMouseOver={() => changeStyle('tel')}
                onMouseOut={() => changeStyle('tel')}
                href={`tel:${contactText.phone}`}
              >
                {contactText.phone}
              </a>{' '}
              •{' '}
              <a
                style={{ color: color['mail'] }}
                onMouseOver={() => changeStyle('mail')}
                onMouseOut={() => changeStyle('mail')}
                href={`mailto:${contactText.email}`}
              >
                {contactText.email}
              </a>
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default App
