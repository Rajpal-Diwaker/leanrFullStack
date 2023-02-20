import { Navbar } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <navbarBrand href="/" >Test Menu</navbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
