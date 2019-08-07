import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select';

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
    }
    componentDidMount(){
        const skill = this.props.skill;
        console.log(skill)
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

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Skills: </ModalHeader >
                <ModalBody>
                    <form>
                        <label htmlFor="skill"><b>Skill </b></label>
                        <div className="select-wrapper">
                        <Select
                            id="skill"
                            value={{value: this.state.skill.id, label: this.state.skill.name}}
                            placeholder="select a skill"
                            isDisabled={this.state.isEdit}
                            required
                            onChange={opt => this.handleChange({target:{id:'skill', value: opt.value}})}
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
export default Skill