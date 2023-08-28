import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpcomponentComponent } from './helpcomponent/helpcomponent.component';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '',component:AppComponent},
  { path: 'help',component:HelpcomponentComponent,title: 'Help'},
  { path: 'feed',component:FeedComponent,title: 'Feed'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
