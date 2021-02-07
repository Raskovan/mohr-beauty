import React from 'react'
import PropTypes from 'prop-types'
import * as helper from '../helper'

export default function Info(props) {
  const { promoText, priceText, showPrices } = props

  return (
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
          <p className="intro_caption">{priceText.caption}</p>
        </div>
      ) : null}
    </div>
  )
}

Info.propTypes = {
  showPrices: PropTypes.bool,
  promoText: PropTypes.object,
  priceText: PropTypes.object
}
