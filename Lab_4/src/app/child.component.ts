import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Середнє арифметичне кубів - {{result1()}}</p>
                <p>Середнє геометричне модулів - {{result2()}}</p>`
})
export class ChildComponent {
    @Input() array: string;

    result1(): number {
        let numbers: number[] = this.array.split(" ").map(element => {
            return +element;
        });

        let max = Math.max(...numbers);
        let min = Math.min(...numbers);

        return (Math.pow(max, 3) + Math.pow(min, 3)) / 2;
    }

    result2(): number {
        let numbers: number[] = this.array.split(" ").map(element => {
            return +element;
        });

        let max = Math.max(...numbers);
        let min = Math.min(...numbers);

        return Math.sqrt(Math.abs(max) * Math.abs(min));
    }

}
