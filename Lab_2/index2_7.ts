console.log("\n\n Task 2.7\n");

abstract class ReferenceItem {
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

    abstract printCitation();
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
        console.log('Creating a new Encyclopedia...');
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation():void{
        console.log(`${this.title} - ${this.year}`);
    }
}

let refBook = new Encyclopedia("'Nausea'", 1938, 1);
refBook.printItem();