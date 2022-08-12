import { Injectable } from '@angular/core';
import { StorageService, Table } from 'src/app/shared/storage.service';
import { cssExercises as newCSSExercises } from './css-exercises.data';
import { CSSExercise } from './css.component';

@Injectable({
  providedIn: 'root',
})
export class CssService {
  constructor(private storageService: StorageService) {}

  public getCSSExercises(): CSSExercise[] {
    return this.storageService.get(Table.css) ?? [];
  }

  public updateCSSExercises(cssExercises: CSSExercise[]) {
    this.storageService.remove(Table.css);
    this.storageService.set(Table.css, cssExercises);
  }

  public initCSSExercises() {
    const oldCSSExercises = this.getCSSExercises();

    if (oldCSSExercises.length <= 0) {
      this.updateCSSExercises(newCSSExercises);
    }

    if (oldCSSExercises.length !== newCSSExercises.length) {
      this.updateCSSExercises(
        this.migrateData(oldCSSExercises, newCSSExercises)
      );
    }
  }

  private migrateData(
    oldCSSExercises: CSSExercise[],
    newCSSExercises: CSSExercise[]
  ): CSSExercise[] {
    if (oldCSSExercises[0].id) {
      return this.migrateByID(oldCSSExercises, newCSSExercises);
    } else {
      return this.migrateByTitle(oldCSSExercises, newCSSExercises);
    }
  }

  private migrateByID(
    oldCSSExercises: CSSExercise[],
    newCSSExercises: CSSExercise[]
  ): CSSExercise[] {
    return newCSSExercises.map((newCSSExercise) => {
      const oldCSSExercise = this.findByID(newCSSExercise.id, oldCSSExercises);
      if (oldCSSExercise) {
        newCSSExercise = { ...newCSSExercise, ...oldCSSExercise };
      }
      return newCSSExercise;
    });
  }

  /**
   * For old data format
   */
  private migrateByTitle(
    oldCSSExercises: CSSExercise[],
    newCSSExercises: CSSExercise[]
  ): CSSExercise[] {
    return newCSSExercises.map((newCSSExercise) => {
      const oldCSSExercise = this.findByTitle(
        newCSSExercise.title,
        oldCSSExercises
      );
      if (oldCSSExercise) {
        newCSSExercise = { ...newCSSExercise, ...oldCSSExercise };
      }
      return newCSSExercise;
    });
  }

  private findByID(
    id: number,
    cssExercises: CSSExercise[]
  ): CSSExercise | undefined {
    return cssExercises.find((ex) => ex.id === id);
  }

  /**
   * For old data format
   */
  private findByTitle(
    title: string,
    cssExercises: CSSExercise[]
  ): CSSExercise | undefined {
    return cssExercises.find((ex) => ex.title === title);
  }
}
