import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

class Industry extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        const industry = this.props.industry;
        this.setState = {
            industry
        }
    }

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Industries: </ModalHeader >
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
export default Industry