import React from 'react'
import Service from '../../dataService'
import { Table } from 'reactstrap'

class resource extends React.Component {

    constructor() {
        super();
        this.state = {
            updateEmp: false,
            updateSkill: false,
            updateIndustry: false,
            updateCertification: false,
            emp: {
                certifation: [],
                employee: {},
                employees: [],
                industries: [],
                message: "",
                skills: [],
                status: ""
            }
        }
        this.empUpdate = this.empUpdate.bind(this)
        this.skillUpdate = this.skillUpdate.bind(this)
        this.indUpdate = this.indUpdate.bind(this)
        this.certUpdate = this.certUpdate.bind(this)

    }
    componentDidMount() {
        // Service.getEmp().then(resp => {
        //     this.setState(resp);
        // });

    }
    empUpdate() {
        const updateEmp = true;

        this.setState({
            updateEmp
        });
    }
    skillUpdate() {
        const updateSkill = true;

        this.setState({
            updateSkill
        });
    }
    indUpdate() {
        const updateIndustry = true;

        this.setState({
            updateIndustry
        });
    }
    certUpdate() {
        const updateCertification = true;

        this.setState({
            updateCertification
        });
    }

    render() {
        const { skills, certifation, industries, employee, employees } = this.state.emp
        return (
            <div>
                <span>
                    {/* Name: <text className='Clickable' onClick={this.empUpdate}>{employee.name} </text>
                    Serial #: {employee.serialNo}
                    Band: {employee.hrBand}
                    JRSS: {}
                    Status: {employee.status}
                    Availabiltiy: {employee.availability} 
                    Bench Days: {employee.daysInBench} 
                    Manager: {employee.manager.name} */}
                </span>

                <span>
                    <text style ={{fontWeight:'bold', fontSize:'22pt'}}>
                        Skills
                    </text>

                    <Table>
                        <thead style={{ fontWeight: 'bold' }}>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Level
                                </td>
                                <td>
                                    Years
                                </td>
                                <td>
                                    Last Updated
                                </td>
                            </tr>
                        </thead>

                    </Table>
                </span>
            </div>
        )
    }
}
export default resource