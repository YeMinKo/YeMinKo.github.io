import { Injectable } from '@angular/core';
import { cssExercises } from '../pages/css/css-exercises.data';
import { CSSExercise } from '../pages/css/css.component';

export enum Table {
  css = 'CSS',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string): any {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  initCSSExercises() {
    const exercises = this.getCSSExercises();
    if (exercises.length <= 0 || exercises.length < cssExercises.length) {
      this.updateCSSExercises(cssExercises);
    }
  }

  getCSSExercises(): CSSExercise[] {
    return this.get(Table.css) ?? [];
  }

  updateCSSExercises(cssExercises: CSSExercise[]) {
    this.remove(Table.css);
    this.set(Table.css, cssExercises);
  }
}
