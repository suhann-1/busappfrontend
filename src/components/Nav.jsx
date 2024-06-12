import React from 'react'

const Nav = () => {
  return (
    <div>
       <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BusTicketBooking</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">BookSeat</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">ViewBus</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">SearchBuses</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Nav