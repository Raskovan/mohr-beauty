import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header(props) {
  const { showPrices, menuClick } = props
  return (
    <div className="header">
      <div className="logo">
        <p className="logo_slogan">Customized skincare</p>
        <p className="logo_text">Mohr Beauty.</p>
      </div>
      <div className="desktop_only">
        <Button showPrices={showPrices} menuClick={menuClick} />
      </div>
    </div>
  )
}

Header.propTypes = {
  showPrices: PropTypes.bool,
  menuClick: PropTypes.func
}
