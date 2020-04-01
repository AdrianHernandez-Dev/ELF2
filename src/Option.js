import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';
import Feature from './Features';


class Option extends React.Component {
  render(props){
    return(
<div className="summary__option" key={props.featureHash}>
<div className="summary__option__label">
  <Feature />
  </div>
<div className="summary__option__value">{props.selectedOption.name}</div>
<div className="summary__option__cost">
  {USCurrencyFormat.format(props.selectedOption.cost)}
</div>
</div>
    )}
}

export default Option;