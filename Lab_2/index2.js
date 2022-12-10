var Category;
(function (Category) {
    Category[Category["Business analyst"] = 0] = "Business analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum master"] = 4] = "Scrum master";
})(Category || (Category = {}));
console.log("\n\n Task 2.1\n");
function getAllworkers() {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category["Business analyst"] },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
    ];
    return workers;
}
function printWorker(worker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}
printWorker(getAllworkers()[2]);
console.log("\n\n Task 2.2\n");
let logPrize = (text) => {
    console.log(text);
};
logPrize("AAAAAAAAAAAAAAAAAAAA");
console.log("\n\n Task 2.3\n");
let favoriteAuthor = { name: 'Petro', email: 'petropetrov@gmail.com', numBooksPublished: 5 };
// let favoriteLibrarian: Librarian = { name: 'Petro', email: 'petropetrov@gmail.com', department: 'Я не знаю, що тут хочуть', assistCustomer(custName: string): void { console.log(`${this.name} is assisting ${custName}`) } };
console.log(favoriteAuthor);
console.log("\n\n Task 2.4\n");
class UniversityLibrarian {
    constructor(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
        this.assistCustomer = (custName) => {
            console.log(`${this.name} is assisting ${custName}`);
        };
    }
}
let favoriteLibrarian = new UniversityLibrarian('Petro', 'petropetrov@gmail.com', 'Я не знаю, що тут хочуть');
favoriteLibrarian.assistCustomer('Oleg');
console.log("\n\n Task 2.5\n");
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._department = "dpt";
        console.log('Creating a new ReferenceItem...');
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}, department - ${this._department}`);
    }
}
let ref = new ReferenceItem("'A Clockwork Orange'", 1962);
ref.printItem();
ref.publisher = "Anthony Burgess";
console.log(ref.publisher);
console.log("\n\n Task 2.6\n");
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
        console.log('Creating a new Encyclopedia...');
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}
let refBook = new Encyclopedia("'Nausea'", 1938, 1);
refBook.printItem();
