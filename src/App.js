import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Layout from './components/Layout';
import VehicleCard from './components/VehicleCard';
import FilterByYear from './components/FilterByYear';
import FilterByMaker from './components/FilterByMaker';
import FilterByModel from './components/FilterByModel';
import ColorFilter from './components/ColorFilter';
import PriceFilter from './components/PriceFilter';
import MileageFilter from './components/MileageFilter';
import TransmissionFilter from './components/TransmissionFilter';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (  
    <BrowserRouter>      
      <div className="App">
        <Layout>
          <Navbar />
          <Routes />
          <h1>Vehicle Card</h1>
          <VehicleCard />
          <h1>Filter By Year</h1>
          <FilterByYear />
          <h1>Filter By Maker And Model</h1>
          <FilterByMaker />    
          <FilterByModel />   
          <h1>Color Filter</h1>
          <ColorFilter />    
          <h1>Price Filter</h1>
          <PriceFilter />  
          <h1>Mileage Filter</h1>
          <MileageFilter />
          <h1>Transmission Filter</h1>
          <TransmissionFilter />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
