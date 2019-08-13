import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'

import './../../../index.css';

class BandsTable extends React.Component {
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
                    <ModalHeader toggle={this.props.toggle} > Resource Bands: {this.props.tableKey} </ModalHeader >
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
                                        Band
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
                                            {emp.hrBand}
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
export default BandsTable