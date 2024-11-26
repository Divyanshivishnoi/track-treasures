import { BrowserRouter as Router, Routes, Route,BrowserRouter } from 'react-router-dom';
// import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import Expense from './components/Expense/Expense';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Edit from './components/Edit/Edit';

const App = () => {
    return (
        <Router>
           <Navbar />
           <Routes>
          <Route path="" element={ <Form />} />
           <Route path="/expenses" element={ <Table />}/>
           
           <Route path="/edit" element={<Edit/>} />
            </Routes>
        </Router>
           
        
    );
};

export default App;
