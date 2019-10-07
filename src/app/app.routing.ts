import { RouterModule } from '@angular/router'
import { ApplycreditcompComponent } from './applycreditcomp/applycreditcomp.component'
import { InstantdecisioncompComponent } from './instantdecisioncomp/instantdecisioncomp.component'
import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp/retrieveapplicationcomp.component'
import { StatuscompComponent } from './statuscomp/statuscomp.component'
import { EmpLoginComponent } from './emplogincomp/emplogincomp.component'
import { UserLoginComponent } from './userlogincomp/userlogincomp.component';

export const AppRouting = RouterModule.forRoot ([
    {path:'applycredit', component: ApplycreditcompComponent},
    {path:'instantdecision', component: InstantdecisioncompComponent},
    {path:'retrieve', component: RetrieveapplicationcompComponent},
    {path:'status', component: StatuscompComponent},
    {path:'emplogin', component: EmpLoginComponent},
    {path:'userlogin', component: UserLoginComponent},
])