import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  allUser = [
    {
      'category': "General",
      'email': "chamola.tanishq@gmail.com",
      'fullName': "Tanishq Chamola",
      'gender': "Male",
      'mobile': "+918872880510",
      'technologies': ["C", "C++"]
    }
  ];

  constructor() { }

  getUsers() {
    return this.allUser;
  }

  setUsers(data) {
    this.allUser.push(data);
  }
}