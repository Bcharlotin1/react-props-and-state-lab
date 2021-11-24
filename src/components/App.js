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

  updateFilter = (event) =>{
    this.setState({
      filters: { 
        ...this.state.filters, 
        type: event.target.value
      }
    })
  }

  getPets = ()=>{
    
    let url = '/api/pets'
    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }
    // if(type === 'cat'){
    //   url = '/api/pets?type=cat'
    // }
    // if(type === 'dog'){
    //   url = '/api/pets?type=dog'
    // }
    // if(type === 'micropig'){
    //   url = '/api/pets?type=micropig'
    // }
    
    
    fetch(url)
          .then(response => response.json())
          .then(data =>{
              this.setState({
                  pets: data
              })
          })
  }

  matchPetId = (id) => {
    this.state.pets.map(pet =>{
      if(id === pet.id){
        pet.isAdopted = true
      }
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
              <Filters onChangeType={this.updateFilter} onFindPetsClick ={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.matchPetId}
                allPets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
