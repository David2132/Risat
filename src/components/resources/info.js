import React from 'react'
import Service from '../../dataService'
import { Table } from 'reactstrap'
import Skill from './skills/skills'
import { Modal } from 'reactstrap'
import Employee from './employee/employee'
import Industry from './industries/industries'
import Certification from './certifications/certifications'

class Info extends React.Component {

    constructor() {
        super();
        this.state = {
            updateEmp: false,
            updateSkill: false,
            updateIndustry: false,
            updateCertification: false,

            skill: null,
            certification: null,
            industry: null,

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
        if (skill === null) {
            this.setState({
                updateSkill
            });
        }
        else {
            this.setState({
                updateSkill,
                skill
            })
        }
    }
    indUpdate(industry) {
        const updateIndustry = true;

        if (industry === null) {
            this.setState({
                updateIndustry
            });
        }
        else {
            this.setState({
                updateIndustry,
                industry
            })
        }
    }
    certUpdate(certification) {
        const updateCertification = true;

        if (certification === null) {
            this.setState({
                updateCertification
            });
        }
        else {
            this.setState({
                updateCertification,
                certification
            })
        }
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

        const { skills, certifications, industries, employee } = this.state.emp
        if (employee.manager !== undefined) {
            manager = employee.manager.name
        }
        return (
            <div id='resource' >
                <Table style={{ textAlign: 'center', width: '80%' }}>
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

                    <Table id='dataTable' >
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
                                    {skill.status === 'NOT APPROVED' ?
                                        <td >
                                            <span title='Manager needs to approve skill!' className='Clickable' onClick={() => this.skillUpdate(skill)}>
                                                <b style={{ color: 'red' }}>*</b>{skill.skill.name}
                                            </span>
                                        </td> :
                                        <td>
                                            <span className='Clickable' onClick={() => this.skillUpdate(skill)}>
                                                {skill.skill.name}
                                            </span>
                                        </td>

                                    }
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

                    <Table id='dataTable' >
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
                                        <span className='Clickable' onClick={() => this.certUpdate(certification)}>
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

                    <Table id='dataTable' >
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
                            {industries.map(industry => (
                                <tr key={industry.industry.id}>
                                    <td>
                                        <span className='Clickable' onClick={() => this.indUpdate(industry)}>
                                            {industry.industry.name}
                                        </span>
                                    </td>

                                    <td>
                                        {industry.years}
                                    </td>

                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </Table>
                </span>

                <Modal isOpen={this.state.updateEmp} toggle={this.toggle}>
                    <Employee employee={employee} toggle={this.toggle} />
                </Modal>

                <Modal isOpen={this.state.updateCertification} toggle={this.toggle}>
                    <Certification certification = {this.state.certification} toggle={this.toggle} />
                </Modal>
                <Modal isOpen={this.state.updateSkill} toggle={this.toggle}>
                    <Skill skill = {this.state.skill} toggle={this.toggle} />
                </Modal>

                <Modal isOpen={this.state.updateIndustry} toggle={this.toggle}>
                    <Industry industry = {this.state.industry} toggle={this.toggle} />
                </Modal>


            </div>
        )
    }
}
export default Info