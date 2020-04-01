import React from 'react'
import Features from './Features';

function UpdateFeature (){
  (feature, newValue) => {
  const selected = Object.assign({}, this.state.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });
};


    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>
            <Features />
            </h3>
        </legend>
        <Options />
      </fieldset>
    );
}

export default UpdateFeature;