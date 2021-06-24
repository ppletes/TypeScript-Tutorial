abstract class Department {
  static fiscalYear = 2020;
  //name: string; //this or public.name is same... here, name is public by default
  // private readonly id : string;
  // private name: string;
  protected employees: string[] = []; //employees are property that is accessible only inside this class and any other that extends this class

  constructor(protected readonly id: string, public name: string) {
    // this.id=id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    //validation etc
    //this.id='id2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT department - id: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("id2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting department - id: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("id1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu"); 

//throwing error because employees property is private
//accounting.employees[2]='Anna';

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();

//const accounting = new AccountingDepartment("id2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

//console.log(accounting.mostRecentReport); //no report found

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
// accounting.printReports();
// accounting.printEmployeeInformation();
