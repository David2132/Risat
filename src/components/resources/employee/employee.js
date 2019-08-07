import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

class Employee extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employee:{}

        }
    }
    componentDidMount(){
        const employee = this.props.employee;
        this.setState({employee})
    }

    render() {
        const {employee} = this.state
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Update Employee: {employee.name}</ModalHeader >
                <ModalBody>
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