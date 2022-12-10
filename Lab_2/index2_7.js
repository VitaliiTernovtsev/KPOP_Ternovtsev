console.log("\n\n Task 2.7\n");
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
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
let refBook = new Encyclopedia("'Nausea'", 1938, 1);
refBook.printItem();
