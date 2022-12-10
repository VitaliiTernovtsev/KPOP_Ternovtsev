var Category;
(function (Category) {
    Category[Category["Business analyst"] = 0] = "Business analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum master"] = 4] = "Scrum master";
})(Category || (Category = {}));
console.log("Task 1\n");
function getAllworkers() {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category["Business analyst"] },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function logFirstAvailable(workers = getAllworkers()) {
    let count = workers.length;
    for (const i of workers) {
        if (i.available)
            console.log(`${i.name} ${i.surname}`);
    }
    console.log(`\nКількість робітників в масиві: ${count}`);
}
logFirstAvailable();
console.log("\n\nTask 2\n");
function getWorkersNamesByCategory(category = Category.Designer) {
    let workersNamesByCategory = [];
    getAllworkers().forEach(worker => {
        if (worker.category == category)
            workersNamesByCategory.push(worker.surname);
    });
    return workersNamesByCategory;
}
function logWorkersNames(array = getWorkersNamesByCategory(Category.QA)) {
    console.log(array);
}
logWorkersNames();
console.log("\n\nTask 3\n");
getAllworkers().forEach(worker => {
    if (worker.category == Category.Developer)
        console.log(`${worker.name} ${worker.surname}`);
});
function getWorkerByID(id) {
    let worker = getAllworkers().find(worker => {
        return worker.id == id;
    });
    if (!worker)
        return null;
    return { name: worker.name, surname: worker.surname, salary: worker.salary, available: worker.available };
}
console.log(getWorkerByID(4));
console.log("\n\nTask 4\n");
const createCustomerID = (name, id) => {
    return name.concat(" ", id.toString());
};
let myID = createCustomerID("Ann", 10);
console.log(myID);
let IdGenerator = createCustomerID;
console.log(IdGenerator("Oleg", 21));
console.log("\n\nTask 5\n");
function createCustomer(name, age, city) {
    console.log(`${name} ${age ? age : ""} ${city ? city : ""}`);
}
createCustomer("Ivan");
createCustomer("Ivan", 25);
createCustomer("Ivan", 25, "Kyiv");
console.log(getWorkersNamesByCategory());
logFirstAvailable();
function сheckoutWorkers(customer, ...workerIDs) {
    let checkout = [];
    workerIDs.forEach(id => {
        let worker = getWorkerByID(id);
        if (worker === null || worker === void 0 ? void 0 : worker.available) {
            checkout.push(worker.surname);
        }
    });
    console.log(`Замовник - ${customer}`);
    return checkout;
}
let myWorkers = сheckoutWorkers("Ann", 1, 2, 4);
myWorkers.forEach(worker => {
    console.log(worker);
});
