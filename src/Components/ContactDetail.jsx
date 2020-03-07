import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as helper from '../helper'

export default function ContactDetail(props) {
  const { attr, style, text, link, month } = props
  const [color, setColor] = useState({
    addr: 'white',
    tel: 'white',
    mail: 'white'
  })
  const changeStyle = attr => {
    if (color[attr] === 'white')
      setColor({ ...color, [attr]: helper.getColor(month) })
    else setColor({ ...color, [attr]: 'white' })
  }

  return (
    <>
      <a
        style={{ color: color[attr] }}
        onMouseOver={() => changeStyle(attr)}
        onMouseOut={() => changeStyle(attr)}
        className={style}
        href={link}
        target="_new"
      >
        {text}
      </a>
    </>
  )
}

ContactDetail.propTypes = {
  attr: PropTypes.string,
  style: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  month: PropTypes.string
}
