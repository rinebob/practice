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
    console.log('I need another message here because branch-1 needs a message!');
    console.log('This message is in branch 2 dude...');
    console.log('Welcome to branch 3!!');
    console.log('Welcome to branch 3 commit 2');
    console.log('On to branch 4 commit 1');
    console.log('On to branch 5 commit 1');
    console.log('On to branch 5 commit 2');
    console.log('On to branch 5 commit 4');
    console.log('On to branch 5 commit 3');
    console.log('On to branch 6 commit 1');
    console.log('On to branch 6 commit 2');
    console.log('On to branch 5 commit 4');
    console.log('On to branch 6 commit 2 ammended');
    console.log('On to branch 7 commit 1');


  }
}
