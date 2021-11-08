import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.obj.gender === 'female' ?'♀' : '♂' }
            {this.props.obj.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.obj.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.obj.age}</p>
            <p>Weight: {this.props.obj.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.obj.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
