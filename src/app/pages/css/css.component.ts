import { Component, OnInit } from '@angular/core';
import { CssService } from './css.service';

export interface CSSExercise {
  id: number;
  title: string;
  url: string;
  checked: boolean;
}

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss'],
})
export class CssComponent implements OnInit {
  exercises: CSSExercise[] = [];

  constructor(private cssService: CssService) {}

  onCheckboxChanged() {
    this.cssService.updateCSSExercises(this.exercises);
  }

  ngOnInit(): void {
    this.exercises = this.cssService.getCSSExercises();
  }
}
