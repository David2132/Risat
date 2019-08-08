import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';
import dataService from './../../../dataService';

import './../../../index.css';

class Industry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            industry: {},
            years: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const industry = this.props.industry;
        if(industry.industry)
            this.setState({
                isEdit: true,
                industry: industry.industry,
                years: industry.years,
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
        const submitDate = new Date();
        if(this.state.isEdit) {
            let submit = this.props.industry;
            submit.industry = this.state.industry;
            submit.years = this.state.years;
            submit.value = (submitDate.getMonth() + 1) + '/' + submitDate.getDate() + '/' + submitDate.getFullYear();
            dataService.editIndustry(submit);
        } else {
            let submit = {
                count: 0,
                employee: this.props.employee,
                industry: {
                    count: 0,
                    id: this.state.industry.id,
                    name: this.state.industry.name
                },
                value: (submitDate.getMonth() + 1) + '/' + submitDate.getDate() + '/' + submitDate.getFullYear(),
                years: this.state.years
            }
            dataService.addIndustry(submit);
        }
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle} > Industries: </ModalHeader >
                    <ModalBody>
                        <label htmlFor="industry"><b>Industry </b></label>
                        <div className="select-wrapper">
                        <Select
                            id="industry"
                            value={{value: this.state.industry.id, label: this.state.industry.name}}
                            placeholder="select an industry"
                            isDisabled={this.state.isEdit}
                            required
                            onChange={opt => this.handleChange({target:{id:'industry', value: {id: opt.value, name: opt.label}}})}
                            options={[
                                {value: 1, label: "one"},
                                {value: 2, label: "two"}
                            ]}/>
                        </div>

                        <br></br>
                        <label htmlFor="years"><b>Years </b></label>
                        <input
                            id="years"
                            defaultValue={this.state.years}
                            required
                            onChange={this.handleChange}>
                        </input>
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
export default Industry