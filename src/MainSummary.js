import React from 'react';
import Summary from './Summary';
import Total from './Total'


function MainSummary(props) {
  return(
    <div>
            <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={props.selected}/>
            <div className="summary__total">
            <Total selected={props.selected}/>
            </div>
          </section>
    </div>
  )
}

export default MainSummary;