import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1>Oops! We ran out of code</h1>
      <Link to={"/"}>Go back to home</Link>
    </div>
  )
}

export default NotFound
