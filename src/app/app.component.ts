import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import {Observable} from 'rxjs';
import * as shellSelectors from './selectors/shell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bad-example-app';
  username$: Observable<string>;
  constructor(private store: Store<fromRoot.State>) {
    this.username$ = this.store.select(shellSelectors.getUsername);
  }
}
