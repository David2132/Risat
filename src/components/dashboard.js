import React from 'react';
import { Link } from 'react-router-dom'


function Dashboard() {
    return (
        <div className='Box' style={{
            backgroundColor: '#007bff',
            padding: '10pt',
            marginBottom: '10pt',
            color: 'white'
        }}>
            <Link to ='/' style={{fontWeight:'bold',color:'white', marginLeft: '2pt', marginRight: '10pt' }}>RISAT</Link>
            <Link to ='/' className='dash'style={{color:'white',width:'170px', marginRight:'10pt'}}>
                Resource Search
        </Link>
            <Link className='dash' to='/resource' style={{color:'white',width:'170px'}}>
                Resource Profile
        </Link>
            <label style={{
                width: '100%',
                textAlign: 'right',
                margin: '0 2.5% 0',

            }}>
                <Link to ='/' style={{color:'white'}} >Logout</Link></label>

        </div>
    )
}
export default Dashboard;