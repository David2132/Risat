import DummyData from './dummyData'

class dataService {
    getEmp(){
        return DummyData.employee;
    }

    updateSkillApprovals(approveList, declineList) {
        approveList.forEach(approval => {
            DummyData.employee.employee.employees[approval.empIndex].skills[approval.skillIndex].status = "APPROVED";
        })
        declineList.forEach(approval => {
            DummyData.employee.employee.employees[approval.empIndex].skills[approval.skillIndex].status = "DECLINED";
        })
    }

    addCertification(certBadge){
        // find employee by id and append a industry to their industry array
        // could use reccursion here should we need to worry about a find id not being available and it all being local
        if(DummyData.employee.employee.id === certBadge.employee.id) {
            DummyData.employee.certifications.push(certBadge);
        }
        else {
            for(let target of DummyData.employee.employee.employees) {
                if(target.employee.id === certBadge.employee.id) {
                    target.certifications.push(certBadge);
                }
            }
        }
    }

    editCertification(toReplace) {
        // find employee by id and then replace a skill at the corresponding id
    }

    editEmployee(toReplace) {
    }

    addSkill(skill){
        // find employee by id and append a industry to their industry array
        // could use reccursion here should we need to worry about a find id not being available and it all being local
        if(DummyData.employee.employee.id === skill.employee.id) {
            DummyData.employee.skills.push(skill);
        }
        else {
            for(let target of DummyData.employee.employee.employees) {
                if(target.employee.id === skill.employee.id) {
                    target.skills.push(skill);
                }
            }
        }
    }

    editSkill(toReplace) {
        // find employee by id and then replace a skill at the corresponding id
    }

    addIndustry(industry){
        // find employee by id and append a industry to their industry array
        // could use reccursion here should we need to worry about a find id not being available and it all being local
        if(DummyData.employee.employee.id === industry.employee.id) {
            DummyData.employee.industries.push(industry);
        }
        else {
            for(let target of DummyData.employee.employee.employees) {
                if(target.employee.id === industry.employee.id) {
                    target.industries.push(industry);
                }
            }
        }
    }

    editIndustry(toReplace) {
        // find employee by id and then replace a skill at the corresponding id
    }
}
export default new dataService()