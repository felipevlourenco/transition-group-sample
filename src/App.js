import React, { Component } from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import Item from './components/Item/Item'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItemHandler = itemName => {
    const newItem = {
      name: itemName,
      id: +new Date()
    }
    this.setState({
      items: this.state.items.concat(newItem)
    })
  }

  removeItemHandler = index => {
    const newItems = [...this.state.items]
    newItems.splice(index, 1)
    this.setState({ items: newItems })
  }

  render() {
    const itemsList = this.state.items.map((item, index) => (
      <CSSTransition key={item.id} timeout={500} classNames="move">
        <Item
          key={item.id}
          name={item.name}
          onDelete={() => this.removeItemHandler(index)}
        />
      </CSSTransition>
    ))

    return (
      <div className="App">
        <div className="items-section">
          <Toolbar onAddHandle={this.addItemHandler} />
          <TransitionGroup className="items-section__list">
            {itemsList}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default App
