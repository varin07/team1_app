import React from 'react';
import './AddPolicy.css'
import ReactDOM from "react-dom";


function AddPolicy() {
    return (
            <html style={{overflow: 'auto', margin: '0px', padding: '0px', height: '100%', border: 'none'}}>
            <body style={{overflow: 'auto', margin: '0px', padding: '0px', height: '100%', border: 'none'}}>
            <img src="https://www.glsen.org/themes/glsen/src/images/svg/GLSEN-rgb.svg" alt="Logo" class="add-policy-center"></img>
            <br></br>
            <br></br>
            <h1 className='add-policy-h1'>Here you are able to add policies to an existing database!</h1>
            <p style={{textAlign: "center"}}> Thank you for sharing your policy! </p>
            <br></br>

            <div style={{margin: '0px', padding: '0px', height: '100%', border: 'none'}}>
                <iframe src="https://glsen.qualtrics.com/jfe/form/SV_1TvalyWQW69xj1j"> 
                </iframe>
            </div>
            <br></br>

            </body>
            </html>
    );
}

export default AddPolicy;