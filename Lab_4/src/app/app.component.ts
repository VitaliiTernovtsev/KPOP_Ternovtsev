import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<input type="text" [(ngModel)]="array" />
                <child-comp [array]="array"></child-comp>`
})
export class AppComponent{
    array:string;    
}
