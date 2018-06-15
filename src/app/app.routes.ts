import { Routes } from '@angular/router';
import { PATH_REPOS, PATH_FOLLOWERS, PATH_HOME, PATH_USER } from './contantes/url';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';
import { UserResolver } from './resolvers/userResolver';
import { ReposComponent } from './repos/repos.component';
import { FollowersComponent } from './followers/followers.component';
import { ReposResolver } from './resolvers/reposResolver';
import { FollowersResolver } from './resolvers/followersResolver';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomePageComponent },
    {
        path: PATH_USER + '/:login',
        component: DetailComponent,
        resolve: { user: UserResolver },
        children: [
            { path: '', pathMatch: 'full', redirectTo: PATH_REPOS },
            { path: PATH_REPOS, component: ReposComponent, resolve: { repos: ReposResolver } },
            { path: PATH_FOLLOWERS, component: FollowersComponent, resolve: { followers: FollowersResolver } }
        ]
    }
];