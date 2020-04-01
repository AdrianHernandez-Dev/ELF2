import React from 'react';

class USCurrencyFormat extends Component {
  render () {
  return (new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})
  )}
}

export default USCurrencyFormat;