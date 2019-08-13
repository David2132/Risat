import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';
import dataService from './../../../dataService';

import './../../../index.css';

class Skill extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            skill: {},
            level: '',
            years: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const skill = this.props.skill;
        if(skill.skill)
            this.setState({
                isEdit: true,
                skill: skill.skill,
                level: skill.level,
                years: skill.years,
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
            let submit = this.props.skill;
            submit.level = this.state.level;
            submit.years = this.state.years;
            submit.value = (submitDate.getMonth() + 1) + '/' + submitDate.getDate() + '/' + submitDate.getFullYear();
            dataService.editSkill(submit);
        } else {
            let submit = {
                count: 0,
                employee: this.props.employee,
                level: this.state.level,
                skill: {
                    category: {
                        count: 0,
                        id: 0,
                        name: "N/A"
                    },
                    count: 0,
                    id: this.state.skill.id,
                    name: this.state.skill.name
                },
                status: "NOT APPROVED",
                value: (submitDate.getMonth() + 1) + '/' + submitDate.getDate() + '/' + submitDate.getFullYear(),
                years: this.state.years
            }
            dataService.addSkill(submit);
        }
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle} > Skills: </ModalHeader >
                    <ModalBody>
                        <label htmlFor="skill"><b>Skill </b></label>
                        <div className="select-wrapper">
                        <Select
                            id="skill"
                            value={{value: this.state.skill.id, label: this.state.skill.name}}
                            placeholder="select a skill"
                            isDisabled={this.state.isEdit}
                            required
                            onChange={opt => this.handleChange({target:{id:'skill', value: {id: opt.value, name: opt.label}}})}
                            options={[
                                {value: 1, label: "one"},
                                {value: 2, label: "two"}
                            ]}/>
                        </div>

                        <br></br>
                        <label htmlFor="level"><b>Level </b></label>
                        <div className="select-wrapper">
                        <Select
                            id="level"
                            value={{value: this.state.level, label: this.state.level}}
                            placeholder="Select a level"
                            required
                            onChange={opt => this.handleChange({target:{id:'level', value: opt.value}})}
                            options={[
                                {value: "EXPERIENCED", label: "EXPERIENCED"},
                                {value: "TRAINED", label: "TRAINED"},
                                {value: "CERTIFIED", label: "CERTIFIED"}
                            ]}
                            />
                        </div>

                        <br></br>
                        <label htmlFor="years"><b>Years </b></label>
                        <input
                            id="years"
                            defaultValue={this.state.years}
                            onChange={this.handleChange}
                            required>
                        </input>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">Save</Button>
                        {this.state.isEdit ? <Button color="danger"> Delete</Button> : null }
                        <Button type="button" color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </form>
            </div>
        )
    }
}
export default Skill