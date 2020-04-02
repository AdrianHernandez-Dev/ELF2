import React from 'react'

function Total (props) { 
  return `$${Object.keys(props.selected).reduce(
  (acc, curr) => acc + props.selected[curr].cost,
  0
)}`
}

export default Total;