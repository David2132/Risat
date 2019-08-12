import React from 'react'
import Dashboard from '../dashboard'
import dataService from '../../dataService'
import PieChart from 'react-minimal-pie-chart'
import { Modal } from 'reactstrap'
import AvailabilitiesTable from './../resources/availabilities/availabilities'
import BandsTable from './../resources/bands/bands'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
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
                <label style={{width:'45%', textAlign:'center', float: 'left'}}>
                    {Object.values(this.state.availabilityPieData).map(({title, value, color}, index) => <b key={index} style={{color:color}}>{title} </b>)}
                </label>
                <label style={{width:'45%', textAlign:'center', float: 'right'}}>
                    {Object.values(this.state.bandPieData).map(({title, value, color}, index) => <b key={index} style={{color:color}}>{title} </b>)}
                </label>
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