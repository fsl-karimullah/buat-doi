import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const ButtonPage = () => {
    return (
        <div>
           <Link className="btn-style" to="/hbdbeb"><Button variant="danger" size="lg">Pencet Disini Beb</Button></Link>
        </div>
    )
}

export default ButtonPage;