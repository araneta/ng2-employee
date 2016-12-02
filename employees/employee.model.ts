import { Religion } from "../religion/religion.model";
export class Employee {
	
	username:string;
    firstName: string;
    lastName: string;
    employeeId: string;
    password: string;
    jobTitle: string;
    religion: number;
    placeOfBirth: string;
    employmentType:number;
    lastEducation:string;
    nextRankPromotionDate:string;
    nextSalaryIncreasementDate:string;
    oldEmployeeId:string;    
    maritalStatus:number;
    employmentStatus:number;
    unitOfWork:number;
    rank:string;
    workingTime:string;
    sex:string;
    retirementDate:string;
    startDateCPNS:string;
    startDatePNS:string;
    unitOfWorkDescription:string;
    suffix1:string;
    title1:string;
    title2:string;
    
    id?: number;
    version: number;

	constructor(){
		this.id = 0;
		this.version = 0;
	}
    bind(dict:any){
		this.id = Number(dict.id);
		this.version = Number(dict.version);
		this.username = dict.username;
		this.firstName = dict.firstName;
		this.lastName = dict.lastName;
		this.employeeId = dict.username;
		this.password = dict.password;
		this.jobTitle = dict.jobTitle;		
        this.religion = Number(dict.religion);
        this.placeOfBirth = dict.placeOfBirth;
        this.employmentType = Number(dict.employmentType);
        this.lastEducation = dict.lastEducation;
        this.nextRankPromotionDate = dict.nextRankPromotionDate;
        this.nextSalaryIncreasementDate = dict.nextSalaryIncreasementDate;
        this.oldEmployeeId = dict.oldEmployeeId;
        this.maritalStatus = Number(dict.maritalStatus);
        this.employmentStatus = Number(dict.employmentStatus);        
        this.unitOfWork = Number(dict.unitOfWork);
        this.rank = dict.rank;
        this.workingTime = dict.workingTime;
        this.sex = dict.sex;
        this.retirementDate = dict.retirementDate;
        this.startDateCPNS = dict.startDateCPNS;
        this.startDatePNS = dict.startDatePNS;
        this.unitOfWorkDescription = dict.unitOfWorkDescription;
        this.suffix1 = dict.suffix1;
        this.title1 = dict.title1;
        this.title2 = dict.title2;
        
	}
}
