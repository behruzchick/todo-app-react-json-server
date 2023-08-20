import React from 'react'
import axios from 'axios'
import { Route,Link,Routes } from 'react-router-dom'
import { User } from './User'
import { Create } from './Create'
import './Main.scss'
export const Main = () => {
  return (
    <div>
        <div className="table">
            <header>
                <h4>Id</h4>
                <h4>Name</h4>
                <h4>Lastname</h4>
                <h4>Email</h4>
            </header>
        </div>
        <User />
    </div>
  )
}
