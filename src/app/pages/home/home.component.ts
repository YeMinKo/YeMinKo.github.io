import { Component, OnInit } from '@angular/core';

type Menu = {
  icon: string;
  path: string;
  text: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly menus: Menu[] = [
    { icon: 'angular.svg', path: '/angular', text: 'Angular Exercises' },
    { icon: 'css.png', path: '/css', text: 'CSS Exercises' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
