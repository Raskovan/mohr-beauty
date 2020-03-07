import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  const { showPrices, menuClick } = props
  return (
    <button
      className={!showPrices ? 'prices' : 'promo'}
      onClick={() => menuClick()}
    >
      {!showPrices ? 'PRICING' : 'PROMO'}
    </button>
  )
}

Button.propTypes = {
  showPrices: PropTypes.bool,
  menuClick: PropTypes.func
}
