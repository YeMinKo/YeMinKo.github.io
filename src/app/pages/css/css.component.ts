import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/storage.service';

export interface CSSExercise {
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

  constructor(private storageService: StorageService) {}

  onCheckboxChanged() {
    this.storageService.updateCSSExercises(this.exercises);
  }

  ngOnInit(): void {
    this.exercises = this.storageService.getCSSExercises();
  }
}
