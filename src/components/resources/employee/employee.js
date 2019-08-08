import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import dataService from './../../../dataService';

import './../../../index.css';
import "react-datepicker/dist/react-datepicker.css";

class Employee extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            serialNo: '',
            hrBand: '',
            manager: {},
            gdCenter: {},
            serviceLine: {},
            availability: new Date(),
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const employee = this.props.employee;
        console.log(this.props.employee)
        if(employee)
            this.setState({
                name: employee.name,
                email: employee.email,
                serialNo: employee.serialNo,
                hrBand: employee.hrBand,
                manager: employee.manager,
                gdCenter: employee.gdCenter,
                serviceLine: employee.serviceLine,
                availability: new Date(employee.availability),
            })
    }

    handleChange(e) {
        const {id, value} = e.target
        this.setState({
            [id]: value
        })
    }

    // we store locally then prepare a submit object with the corresponding new data
    handleSubmit(e) {
        e.preventDefault();
        
        let submit = this.props.employee;
        submit.name = this.state.name;
        submit.email = this.state.email;
        submit.serialNo = this.state.serialNo;
        submit.hrBand = this.state.hrBand;
        submit.manager = this.state.manager;
        submit.gdCenter = this.state.gdCenter;
        submit.serviceLine = this.state.serviceLine;
        submit.availability = (this.state.availability.getMonth() + 1) + '/' + this.state.availability.getDate() + '/' + this.state.availability.getFullYear();
        
        dataService.editEmployee(submit);
        
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle} > Update Employee: {this.state.name}</ModalHeader >
                    <ModalBody>
                        <label htmlFor="name"><b>Name </b></label> 
                        <input
                            id="name"
                            value={this.state.name}
                            required
                            onChange={this.handleChange}>
                        </input>
                        
                        <br></br>
                        <label htmlFor="email"><b>Email </b></label>
                        <input
                            id="email"
                            value={this.state.email}
                            type="email"
                            required
                            onChange={this.handleChange}>
                        </input>

                        <br></br>
                        <label htmlFor="serialNo"><b>Serial </b></label> 
                        <input
                            id="serialNo"
                            value={this.state.serialNo}
                            required
                            onChange={this.handleChange}>
                        </input>

                        <br></br>
                        <label htmlFor="hrBand"><b>Band </b></label> 
                        <input
                            id="hrBand"
                            value={this.state.hrBand}
                            required
                            onChange={this.handleChange}>
                        </input>

                        <br></br>
                        <label htmlFor="manager"><b>Manager </b></label>
                        <div className="select-wrapper">
                            <Select
                                id="manager"
                                value={{value: this.state.manager.id, label: this.state.manager.name}}
                                placeholder="select a manager"
                                required
                                onChange={opt => this.handleChange({target:{id:'manager', value: {id: opt.value, name: opt.label}}})}
                                options={[
                                    {value: 88, label: "Jefferey Smith"},
                                    {value: 2, label: "two"}
                                ]}/>
                        </div>

                        <br></br>
                        <label htmlFor="gdCenter"><b>GD Center </b></label>
                        <div className="select-wrapper">
                            <Select
                                id="gdCenter"
                                value={{value: this.state.gdCenter.id, label: this.state.gdCenter.name}}
                                placeholder="select a GD Center"
                                required 
                                onChange={opt => this.handleChange({target:{id:'gdCenter', value: {id: opt.value, name: opt.label}}})}
                                options={[
                                    {value: 1, label: "Baton Rouge"},
                                    {value: 2, label: "two"}
                                ]}/>
                        </div>

                        <br></br>
                        <label htmlFor="serviceLine"><b>Service Line </b></label>
                        <div className="select-wrapper">
                            <Select
                                id="serviceLine"
                                value={{value: this.state.serviceLine.id, label: this.state.serviceLine.name}}
                                placeholder="select a service line"
                                required
                                onChange={opt => this.handleChange({target:{id:'serviceLine', value: {id: opt.value, name: opt.label}}})}
                                options={[
                                    {value: 1, label: "CAI-DIG"},
                                    {value: 2, label: "two"}
                                ]}/>
                        </div>

                        <br></br>
                        <label htmlFor="availability"><b>Availability Date </b></label>
                        <DatePicker
                            id="availability"
                            value={this.state.availability}
                            selected={this.state.availability}
                            onChange={date => this.handleChange({target: {id:"availability", value: date}})}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit">Save</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </form>
            </div>
        )
    }
}
export default Employee