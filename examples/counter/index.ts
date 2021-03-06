import { bootstrap } from '@angular/platform-browser-dynamic';
import { App } from './containers/app.component';
import { NgRedux } from 'ng2-redux';
import { SearchActions } from './actions/search.actions';

bootstrap(App, [ NgRedux, SearchActions]);
