import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to='/' className="nav-link px-2 text-secondary">Home</Link></li>
                        {/* <li><Link to='/user-form' className="nav-link px-2 text-white">formulario</Link></li> */}
                        {/* <li><Link to={"/detail/:id"} className="nav-link px-2 text-white">Detalle</Link></li> */}
                        {/* <li><Link href="" className="nav-link px-2 text-white">Pricing</Link></li> */}
                        {/* <li><a href="" className="nav-link px-2 text-white">About</a></li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}
