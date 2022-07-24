import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'practice';

  ngOnInit() {
    console.log('Hey this is the component!');
    console.log('I need another message here');
    console.log('This message is in branch 2 dude...');
  }
}
