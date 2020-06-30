import React, { Component } from 'react';
import { fetchCountries } from '../actions/index'
import {connect} from 'react-redux'

class SearchBar extends Component {
  componentDidMount(){
    this.props.fetchCountries();
  }

  renderSelectCountries(){
    return (
      <select 
      onChange={e => this.onChangeCountry(e)}
      className='form-control search-bar'>
      {this.props.countries.map(countrie =>  
        <option key={countrie.code} value={countrie.code}>{countrie.name}
        </option>)
      }
      </select>
    );
  }
  onChangeCountry = e => {
    console.log("ON CHANGE :::: ", e.target.value);
    
  }
  render() {
    return (
      <form className='form-groupe'>
        {this.renderSelectCountries()}
      </form>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    countries: store.countriesReducer.countries
  }
}

const mapDispatchToProps = {
  fetchCountries
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
