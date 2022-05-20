
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Filter from '../filter/Filter';
const Header = (props) => {
    const [openFiltr, setOpenFilter] = useState(false)
    const openFilter = () => {
        setOpenFilter(!openFiltr);
    }
    const filter = async(data) => {
        props.filter(data)
    }
    return <>    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link" >Dashboad </Link>
                    <button onClick={openFilter} className="btn btn-secondary">Filter <i class="fa fa-filter"></i></button>
                </div>
            </div>

            <Link to={'/'} className="navbar-brand">News Reader <i className="fa fa-newspaper-o fa-2"></i></Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
    </nav>
        {openFiltr ? <Filter filter={filter} /> : null}
    </>

}
export default Header;