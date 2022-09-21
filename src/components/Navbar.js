import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="center">
      <Link to="/">Home</Link> | <Link to="/add2list">Add To List</Link> |{' '}
      <Link to="/list">Display List</Link>
    </div>
  );
}
