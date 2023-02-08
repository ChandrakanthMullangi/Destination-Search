// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  searchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state
    const searchResults = destinationsList.filter(eachObj =>
      eachObj.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading"> Destination Search </h1>
        <div className="input-container">
          <input
            type="search"
            placeholder="Search"
            onChange={this.searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
            value={searchValue}
          />
        </div>
        <ul className="content-container">
          {searchResults.map(eachObj => (
            <DestinationItem key={eachObj.id} placesList={eachObj} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
