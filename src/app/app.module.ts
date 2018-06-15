import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ReposComponent } from './repos/repos.component';
import { FollowersComponent } from './followers/followers.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserResolver } from './resolvers/userResolver';
import { ReposResolver } from './resolvers/reposResolver';
import { FollowersResolver } from './resolvers/followersResolver';
import { GithubErrorInterceptor } from './interceptors/githubError';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { InjectTokenInterceptor } from './interceptors/injectToken';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailComponent,
    ReposComponent,
    FollowersComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UserResolver,
    ReposResolver,
    FollowersResolver,
    { provide: HTTP_INTERCEPTORS, useClass: GithubErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: InjectTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
