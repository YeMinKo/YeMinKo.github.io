import { Injectable } from '@angular/core';

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
}
