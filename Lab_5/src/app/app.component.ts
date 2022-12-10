import { Component, Inject, OnInit } from '@angular/core';
import { ApiService, Home } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ApiService]
})
export class AppComponent implements OnInit{
  title = 'Lab_5';
  users: any[] = [];
  displayedColumns:string[] = ['Name','Surname','Country','Email']; 
  clickedRows = new Set<any>(); 
  constructor(private _ApiService: ApiService, private dialog:MatDialog) {
  }

  ngOnInit(): void {
    this._ApiService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users.results;
      
    console.log(this.users);
    })
  }

  onRowClicked(row:any){

    console.log(row);
    this.dialog.open(DialogComp,{
    data:row});

  }
}

@Component({
  selector:'dialogComp',
  template:`<p>Name:{{data.name.first}}
  <p>Surname:{{data.name.last}}
  <p>Country:{{data.location.country}}
  <p>Email:{{data.email}}
  `
})

export class DialogComp{

  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
}