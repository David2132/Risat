import React from 'react'
import Dashboard from '../dashboard'
import dataService from '../../dataService'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: {},
            loading: true
        };
    }
    componentDidMount() {
        const employee = dataService.getEmp().employee;
        const loading = false;
        this.setState({
            employee,
            loading
        })
    }
    render() {
        const { employee, loading } = this.state
        if (loading) {
            return <div></div>
        }
        return (
            <div >
                <Dashboard />
                <h4 style = {{width:'95%', padding:'0 2.5% 10pt 2.5%'}}>
                    Resource Informatics Searching and Administration Tool
                </h4>
                <div style = {{width:'95%', padding:'0 2.5% 10pt 2.5%'}}>
                    Welcome <b>{employee.name}</b>!
                </div>
                <div style = {{width:'95%', padding:'0 2.5% 0 2.5%'}}>
                    RISAT is a tool that allows IBM employees to search for resources with specific skills, certifications, and experience in industries.
                    The tool has the capability to upload the RCM report to provide additional resource statistics. Blue Page Managers have the capability of reviewing their resources profiles, editing their profiles, and approving their skills.
                </div>
            </div>
        )
    }
}
export default Home