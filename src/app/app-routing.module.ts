import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { Routes, RouterModule } from '@angular/router';
import { EurAccountComponent } from './Accounts/eur-account/eur-account.component';
import { GbpAccountComponent } from './Accounts/gbp-account/gbp-account.component';
import { NetBalanceComponent } from './net-balance/net-balance.component';
import { UsdAccountComponent } from './Accounts/usd-account/usd-account.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { EurTransactionComponent } from './view-transaction/eur-transaction/eur-transaction.component';
import { GbpTransactionComponent } from './view-transaction/gbp-transaction/gbp-transaction.component';
import { UsdTransactionComponent } from './view-transaction/usd-transaction/usd-transaction.component';  
import { LoginPageComponent } from './login-page/login-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  { path:  '', redirectTo:  'dashboard', pathMatch:  'full' },
  { path: 'dashboard', component: ViewDashboardComponent },
  { path: 'gbp-account', component: GbpAccountComponent },
  { path: 'usd-account', component: UsdAccountComponent },
  { path: 'eur-account', component: EurAccountComponent },
  { path: 'view-transaction', component: ViewTransactionComponent },
  { path: 'view-transaction/eur-transaction', component: EurTransactionComponent},
  { path: 'view-transaction/gbp-transaction', component: GbpTransactionComponent},
  { path: 'view-transaction/usd-transaction', component: UsdTransactionComponent},
  // { path: 'net-balance', component: NetBalanceComponent },
  { path: 'analysis', component: AnalysisComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'user-profile', component: UserProfileComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
