import React from 'react'
import { Link } from 'gatsby'
import { container, nav } from './layout.module.css'

export default function Layout(props){
    return (
        <div>
            <nav>
                <ul className={nav}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main className={container}>
                <h1>{props.pageTitle}</h1>
                {props.children}
            </main>
        </div>
    )
} 