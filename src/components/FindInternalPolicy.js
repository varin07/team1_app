import React from 'react';
import './FindInternalPolicy.css';
import './HeroSection.css';

function FindInternalPolicy() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Our database do not have the policy for the LEA you searched. Please try out external policy approach!')
    }

    return (
        <div class="internal-policy-container">
            <h1>GLSEN</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                    <p class="under-form">Please Enter the Name of the Local Education Agency: </p>
                    <input name="name" class="input-form"/>
                    </label>
                    <button type="submit" class="submit-form">Search <i class="fa fa-search" aria-hidden="true"/></button>    
                </form>
            </div>
        </div>
    )
}





export default FindInternalPolicy