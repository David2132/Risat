import DummyData from './dummyData'

class Service {
    getEmp(){
        return DummyData.employee;
    }

}
export default new Service()