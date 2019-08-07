import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';
import DatePicker from 'react-datepicker';

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
    }

    componentDidMount(){
        const certification = this.props.certification;
        console.log(certification)
        if(certification.certBadge)
            this.setState({
                isEdit: true,
                certBadge: certification.certBadge,
                startDate: new Date(certification.startDate),
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
                <ModalHeader toggle={this.props.toggle} > Certifcations/Badges: </ModalHeader >
                <ModalBody>
                    <form>
                        <label htmlFor="certBadge"><b>Certification / Badge </b></label> 
                        <div className="select-wrapper">
                            <Select
                                id="certBadge"
                                placeholder="select a certification/badge"
                                value={{value: this.state.certBadge.id, label: this.state.certBadge.name}}
                                isDisabled={this.state.isEdit}
                                required
                                onChange={opt => this.handleChange({target:{id:'certBadge', value: opt.value}})}
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
                            onChange={this.handleChange}
                        />

                        <br></br>
                        <label htmlFor="endDate"><b>End Date </b></label> 
                        <DatePicker
                            id="endDate"
                            selected={this.state.endDate}
                            onChange={this.handleChange}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>

                    <Button color="primary">Save</Button>
                    <Button color="danger"> Delete</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </div>
        )
    }
}
export default Certification