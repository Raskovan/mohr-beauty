import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [promoText, setpromoText] = useState()
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

  const getColor = month => {
    switch (month.toUpperCase()) {
      case 'JANUARY':
        return '#55bf79'
      case 'FEBRUARY':
        return '#df6abe'
      case 'MARCH':
        return '#8f54e1'
      case 'APRIL':
        return '#54e1c0'
      case 'MAY':
        return '#c2e154'
      case 'JUNE':
        return '#e18554'
      case 'JULY':
        return '#e15454'
      case 'AUGUST':
        return '5488e1'
      case 'SEPTEMBER':
        return '#54e1df'
      case 'OCTOBER':
        return '#d5e154'
      case 'NOVEMBER':
        return '#da54e1'
      case 'DECEMBER':
        return '#549fe1'
      default:
        return '#55bf79'
    }
  }

  function changeStyle(month) {
    if (color[month] === 'white')
      setColor({ ...color, [month]: getColor(promoText[0].month) })
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
            {!showPrices ? 'PRICES' : 'PROMO'}
          </button>
        </div>
      </div>
      <div className="promotion">
        {!showPrices ? (
          promoText ? (
            <p
              className="fade-in"
              style={{ color: getColor(promoText[0].month) }}
            >
              <span className="caps_lock">{promoText[0].month}.</span>{' '}
              <span>{promoText[0].description}</span>
            </p>
          ) : null
        ) : (
          <div className="fade-in">
            <p className="line-spacing">Gua Sha facial&nbsp;$120.</p>
            <p className="line-spacing">Chemical peel facial&nbsp;$140.</p>
            <p className="line-spacing">Microneedling facial&nbsp;$350.</p>
          </div>
        )}
      </div>

      <div className="address">
        <div className="mobile_only">
          <button
            style={{ color: 'auto' }}
            className={!showPrices ? 'prices' : 'promo'}
            onClick={() => menuClick()}
          >
            {!showPrices ? 'PRICES' : 'PROMO'}
          </button>
        </div>
        <a
          style={{ color: color['addr'] }}
          onMouseOver={() => changeStyle('addr')}
          onMouseOut={() => changeStyle('addr')}
          className="address_street"
          href="https://goo.gl/maps/hCxGuAWUtywzmiHq5"
          target="_new"
        >
          303 fith avenue • suite 906 • new york
        </a>
        <p>
          <a
            style={{ color: color['tel'] }}
            onMouseOver={() => changeStyle('tel')}
            onMouseOut={() => changeStyle('tel')}
            href="tel:917 658 6404"
          >
            917 658 6404
          </a>{' '}
          •{' '}
          <a
            style={{ color: color['mail'] }}
            onMouseOver={() => changeStyle('mail')}
            onMouseOut={() => changeStyle('mail')}
            href="mailto:info@mohr-beauty.com"
          >
            info@mohr-beauty.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
