import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <section>
      {/* <h1>Services</h1>
      <p>Hiiii</p> */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li>
                <Link to="web">Web</Link>
              </li>
              <li>
              <Link to="mobile">Mobile</Link>
              </li>
              <li>
              <Link to="desktop">Desktop</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
          <Outlet/>
          </div>
        </div>
      </div>
    </section>
  )
}

// We need to make nested nav in the Services so, we go to the App component & make a children & outlet here to make links

// If I make nested route we remove slashes from every link in the services to append on the old path as the slash make a new page & remove the old page.

// We put slashes if we need to route to this page first.