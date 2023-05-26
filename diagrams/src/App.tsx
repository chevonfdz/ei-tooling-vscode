import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContextMenu from './components/context-menu/ContextMenu';
import AddNewButton from './components/add-new-button/AddNewButton';
import PropertyDialog from './components/property-dialog/PropertyDialog';

function App() {
  return (
    <div className="App">
      <AddNewButton />
    </div>
  );
}

export default App;
