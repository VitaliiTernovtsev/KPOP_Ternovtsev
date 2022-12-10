import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Bayraktar TB2, $5.000.000 - </label> <input [(ngModel)]="prod1" type="number"> <br>
                <label>FGM-148 Javelin, $240.000 - </label> <input [(ngModel)]="prod2" type="number"> <br>
                <label>NLAW, $30.000 - </label> <input [(ngModel)]="prod3" type="number"> <br>
                <label>M142 HIMARS, $5.100.000 - </label> <input [(ngModel)]="prod4" type="number"> <br>
                <label>Живчик без газу, $0.62 - </label> <input [(ngModel)]="prod5" type="number"> <br>
                <h1>Сума покупок: $ {{sum(prod1, prod2, prod3, prod4, prod5)}}</h1>`
})
export class AppComponent {
    prod1 = +'';
    prod2 = +'';
    prod3 = +'';
    prod4 = +'';
    prod5 = +'';

    sum(prod1: number, prod2: number, prod3: number, prod4: number, prod5: number,): number {
        return prod1 * 5000000 + prod2 * 240000 + prod3 * 30000 + prod4 * 5100000 + prod5 * 0.62;
    }
}
