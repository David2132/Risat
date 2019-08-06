import React from 'react'
import Service from '../../dataService'
import { Table } from 'reactstrap'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'


class resource extends React.Component {

    constructor() {
        super();
        this.state = {
            updateEmp: false,
            updateSkill: false,
            updateIndustry: false,
            updateCertification: false,
            emp: {
                certifications: [],
                employee: {},
                employees: [],
                industries: [],
                message: "",
                skills: [],
                status: ""
            }
        }
        this.empUpdate = this.empUpdate.bind(this);
        this.skillUpdate = this.skillUpdate.bind(this);
        this.indUpdate = this.indUpdate.bind(this);
        this.certUpdate = this.certUpdate.bind(this);
        this.toggle = this.toggle.bind(this);

    }
    componentDidMount() {
        // Service.getEmp().then(resp => {
        //    console.log(resp)
        // });
        const emp = Service.getEmp()
        this.setState({
            emp
        })

    }
    empUpdate() {
        const updateEmp = true;

        this.setState({
            updateEmp
        });
    }
    skillUpdate(skill) {
        const updateSkill = true;

        this.setState({
            updateSkill
        });
    }
    indUpdate(ind) {
        const updateIndustry = true;

        this.setState({
            updateIndustry
        });
    }
    certUpdate(cert) {
        const updateCertification = true;

        this.setState({
            updateCertification
        });
    }
    toggle() {
        if (this.state.updateEmp) {
            const updateEmp = false;
            this.setState({
                updateEmp
            })

        }
        if (this.state.updateCertification) {
            const updateCertification = false;
            this.setState({
                updateCertification
            })

        }
        if (this.state.updateSkill) {
            const updateSkill = false;
            this.setState({
                updateSkill
            })

        }
        if (this.state.updateIndustry) {
            const updateIndustry = false;
            this.setState({
                updateIndustry
            })

        }
    }

    render() {
        var manager = '';

        const { skills, certifications, industries, employee, employees } = this.state.emp
        if (employee.manager !== undefined) {
            manager = employee.manager.name
        }
        console.log(this.state.emp)
        return (
            <div id='resource' >
                <Table style={{ width: '80%', textAlign: 'center' }}>
                    <tbody>
                        <tr>
                            <td>
                                <b>Name:</b> <span className='Clickable' onClick={this.empUpdate}>{employee.name} </span>
                            </td>
                            <td>
                                <b>Serial #:</b> {employee.serialNo}
                            </td>
                            <td>
                                <b>Band:</b> {employee.hrBand}
                            </td>
                            <td>
                                <b>JRSS:</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Status:</b> {employee.status}
                            </td>
                            <td>
                                <b>Availabiltiy:</b> {employee.availability}
                            </td>
                            <td>
                                <b>Bench Days:</b> {employee.daysInBench}

                            </td>
                            <td>
                                <b>Manager: </b> {manager}
                            </td>
                        </tr>
                    </tbody>
                </Table>


                <span>
                    <div style={{ fontWeight: 'bold', fontSize: '22pt', marginLeft: '10pt' }}>
                        Skills <span className='Clickable' onClick={this.skillUpdate}>+</span>
                    </div>

                    <Table id='dataTable' style={{ width: '80%' }}>
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
                        <tbody>
                            {skills.map(skill => (
                                <tr key={skill.skill.id}>
                                    <td>
                                        <span className='Clickable' onClick={()=>this.skillUpdate(skill)}>
                                            {skill.skill.name}
                                        </span>
                                    </td>
                                    <td>
                                        {skill.level}
                                    </td>
                                    <td>
                                        {skill.years}
                                    </td>
                                    <td>
                                        {skill.value}
                                    </td>
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </Table>
                </span>

                <span>
                    <div style={{ fontWeight: 'bold', fontSize: '22pt', marginLeft: '10pt' }}>
                        Certifications / Badges <span className='Clickable' onClick={this.certUpdate}>+</span>
                    </div>

                    <Table id='dataTable' style={{ width: '80%' }}>
                        <thead style={{ fontWeight: 'bold' }}>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Start Date
                                </td>
                                <td>
                                    End Date
                                </td>
                                <td>
                                    Last Updated
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map(certification => (
                                <tr key={certification.certBadge.id}>
                                    <td>
                                        <span className='Clickable'  onClick={()=>this.certUpdate(certification)}>
                                            {certification.certBadge.name}
                                        </span>
                                    </td>
                                    <td>
                                        {certification.startDate}
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        {certification.value}
                                    </td>
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </Table>
                </span>

                <span >
                    <div style={{ fontWeight: 'bold', fontSize: '22pt', marginLeft: '10pt' }}>
                        Industries <span className='Clickable' onClick={this.indUpdate}>+</span>
                    </div>

                    <Table id='dataTable' style={{ width: '80%' }}>
                        <thead style={{ fontWeight: 'bold' }}>
                            <tr>
                                <td>
                                    Name
                               </td>
                                <td>
                                    Years
                                </td>

                            </tr>
                        </thead>
                        <tbody>
                            {industries.map(skill => (
                                <tr key={skill.skill.id}>
                                    <td>
                                        <span className='Clickable'  onClick={()=>this.indUpdate(skill)}>
                                            {skill.skill.name}
                                        </span>
                                    </td>

                                    <td>
                                        {skill.years}
                                    </td>

                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </Table>
                </span>

                <Modal isOpen={this.state.updateEmp} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Employee: {employee.name}</ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>

                        <Button color="primary">Save</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.updateCertification} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Certifations/Badges: </ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>

                        <Button color="primary">Save</Button>
                        <Button color="danger"> Delete</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.updateSkill} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Skills: </ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>

                        <Button color="primary">Save</Button>
                        <Button color="danger"> Delete</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.updateIndustry} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Industries: </ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Save</Button>
                        <Button color="danger"> Delete</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>


            </div>
        )
    }
}
export default resource