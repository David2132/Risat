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
    
    getAvailabilityCount() {
        let Availability = {};
        // we assume our primary employee is only manager atm
        Availability[DummyData.employee.employee.status] = (Availability[DummyData.employee.employee.status] || 0) + 1;
        for(let underEmp of DummyData.employee.employee.employees) {
            Availability[underEmp.employee.status] = (Availability[underEmp.employee.status] || 0) + 1;
        }
        let retData = [];
        for(let status in Availability) {
            retData.push({
                title: status,
                value: Availability[status],
                color: '#'+Math.random().toString(16).substr(-6) // clever implementation from stack overflow
            })
        }
        return retData;
    }

    getAvailabilityList(catagory) {
        let retData = [];
        if(DummyData.employee.employee.status === catagory) {
            retData.push({name: DummyData.employee.employee.name, manager: DummyData.employee.employee.manager, availability: DummyData.employee.employee.availability})
        }
        for(let underEmp of DummyData.employee.employee.employees) {
            if(underEmp.employee.status === catagory) {
                retData.push({name: underEmp.employee.name, manager: underEmp.employee.manager, availability: underEmp.employee.availability})
            }
        }
        return retData;
    }

    getBandsCount() {
        let bands = {};
        // we assume our primary employee is only manager atm
        bands[DummyData.employee.employee.hrBand] = (bands[DummyData.employee.employee.hrBand] || 0) + 1;
        for(let underEmp of DummyData.employee.employee.employees) {
            bands[underEmp.employee.hrBand] = (bands[underEmp.employee.hrBand] || 0) + 1;
        }
        let retData = [];
        for(let band in bands) {
            retData.push({
                title: band,
                value: bands[band],
                color: '#'+Math.random().toString(16).substr(-6) // clever implementation from stack overflow
            })
        }
        return retData;
    }

    getBandList(catagory) {
        let retData = [];
        if(DummyData.employee.employee.hrBand === catagory) {
            retData.push({name: DummyData.employee.employee.name, manager: DummyData.employee.employee.manager, hrBand: DummyData.employee.employee.hrBand})
        }
        for(let underEmp of DummyData.employee.employee.employees) {
            if(underEmp.employee.hrBand === catagory) {
                retData.push({name: underEmp.employee.name, manager: underEmp.employee.manager, hrBand: underEmp.employee.hrBand})
            }
        }
        return retData;
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