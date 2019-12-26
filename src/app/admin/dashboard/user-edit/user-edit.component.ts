import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../_core/dialog/dialog-config';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private config: DialogConfig) { }

  ngOnInit() {

    console.log(this.config.data)
  }

}