import { Component, OnInit } from '@angular/core';
import { AllUsersService } from "../../services/all-users.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users = [];
  thead = ['Full Name', 'Photo', 'Gender', 'Email', 'Mobile', 'Category', 'Technologies']

  constructor(private allUsersService: AllUsersService) { }

  ngOnInit(): void {
    this.users = this.allUsersService.getUsers();
  }

}
