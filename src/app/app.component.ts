import { Component,  ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NavItem } from './nav-items';
import { NavService } from './nav.service';
import { VERSION } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: 
  [
    './app.component.scss',
    './app.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})


// // query results available in ngOnInit
// @ViewChild('foo', {static: true}) foo: ElementRef; 

// OR

// // query results available in ngAfterViewInit
// @ViewChild('foo', {static: false}) foo: ElementRef;

export class AppComponent implements AfterViewInit {
  username = "Gursifath";
  

  @ViewChild('appDrawer', {static: true}) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'home',
      route: 'dashboard',
    },

    {
      displayName: 'My Accounts',
      iconName: 'account_circle',
      children: [
        {
          displayName: 'GBP Account',
          iconName: '',
          route: 'gbp-account',
        },
        {
          displayName: 'USD Account',
          iconName: 'attach_money',
          route: 'usd-account',
        },
        {
          displayName: 'EUR Account',
          iconName: 'euro_symbol',
          route: 'eur-account',
        },
      ]
    },

    {
      displayName: 'View Transaction',
      iconName: 'visibility',
      
      children: [
        {
          displayName: 'GBP Transactions',
          iconName: '',
          route: 'view-transaction/gbp-transaction',
        },
        {
            displayName: 'USD Transactions',
            iconName: 'attach_money',
            route: 'view-transaction/usd-transaction',
        },
        {
          displayName: 'EUR Transactions',
          iconName: 'euro_symbol',
          route: 'view-transaction/eur-transaction',
        }
      ]
    },

    {
      displayName: 'Analysis',
      iconName: 'timeline',
      route: 'analysis',
    },

    {
      displayName: 'MyProfile',
      iconName: 'insert_emoticon',
      route: 'user-profile',
    }

  ];

  handleClick() {
    console.log("Doneee");
  }

  constructor(private navService: NavService) {

    setInterval(() => {
      this.now = new Date();
    }, 2);
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  public now: Date = new Date();
}
