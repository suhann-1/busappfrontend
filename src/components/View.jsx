import React from 'react'

const View = () => {
  return (
    <div>
       <Nav/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">BusNo</th>
      <th scope="col">StartingFrom</th>
      <th scope="col">GoingTo</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{value.busno}</td>
      <td>{value.from}</td>
      <td>{value.to}</td>
      <td>{value.date}</td>
    </tr>
    
  </tbody>
</table>  
    </div>
  )
}

export default View