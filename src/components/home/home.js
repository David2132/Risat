import React from 'react'
import Dashboard from '../dashboard'
import dataService from '../../dataService'
import { Table, Button } from 'reactstrap'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: {},
            approveList: [],
            declineList: [],
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
    markApprove(target) {
        this.setState({ approveList: [...this.state.approveList, target] });
    }
    markDecline(target) {
        this.setState({ declineList: [...this.state.declineList, target] });
    }
    revertMark(target) {
        this.setState({ approveList: this.state.approveList.filter(approval => (approval.empIndex !== target.empIndex || approval.skillIndex !== target.skillIndex))})
        this.setState({ declineList: this.state.declineList.filter(declinement => (declinement.empIndex !== target.empIndex || declinement.skillIndex !== target.skillIndex))})
    }
    submitMarks() {
        dataService.updateSkillApprovals(this.state.approveList, this.state.declineList);
        this.forceUpdate();
    }
    render() {
        const { employee, loading } = this.state
        if (loading) {
            return <div></div>
        }
        return (
            <div>
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
                
                <br></br>
                <br></br>
                <h4 style = {{width:'95%', padding:'0 2.5% 10pt 2.5%'}}>
                    Pending Approvals
                </h4>
                <Table id='dataTable' >
                    <thead style={{ fontWeight: 'bold' }}>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Band
                            </td>
                            <td>
                                JRSS
                            </td>
                            <td>
                                Manager
                            </td>
                            <td>
                                Skill
                            </td>
                            <td>
                                Skill level
                            </td>
                            <td>
                                Years
                            </td>
                            <td>
                                Status
                            </td>
                            <td>
                                Approved
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employee ? this.state.employee.employees.map((applyingEmployee, empIndex) => (
                            applyingEmployee.skills.map((toApprove, skillIndex) => (
                                <React.Fragment>
                                    {toApprove.status === 'NOT APPROVED' ?
                                        <tr key={{empIndex, skillIndex}}>
                                            <td>
                                                {applyingEmployee.employee.name}
                                            </td> 
                                            <td>
                                                {applyingEmployee.employee.hrBand}
                                            </td>
                                            <td>
                                                JRSS
                                            </td>
                                            <td>
                                                {toApprove.employee.manager.name}
                                            </td>
                                            <td>
                                                {toApprove.skill.name}
                                            </td>
                                            <td>
                                                {toApprove.level}
                                            </td>
                                            <td>
                                                {toApprove.years}
                                            </td>
                                            <td>
                                                PENDING
                                            </td>
                                            <td>
                                                {this.state.approveList.filter(data => (data.empIndex === empIndex && data.skillIndex === skillIndex)).length ?
                                                <Button type="button" color="success" onClick={this.revertMark.bind(this, {empIndex, skillIndex})}>Cancel Approval?</Button> : (
                                                !this.state.declineList.filter(data => (data.empIndex === empIndex && data.skillIndex === skillIndex)).length ? 
                                                <React.Fragment>
                                                    <Button type="button" color="primary" onClick={this.markApprove.bind(this, {empIndex, skillIndex})}>Approve</Button>
                                                    <Button type="button" color="danger" onClick={this.markDecline.bind(this, {empIndex, skillIndex})}>Decline</Button>
                                                </React.Fragment> :
                                                <Button type="button" onClick={this.revertMark.bind(this, {empIndex, skillIndex})}>Cancel Declinement?</Button>)}
                                            </td>
                                        </tr>
                                    :
                                        null
                                    }
                                </React.Fragment>
                            ))
                        ))
                        : null}
                    </tbody>
                </Table>
                <Button type="button" color="primary" onClick={this.submitMarks.bind(this)}>Submit</Button>
            </div>
        )
    }
}
export default Home