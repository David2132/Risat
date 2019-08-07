import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

class Certification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            certification:{}
        }
    }
    componentDidMount(){
        const certification = this.props.certification;
        this.setState = {
            certification
        }
    }

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle} > Certifcations/Badges: </ModalHeader >
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
export default Certification