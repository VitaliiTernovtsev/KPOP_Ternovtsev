import { Component, Inject, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ApiService, Home } from './app.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'Lab_6';
  users: any[] = [];
  displayedColumns: string[] = ['Id', 'Title', 'Body'];
  clickedRows = new Set<any>();
  constructor(private _ApiService: ApiService, private dialog: MatDialog, private storage: Storage) {
  }

  async ngOnInit() {
    this._ApiService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;

      console.log(this.users);
    })
    await this.storage.create();  
    this.storage.forEach((value, key, iteration) => {
       this.clickedRows.add(value);
     });
  }
  
  onRowDoubleClicked(row: any) {
    console.log(row);
    this.dialog.open(DialogComp, {
      data: row
    });

  }

  async onRowClicked(row: any) {
    await this.storage.set(row.id.toString(), row.title);
    if (!this.clickedRows.has(row))
      this.clickedRows.add(await this.storage.get(row.id.toString()));
  }
}

@Component({
  selector: 'dialogComp',
  template: `<p>Id:{{data.id}}
  <p>Title:{{data.title}}
  <p>Body:{{data.body}}
  `
})

export class DialogComp {

  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}