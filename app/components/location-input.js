import React from 'react';

class LocationInput extends React.Component {

  state = {
    zipcode: ''
  }

  render() {

    const onZipcodeChange = (e) => {
      console.log('onZipcodeChange:', e);
      this.setState({
        zipcode: e.target.value
      });
    };

    const isValid = (zipcode) => {
      return zipcode.length === 5 && !isNaN(zipcode);
    };

    const onSubmit = () => {
      if (isValid(this.state.zipcode)) {
        this.props.whenReady(this.state.zipcode);
      } else {
        console.log('Zipcode is not valid.')
      }
    };

    return (
      <div className="zipcode-input-wrapper">
        <div className="zipcode-input input">
          <input
            value={this.state.zipcode}
            onChange={onZipcodeChange}
            placeholder="Enter your zipcode." />
        </div>
        <div className="submit-button button" onClick={onSubmit}>
          Find movies near me
        </div>
      </div>
    );
  }
}

export default LocationInput;