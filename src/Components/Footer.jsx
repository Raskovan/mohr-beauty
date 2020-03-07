import React from 'react'
import PropTypes from 'prop-types'
import * as helper from '../helper'
import Button from './Button'
import ContactDetail from './ContactDetail'

export default function Footer(props) {
  const { showPrices, menuClick, contactText, month } = props

  return (
    <div className="address">
      <div className="mobile_only">
        <Button showPrices={showPrices} menuClick={menuClick} />
      </div>

      {contactText && month ? (
        <>
          <ContactDetail
            attr="addr"
            style={`address_street`}
            text={contactText.address}
            link={helper.createMapLink(contactText.address)}
            month={month}
          />
          <p>
            <ContactDetail
              attr="tel"
              style={``}
              text={contactText.phone}
              link={`tel:${contactText.phone}`}
              month={month}
            />{' '}
            •{' '}
            <ContactDetail
              attr="mail"
              style={``}
              text={contactText.email}
              link={`mailto:${contactText.email}`}
              month={month}
            />
          </p>
        </>
      ) : null}
    </div>
  )
}

Footer.propTypes = {
  showPrices: PropTypes.bool,
  menuClick: PropTypes.func,
  contactText: PropTypes.object,
  month: PropTypes.string
}
