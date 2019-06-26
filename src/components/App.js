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

  onChangeType = (newFilter) => {
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  onFindPetsClick = () => {
    const url = this.urlFilter(this.state.filters.type)
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ pets: res })
      })
  }

  urlFilter = (filter) => {
    const url = `/api/pets`

    if (filter === 'all') return url
    else return `${url}?type=${filter}`
  }

  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(pet => {
      if (pet.id === id) pet.isAdopted = true
      return pet
    })
    this.setState({ pets: newPets })
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
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
