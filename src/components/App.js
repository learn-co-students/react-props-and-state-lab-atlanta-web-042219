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

  onChangeType = (event) => {
    let newState = {
      filters:{type: event.target.value}
    }
    this.setState(newState)
  }

  onFindPetsClick = (event) => {
    if(this.state.filters.type === "all"){
      fetch(`/api/pets`)
      .then(data => data.json() )
      .then(data => this.setState({pets: data}))
    } else if (this.state.filters.type === "cat"){
      fetch(`/api/pets?type=cat`)
      .then(data => data.json() )
      .then(data => this.setState({pets: data}))    } else if (this.state.filters.type === "dog"){
      fetch(`/api/pets?type=dog`)
      .then(data => data.json() )
      .then(data => this.setState({pets: data}))    } else if (this.state.filters.type === "micropig"){
      fetch(`/api/pets?type=micropig`)
      .then(data => data.json() )
      .then(data => this.setState({pets: data}))    }
  }

  onAdoptPet = (e, id) => {
    // fetch(`/api/pets/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //     "accepts": "application/json"
    //   }, body: JSON.stringify({isAdopted: true})
    // }).then(res => res.json())
    // .then(console.log)

    let newPetArray = this.state.pets.map(pet =>{
      if(pet.id === id)
        pet.isAdopted = true
      return pet
    })
    this.setState({pets: newPetArray})
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
        <button onClick={(e)=>console.log(this.state.pets)}>wot</button>
      </div>
    )
  }
}

export default App
