import React, { useState } from 'react'
import './Toolbar.css'

const Toolbar = props => {
  const [itemName, setItemName] = useState('')

  const handleChange = event => {
    const value = event.target.value
    setItemName(value)
  }

  const addButtonHandler = () => {
    if (!!itemName) {
      props.onAddHandle(itemName)
      setItemName('')
    }
  }

  return (
    <div className="toolbar-section">
      <input
        className="toolbar-section__input"
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={handleChange}
      />
      <button
        className="toolbar-section__button"
        disabled={!itemName}
        onClick={addButtonHandler}
      >
        +
      </button>
    </div>
  )
}

export default Toolbar
