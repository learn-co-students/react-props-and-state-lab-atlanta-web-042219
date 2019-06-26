import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">{this.props.pets.map(onePet => <Pet key={onePet.id} pet={onePet} onAdoptPet={this.props.onAdoptPet} />)} </div>
  }
}

export default PetBrowser
