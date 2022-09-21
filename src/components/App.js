import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from './Navbar';
import Fof from '../pages/Fof';
import DisplayList from '../pages/DisplayList';
import AddListItem from '../pages/AddListItem';
function App() {
  const [list, setList] = useState([]);
  const [album, setAlbum] = useState([]);
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Albums list react app</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/list"
            element={<DisplayList props={[list, setList]} />}
          />
          <Route
            path="/add2list"
            element={<AddListItem props={[album, setAlbum]} />}
          />
          {/* for all non-declared routes */}
          <Route path="*" element={<Fof />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  app: {
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    fontSize: '56',
    color: 'rgb(82, 85, 105)',
    fontWeight: 'bold',
  },
};
