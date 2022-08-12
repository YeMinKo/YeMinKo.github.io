import { Component, OnInit } from '@angular/core';
import { CssService } from './pages/css/css.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cssService: CssService) {}

  ngOnInit(): void {
    this.cssService.initCSSExercises();
  }
}
