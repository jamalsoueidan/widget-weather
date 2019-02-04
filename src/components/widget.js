import React from 'react';

export default ({title, children}) => {
  return(
  <div className="widget" style={{margin: "10px", width: "300px"}}>
    <div className="panel panel-info">
    <div className="panel-heading">{title()}</div>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  </div>
  )
}