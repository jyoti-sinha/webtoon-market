import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../_core/dialog/dialog-config';
import { DialogRef } from '../../../_core/dialog/dialog-ref';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private config: DialogConfig, public dialogRef: DialogRef) { }

  ngOnInit() {
    console.log(this.config.data);
  }

  onSubmit(){
    this.dialogRef.close({
      data: []
    })
  }

}