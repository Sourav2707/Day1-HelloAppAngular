import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * String Interpolation is a one-way databinding technique 
which is used to output the data from a TypeScript code to HTML template (view).
 */
export class AppComponent {
  title = 'HelloApp';
  ngOnInit(): void {
    this.title = "Hello from Bridgelabz"
  }
}
