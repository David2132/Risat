import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import dataService from './../../../dataService';

import './../../../index.css';
import "react-datepicker/dist/react-datepicker.css";

class Certification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            certBadge: {},
            startDate: new Date(),
            endDate: undefined
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const certification = this.props.certification;
        if(certification.certBadge)
            this.setState({
                isEdit: true,
                certBadge: certification.certBadge,
                startDate: new Date(certification.startDate),
            })
        if(certification.endDate)
        this.setState({
            endDate: new Date(certification.endDate),
        })
    }

    handleChange(e) {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        })
    }

    // we store locally then prepare a submit object with the corresponding new data
    handleSubmit(e) {
        e.preventDefault();
        const submitDate = new Date();
        if(this.state.isEdit) {
            let submit = this.props.certification;
            submit.certBadge = this.state.certBadge;
            submit.startDate = (this.state.startDate.getMonth() + 1) + '/' + this.state.startDate.getDate() + '/' + this.state.startDate.getFullYear();
            if(this.state.endDate)
                submit.endDate = (this.state.endDate.getMonth() + 1) + '/' + this.state.endDate.getDate() + '/' + this.state.endDate.getFullYear();
            submit.value = (submitDate.getMonth() + 1) + '/' + submitDate.getDate() + '/' + submitDate.getFullYear();
            dataService.editCertification(submit);
        } else {
            let submit = {
                count: 0,
                employee: this.props.employee,
                certBadge: {
                    count: 0,
                    id: this.state.certBadge.id,
                    name: this.state.certBadge.name
                },
                value: (submitDate.getMonth() + 1) + '/' + submitDate.getDate() + '/' + submitDate.getFullYear(),
                startDate: (this.state.startDate.getMonth() + 1) + '/' + this.state.startDate.getDate() + '/' + this.state.startDate.getFullYear(),
                endDate: this.state.endDate
            }
            if(submit.endDate)
                submit.endDate = (this.state.endDate.getMonth() + 1) + '/' + this.state.endDate.getDate() + '/' + this.state.endDate.getFullYear();
            dataService.addCertification(submit);
        }
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle} > Certifcations/Badges: </ModalHeader >
                    <ModalBody>
                        <label htmlFor="certBadge"><b>Certification / Badge </b></label> 
                        <div className="select-wrapper">
                            <Select
                                id="certBadge"
                                placeholder="select a certification/badge"
                                value={{value: this.state.certBadge.id, label: this.state.certBadge.name}}
                                isDisabled={this.state.isEdit}
                                required
                                onChange={opt => this.handleChange({target:{id:'certBadge', value: {id: opt.value, name: opt.label}}})}
                                options={[
                                    {value: 1, label: "one"},
                                    {value: 2, label: "two"}
                                ]}/>
                        </div>

                        <br></br>
                        <label htmlFor="startDate"><b>Start Date </b></label> 
                        <DatePicker
                            id="startDate"
                            selected={this.state.startDate}
                            onChange={date => this.handleChange({target: {id:"startDate", value: date}})}
                        />

                        <br></br>
                        <label htmlFor="endDate"><b>End Date </b></label> 
                        <DatePicker
                            id="endDate"
                            selected={this.state.endDate}
                            onChange={date => this.handleChange({target: {id:"endDate", value: date}})}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Save</Button>
                        <Button color="danger"> Delete</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </form>
            </div>
        )
    }
}
export default Certification