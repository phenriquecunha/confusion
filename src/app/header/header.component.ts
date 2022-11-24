import { Component, OnInit } from '@angular/core';
import {
  faAddressCard,
  faHome,
  faInfoCircle,
  faList,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faInfo = faInfoCircle;
  faList = faList;
  faAddressCard = faAddressCard;
  faLogin = faRightToBracket;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginForm(){
    this.dialog.open(LoginComponent, {
      width: "380px",
      height: "420px"
    })
  }
}
