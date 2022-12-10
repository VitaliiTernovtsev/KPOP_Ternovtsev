enum Category {
    "Business analyst",
    "Developer",
    "Designer",
    "QA",
    "Scrum master"
}

interface IWorker {
    id: number,
    name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category,
}

interface IPrizeLogger {
    (item: string): void;
}

console.log("\n\n Task 2.1\n");

function getAllworkers(): IWorker[] {
    let workers: IWorker[] = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category["Business analyst"] },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
    ];
    return workers;
}

function printWorker(worker: IWorker): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

printWorker(getAllworkers()[2]);

console.log("\n\n Task 2.2\n");

let logPrize: IPrizeLogger = (text: string) => {
    console.log(text);
};

logPrize("AAAAAAAAAAAAAAAAAAAA");

console.log("\n\n Task 2.3\n");

interface Person {
    name: string,
    email: string,
}

interface Author extends Person {
    numBooksPublished: number,
}

interface Librarian extends Person {
    department: string,
    assistCustomer: (custName: string) => void;
}

let favoriteAuthor: Author = { name: 'Petro', email: 'petropetrov@gmail.com', numBooksPublished: 5 };
// let favoriteLibrarian: Librarian = { name: 'Petro', email: 'petropetrov@gmail.com', department: 'Я не знаю, що тут хочуть', assistCustomer(custName: string): void { console.log(`${this.name} is assisting ${custName}`) } };
console.log(favoriteAuthor);

console.log("\n\n Task 2.4\n");

class UniversityLibrarian implements Librarian {

    assistCustomer = (custName: string) => {
        console.log(`${this.name} is assisting ${custName}`);
    };

    constructor(public name: string, public email: string, public department: string) { }
}

let favoriteLibrarian: Librarian = new UniversityLibrarian('Petro', 'petropetrov@gmail.com', 'Я не знаю, що тут хочуть');

favoriteLibrarian.assistCustomer('Oleg');

console.log("\n\n Task 2.5\n");

class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    private _publisher: string;
    private _department: string = "dpt";

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    public get publisher() {
        return this._publisher.toUpperCase();
    }

    public set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }


    printItem(): void {
        console.log(`${this.title} was published in ${this.year}, department - ${this._department}`);
    }
}

let ref = new ReferenceItem("'A Clockwork Orange'", 1962);
ref.printItem();
ref.publisher = "Anthony Burgess";
console.log(ref.publisher);

console.log("\n\n Task 2.6\n");

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
        console.log('Creating a new Encyclopedia...');
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`)
    }
}

let refBook = new Encyclopedia("'Nausea'", 1938, 1);
refBook.printItem();
