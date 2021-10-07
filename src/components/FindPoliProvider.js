import React from 'react'
import {Button} from './Button'
import './FindPoliProvider.css'


function FindPoliProvider() {
    return (
        <div className='findpoli-container'>            
            <h1>FINDING POLICIES</h1>
                <p>Here you can find information on how to find LEA anti-bullying and anti-harassment policies</p>
                <div className="findpoli-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/internal-resources'>
                        Internal Rescources
                    </Button>

                </div>
                <div className="findpoli-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/external-rescourses'>
                        External Rescources
                    </Button>
                </div>
        </div>

    )
}

export default FindPoliProvider
