import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

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

  changeFilters = (filterType)=>{
    this.setState({
      filters: { type: filterType }
    })
  }

  onAdoptBtnClick = (id)=>{
    this.setState({pets: this.state.pets.map(pet =>{
      if(pet.id === id)
        pet.isAdopted = !pet.isAdopted

      return pet
    })})
  }

  fetchPets = ()=>{
    fetch( this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}` )
    .then(resp => resp.json())
    .then(pets => this.setState({ pets: pets }))
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
              <Filters changeFilters={this.changeFilters} fetchPets={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              {/* <PetBrowser pets={this.state.pets} onAdoptBtnClick={this.onAdoptBtnClick} /> */}
              <div className="ui cards">{this.state.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptBtnClick={this.onAdoptBtnClick} />) }</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
