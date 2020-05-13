import React from 'react'
import { Link } from 'gatsby'

export default function Menu() {
      return (
            <ul style={{ display: 'flex', flexFlow: 'row wrap', listStyleType: 'none', alignItems:'center', paddingTop: 20 }}>
                  <li >
                        <Link to="/">
                              <h3 style={{ fontSize: 14, color: '#fff', marginRight: 10, }}>
                                    Home
                              </h3>
                        </Link>
                  </li>
                  <li >
                        <Link to="/blogs">
                              <h3 style={{ fontSize: 14, color: '#fff', marginRight: 10}}>
                                    Blogs
                              </h3>
                        </Link>
                  </li>
                  <li >
                        <Link to="/about">
                              <h3 style={{ fontSize: 14, color: '#fff', marginRight: 10, }}>
                                    About
                              </h3>
                        </Link>
                  </li>

            </ul>
      )
}

