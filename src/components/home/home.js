import React from 'react'
import Dashboard from '../dashboard'
import dataService from '../../dataService'
import { Table, Button, Modal } from 'reactstrap'
import PieChart from 'react-minimal-pie-chart'
import AvailabilitiesTable from './../resources/availabilities/availabilities'
import BandsTable from './../resources/bands/bands'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: {},
            approveList: [],
            declineList: [],
            loading: true,
            tableKey: "",
            employeeTable: [],
            availabilityPieData: dataService.getAvailabilityCount(),
            bandPieData: dataService.getBandsCount(),
            showAvailability: false,
            showBands: false,
            loading: true,
        };

        this.toggle = this.toggle.bind(this);
        this.bandsTable = this.bandsTable.bind(this);
        this.availabilitiesTable = this.availabilitiesTable.bind(this);
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

    availabilitiesTable(event, propsData, index) {
        this.setState({
            showAvailability: true,
            tableKey: propsData[index].title,
            employeeTable: dataService.getAvailabilityList(propsData[index].title)
        })
    }

    bandsTable(event, propsData, index) {
        this.setState({
            showBands: true,
            tableKey: propsData[index].title,
            employeeTable: dataService.getBandList(propsData[index].title)
        })
    }

    toggle() {
        if (this.state.showAvailability) {
            this.setState({
                showAvailability: false
            })

        }
        if (this.state.showBands) {
            this.setState({
                showBands: false
            })
        }
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
                
                <label style={{width:'45%', float: 'left'}}>
                    <b>Resource Availability:</b>
                </label>
                <label style={{width:'45%', float: 'right'}}>
                    <b>Resource Band Mix:</b>
                </label>
                <PieChart
                    data={this.state.availabilityPieData}
                    style={{height:'250px', width:'50%', float: 'left'}}
                    label={({ data, dataIndex }) => Math.round(data[dataIndex].percentage) + '%'}
                    labelStyle={{
                        fill: '#121212'
                    }}
                    onClick={this.availabilitiesTable}
                />
                <PieChart
                    data={this.state.bandPieData}
                    style={{height:'250px', width:'50%', float: 'right'}}
                    label={({ data, dataIndex }) => Math.round(data[dataIndex].percentage) + '%'}
                    labelStyle={{
                        fill: '#121212'
                    }}
                    onClick={this.bandsTable}
                />
                <label style={{width:'50%', textAlign:'center', float: 'left', margin:'0 0 0 0'}}>
                    {Object.values(this.state.availabilityPieData).map(({title, value, color}, index) => <b key={index} style={{color:color}}>{title} </b>)}
                </label>
                <label style={{width:'50%', textAlign:'center', float: 'right', margin:'0 0 0 0'}}>
                    {Object.values(this.state.bandPieData).map(({title, value, color}, index) => <b key={index} style={{color:color}}>{title} </b>)}
                </label>
                
                <h4 style = {{width:'100%', padding:'200px 2.5% 0 2.5%'}}>
                    Pending Approvals
                </h4>
                <Table id='dataTable' style={{width:'90%'}}>
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
                <Modal isOpen={this.state.showAvailability} toggle={this.toggle}>
                    <AvailabilitiesTable tableKey={this.state.tableKey} employeeTable={this.state.employeeTable} toggle={this.toggle} />
                </Modal>
                <Modal isOpen={this.state.showBands} toggle={this.toggle}>
                    <BandsTable tableKey={this.state.tableKey} employeeTable={this.state.employeeTable} toggle={this.toggle} />
                </Modal>
            </div>
        )
    }
}
export default Home