import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
         
            {this.props.petInfo.gender === "male" ? "♂ " : "♀ "}

            {this.props.petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petInfo.isAdopted ? <button className="ui primary button">Already adopted</button> : <button className="ui primary button" onClick={(e) => this.props.onAdoptPet(e, this.props.petInfo.id)}>Adopt pet</button>}

          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
