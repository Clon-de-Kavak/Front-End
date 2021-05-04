import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded">
            <div className="d-flex justify-content-center">
                <div className="jumbotron-text float-center text-center col-md-8 ">
                    <div className="jumbotron-header">Clon Kavak</div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            Transformando la <b>compra</b> y <b>venta</b> de autos                            
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    )
}