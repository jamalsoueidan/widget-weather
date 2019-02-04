import React from 'react';
import Widget from '../components/widget'
import ListGroupItem from '../components/list-group-item'
import Item from '../components/item'
import api from '../api';
import { connect } from "react-redux";
import { updateCity } from "../store";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({disabled: true})
    api(this.state.value).then(data => {
      if(data.cod === "404") {
        alert( this.state.value + ' does not exists') // just simple message not found!
      } else {
        this.props.history.push('/?city=' + this.state.value)
        this.props.updateCity(data);
      }
      this.setState({value: '', disabled: false})
    })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const city = this.props.data
    return (
      <Widget title={() => (<div>Weather in <b>{city.name}</b></div>)}>
        <ListGroupItem><Item title="Temperature">{city.main.temp}°C</Item> </ListGroupItem>
        <ListGroupItem><Item title="Humidity">{city.main.humidity}</Item></ListGroupItem>
        <ListGroupItem><Item title="Wind">{city.wind.speed} m/s Øst</Item></ListGroupItem>
        <ListGroupItem>
          <form className="form-inline was-validated" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control is-invalid" id="city" placeholder="City" value={this.state.value} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleClick} disabled={this.state.disabled}>Search</button>
          </form>
        </ListGroupItem>
      </Widget>
    )
  }
}

const mapStateToProps = ( state ) => ({
  data: state.data,
});

const mapDispatchToProps = {
  updateCity,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );