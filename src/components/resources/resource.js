import React from 'react'
import Info from './info'
import Service from '../../dataService'
import { Button } from 'reactstrap'
import Dashboard from '../dashboard'
class Resource extends React.Component {
    constructor() {
        super();
        this.state = {
            emp: {},
            loading: true,
            employee: {}
        }
        this.changeEmployee = this.changeEmployee.bind(this);
    }
    componentDidMount() {

        const emp = Service.getEmp();
        const employee = emp;
        const loading = false;
        this.setState({
            emp,
            loading,
            employee
        })

    }
    
    changeEmployee(emp) {
        const employee = emp;
        this.setState({
            ...this.state,
            employee
        })
      
    }
    render() {
        const { employee } = this.state.emp;
        if (this.state.loading) {
            return <div>hello</div>
        }
        const { employees } = this.state.emp.employee
        return (
            <div>
                <Dashboard />
                <div className="Box">
                    <span style={{ width: '20%' }}>
                        <Button color='primary' style={{ margin: '10pt' }}>Excel sheet</Button>
                        <div style={{
                            width: '80%',
                            padding: '5pt 0pt 5pt 20%',
                            margin: '5pt',
                            fontWeight: 'bold'
                        }}>  <span className='employee' onClick={() => this.changeEmployee(this.state.emp)}>
                                {employee.name}
                            </span>

                        </div>

                        {employees.map(emp => (
                            <div key={emp.employee.id} style={{

                                padding: '0pt 0pt 0pt 30%',
                                margin: '5pt',
                            }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => this.changeEmployee(emp)}>
                                    {emp.employee.name}
                                </span>
                            </div>
                        ))}
                    </span>

                    <span style={{ width: '75%' }}>
                        <Info employee={this.state.employee} />
                    </span>

                </div>
            </div>
        )

    }
}
export default Resource