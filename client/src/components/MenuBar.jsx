import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {AiFillBulb} from 'react-icons/ai'

const MenuBar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary-secondary">
            <div className="container-fluid">
                <Link class="navbar-brand logo" to="/">
                    <AiFillBulb className='me-2'/>
                    Pijar Store
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
  )
};


export default MenuBar;