import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary bg-dark p-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href='/home'>Event Graphia</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar