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
  imgUrl = "https://www.educationworld.in/wp-content/uploads/2020/06/BridgeLabz-2.jpg";
  url = "https://www.bridgelabz.com/";
  ngOnInit(): void {
    this.title = "Hello from Bridgelabz"
  }
  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
