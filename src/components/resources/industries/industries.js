import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';

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

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Industries: </ModalHeader >
                <ModalBody>
                    <form>
                        <label htmlFor="industry"><b>Industry </b></label>
                        <div className="select-wrapper">
                        <Select
                            id="industry"
                            value={{value: this.state.industry.id, label: this.state.industry.name}}
                            placeholder="select an industry"
                            isDisabled={this.state.isEdit}
                            required
                            onChange={opt => this.handleChange({target:{id:'industry', value: opt.value}})}
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
export default Industry