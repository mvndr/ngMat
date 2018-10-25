import {Routes } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent } from './user/login/login.component'
import {UserComponent } from './user/user.component'
import {SignUpComponent } from './user/sign-up/sign-up.component'



export const appRoutes : Routes =[
    { path:'dashboard', component : DashboardComponent},

    { path:'login', component : UserComponent,
        children:[{path:'', component:LoginComponent}]
    },

    { path:'signup', component : UserComponent,
        children:[{path:'', component:SignUpComponent}]
    },

    {path:'', redirectTo:'/login', pathMatch: 'full'}
];