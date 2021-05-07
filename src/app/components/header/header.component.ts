import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public href: string = '';
  create = true;
  view = !this.create;

  constructor() {
  }

  ngOnInit(): void {}

  activeTab(current): void {
    if (current === 'create') {
      this.create = true;
      this.view = !this.create;
    } else {
      this.view = true;
      this.create = !this.view;
    }
  }
}
