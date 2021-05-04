import React from 'react';
import { ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const FilterByYear = () => {
    return (
        <>
        <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton value={1}>2020</ToggleButton>
            <ToggleButton value={2}>2019</ToggleButton>
            <ToggleButton value={3}>2018</ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton value={1}>2017</ToggleButton>
            <ToggleButton value={2}>2016</ToggleButton>
            <ToggleButton value={3}>2015</ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton value={1}>2014</ToggleButton>
            <ToggleButton value={2}>2013</ToggleButton>
            <ToggleButton value={3}>2012</ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton value={1}>2011</ToggleButton>
            <ToggleButton value={2}>2010</ToggleButton>
            <ToggleButton value={3}>2009</ToggleButton>
        </ToggleButtonGroup>
        </>
    )
}

export default FilterByYear;