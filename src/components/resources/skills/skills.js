import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

class Skill extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skill: {}
        }
    }
    componentDidMount(){
        const skill = this.props.skill;
        this.setState = {
            skill
        }
    }

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Skills: </ModalHeader >
                <ModalBody>
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