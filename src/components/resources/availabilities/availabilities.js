import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'

import './../../../index.css';

class AvailabilitiesTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees: []
        }
   }
    componentDidMount(){
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle} > Resource Availability: {this.props.tableKey} </ModalHeader >
                    <ModalBody>
                    <Table>
                        <thead style={{ fontWeight: 'bold' }}>
                            <tr>
                                <td>
                                    #
                                </td>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Manager
                                </td>
                                <td>
                                    Availability
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.employeeTable.map((emp, index) => (
                                <tr key={index + 1}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {emp.name}
                                    </td>
                                    <td>
                                        {emp.manager.name}
                                    </td>
                                    <td>
                                        {emp.availability}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </form>
            </div>
        )
    }
}
export default AvailabilitiesTable