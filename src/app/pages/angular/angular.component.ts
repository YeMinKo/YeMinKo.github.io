import { Component, OnInit } from '@angular/core';

type Project = {
  poster: string;
  title: string;
  description: string;
  link: string;
};

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  projects: Project[] = [
    {
      poster: 'calculator.png',
      title: 'Calculator App',
      description: 'Simple calculator app built with Angular.',
      link: 'https://yeminko.github.io/note-app/',
    },
    {
      poster: 'todo.png',
      title: 'Todo App',
      description: 'Simple todo app built with Angular.',
      link: '',
    },
    {
      poster: 'note.png',
      title: 'Note App',
      description: 'Simple note taking app built with Angular.',
      link: '',
    },
    {
      poster: 'minipos.png',
      title: 'Mini POS',
      description: 'Simple mini POS built with Angular.',
      link: '',
    },
    {
      poster: 'text-finder.png',
      title: 'Calculator App',
      description: 'Simple text finder app that built with Angular directive.',
      link: '',
    },
    {
      poster: 'flashcard-app.png',
      title: 'Flashcard App',
      description: 'Reactive Flashcard App that built with Angular.',
      link: '',
    },
    {
      poster: 'calendar.png',
      title: 'Calendar App',
      description:
        'Simple calendar app that can manage events. Built with Angular and angular-calendar library.',
      link: '',
    },
    {
      poster: 'password-manager.png',
      title: 'Password Manager',
      description:
        'Mini password manager app built with Angular. All user data will encrypt with AES 256 (crypto-js).',
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
