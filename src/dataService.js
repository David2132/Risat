import DummyData from './dummyData'

class dataService {
    getEmp(){
        return DummyData.employee;
    }

    addCertification(certBadge){
        // find employee by id and append a industry to their industry array
        DummyData.employee.certifications.push(certBadge);
    }

    editCertification(toReplace) {
        // find employee by id and then replace a skill at the corresponding id
        const editIndex = DummyData.employee.certifications.findIndex(certBadge => certBadge.certBadge.id === toReplace.certBadge.id);
        DummyData.employee.certifications[editIndex] = toReplace;
    }

    editEmployee(toReplace) {
        DummyData.employee = toReplace;
    }

    addSkill(skill){
        // find employee by id and append a skill to their skill array
        DummyData.employee.skills.push(skill);
    }

    editSkill(toReplace) {
        // find employee by id and then replace a skill at the corresponding id
        const editIndex = DummyData.employee.skills.findIndex(skill => skill.skill.id === toReplace.skill.id);
        DummyData.employee.skills[editIndex] = toReplace;
    }

    addIndustry(industry){
        // find employee by id and append a industry to their industry array
        DummyData.employee.industries.push(industry);
    }

    editIndustry(toReplace) {
        // find employee by id and then replace a skill at the corresponding id
        const editIndex = DummyData.employee.industries.findIndex(industry => industry.industry.id === toReplace.industry.id);
        DummyData.employee.industries[editIndex] = toReplace;
    }
}
export default new dataService()