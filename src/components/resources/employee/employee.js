import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';
import DatePicker from 'react-datepicker';

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
            hire: new Date(),
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        const employee = this.props.employee;
        console.log(employee);
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
                // hire: new Date(),
            })
    }

    handleChange(e) {
        const {id, value} = e.target
        this.setState({
            [id]: value
        })
    }

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Update Employee: {this.state.name}</ModalHeader >
                <ModalBody>
                    <form>
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
                                onChange={opt => this.handleChange({target:{id:'manager', value: opt.value}})}
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
                                onChange={opt => this.handleChange({target:{id:'gdCenter', value: opt.value}})}
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
                                onChange={opt => this.handleChange({target:{id:'serviceLine', value: opt.value}})}
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
                            onChange={this.handleChange}
                        />

                        <br></br>
                        <label htmlFor="hire"><b>Hire Date </b></label>
                        <DatePicker
                            id="hire"
                            value={this.state.hire}
                            selected={this.state.hire}
                            onChange={this.handleChange}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>

                    <Button color="primary">Save</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </div>
        )
    }
}
export default Employee