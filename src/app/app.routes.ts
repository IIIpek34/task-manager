import { Routes } from '@angular/router';
import { List } from './pages/list/list';
import { Editor } from './pages/editor/editor';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: List },
  { path: 'editor', component: Editor },
  { path: '**', redirectTo: 'list' }
];
