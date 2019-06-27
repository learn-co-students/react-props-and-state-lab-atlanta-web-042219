import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    // console.log('onChangeType - e.target.value:', e.target.value)

    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    // console.log('filters.type before fetch():', this.state.filters.type)
    // console.log('this.state before fetch:', this.state)

    let type = this.state.filters.type

    let fetchURL = ''
    if (type === 'cat') fetchURL = `?type=cat`
    else if (type === 'dog') fetchURL = `?type=dog`
    else if (type === 'micropig') fetchURL = `?type=micropig`
    
    fetch(`/api/pets${fetchURL}`)
    .then(resp => resp.json())
    .then(json => {
      // console.log('Fetch results:', json)
      this.setState({ pets: json })
    })
  }

  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === id) pet.isAdopted = !pet.isAdopted
        return pet
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
