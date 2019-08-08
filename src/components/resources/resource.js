import React from 'react'
import Info from './info'
import dataService from '../../dataService'
import { Button } from 'reactstrap'
import Dashboard from '../dashboard'
class Resource extends React.Component {
    constructor() {
        super();
        this.state = {
            emp: {},
            loading: true
        }
    }
    componentDidMount() {
        // dataService.getEmp().then(resp => {
        //    console.log(resp)
        // });
        const emp = dataService.getEmp();
        const loading = false;
        this.setState({
            emp,
            loading
        })

    }
    render() {
        const { employees, employee } = this.state.emp
        if (this.state.loading) {
            return <div>hello</div>
        }
        return (
            <div>
                <Dashboard />
                <div className="Box">
                    <span style={{ width: '20%' }}>
                        <Button color='primary' style={{ margin: '10pt' }}>Excel sheet</Button>
                        <div style={{
                            width: '80%',
                            padding: '5pt 0pt 5pt 20%',
                            margin: '10pt',
                            fontWeight: 'bold'
                        }}>  <span className='employee'>
                                {employee.name}
                            </span></div>


                    </span>
                    {/* {employees.map(employee => (
                   <div style={{
                        width:'80%', 
                        padding:'5pt 0pt 5pt 20%' ,
                        margin:'10pt', 
                        backgroundColor:'#008080',
                        cursor:'pointer',
                        fontWeight:'bold'
                        }}>
                    </div>
                ))} */}
                    <span style={{ width: '75%' }}>
                        <Info />
                    </span>

                </div>
            </div>
        )

    }
}
export default Resource