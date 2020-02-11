import React from 'react'
import './Item.css'

const Item = ({ name, onDelete }) => {
  return (
    <div className="item-section">
      <input
        type="checkbox"
        className="item-section__check"
        onClick={onDelete}
      />
      <span className="item-section__content"> {name} </span>
    </div>
  )
}

export default Item
