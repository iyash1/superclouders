'use client'
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [page, setPage] = useState('');

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href={"/"}>Home</Link>
                <Link className="navbar-brand" href={"/about"}>About</Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};

export default Header