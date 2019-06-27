import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return(
    <div className="ui cards">
      {this.props.pets.map(mappedPet => <Pet onAdoptPet={this.props.onAdoptPet} key={mappedPet.id} pet={mappedPet} />)}
    </div>
    )
  }
}

export default PetBrowser
