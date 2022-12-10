enum Category {
    "Business analyst",
    "Developer",
    "Designer",
    "QA",
    "Scrum master"
}

console.log("Task 1.1\n");

function getAllworkers(): IWorker[] {
    let workers: IWorker[] = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category["Business analyst"] },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
    ];
    return workers;
}

function logFirstAvailable(workers = getAllworkers()): void {
    let count: number = workers.length;
    for (const i of workers) {
        if (i.available)
            console.log(`${i.name} ${i.surname}`);
    }
    console.log(`\nКількість робітників в масиві: ${count}`);
}

logFirstAvailable();

console.log("\n\nTask 1.2\n");

function getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
    let workersNamesByCategory: Array<string> = [];

    getAllworkers().forEach(worker => {
        if (worker.category == category)
            workersNamesByCategory.push(worker.surname);
    });

    return workersNamesByCategory;
}

function logWorkersNames(array: string[] = getWorkersNamesByCategory(Category.QA)): void {
    console.log(array);
}

logWorkersNames()

console.log("\n\nTask 1.3\n");

getAllworkers().forEach(worker => {
    if (worker.category == Category.Developer)
        console.log(`${worker.name} ${worker.surname}`);
});

function getWorkerByID(id: number): IWorker | undefined {
    let worker = getAllworkers().find(worker => {
        return worker.id == id;
    });

    if (!worker) return undefined;
    return { id: worker.id, name: worker.name, surname: worker.surname, salary: worker.salary, available: worker.available, category: worker.category };
}

console.log(getWorkerByID(4));

console.log("\n\nTask 1.4\n");

const createCustomerID = (name: string, id: number) => {
    return name.concat(" ", id.toString());
}

let myID: string = createCustomerID("Ann", 10);
console.log(myID);

let IdGenerator = createCustomerID;
console.log(IdGenerator("Oleg", 21));

console.log("\n\nTask 1.5\n");

function createCustomer(name: string, age?: number, city?: string) {
    console.log(`${name} ${age ? age : ""} ${city ? city : ""}`);
}

createCustomer("Ivan");
createCustomer("Ivan", 25);
createCustomer("Ivan", 25, "Kyiv");

console.log(getWorkersNamesByCategory());

logFirstAvailable();

function сheckoutWorkers(customer: string, ...workerIDs: number[]): Array<string> {
    let checkout: Array<string> = [];
    workerIDs.forEach(id => {
        let worker = getWorkerByID(id);
        if (worker?.available) {
            checkout.push(worker.surname);
        }
    });
    console.log(`Замовник - ${customer}`);
    return checkout;
}

let myWorkers = сheckoutWorkers("Ann", 1, 2, 4);
myWorkers.forEach(worker => {
    console.log(worker);
})