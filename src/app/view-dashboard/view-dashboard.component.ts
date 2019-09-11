import { Component, OnInit } from '@angular/core';
import { CardModule } from "primeng/card";
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {

    d: any;
    balanceUsd: any;
    balanceGbp: any;
    balanceEur: any;
    USDAccNo: any;
    GBPAccNo: any;
    EURAccNo: any;
    constructor(private http: HttpClient) { };
    netBalanceUSD() {
        console.log("usd");
        this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/netBalance/usd', { test: 'test' }).subscribe(data => {
            this.d = JSON.stringify(data);
            this.d = JSON.parse(this.d);
            console.log(this.d);
            console.log(data.toString);
            console.log(this.d.balance);
            console.log(this.d.account_no);
            this.balanceUsd = this.d.balance;
            this.USDAccNo = this.d.account_no;
            // username = data.toString();
        })
    }
    netBalanceGBP() {
        console.log("login");
        this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/netBalance/gbp', { test: 'test' }).subscribe(data => {
            this.d = JSON.stringify(data);
            this.d = JSON.parse(this.d);
            console.log(this.d);
            console.log(data.toString);
            console.log(this.d.usd_balance);
            this.balanceGbp = this.d.balance;
            this.GBPAccNo = this.d.account_no;
            // username = data.toString();
        })
    }
    netBalanceEUR() {
        console.log("login");
        this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/netBalance/eur', { test: 'test' }).subscribe(data => {
            this.d = JSON.stringify(data);
            this.d = JSON.parse(this.d);
            console.log(this.d);
            console.log(data.toString);
            console.log(this.d.usd_balance);
            this.balanceEur = this.d.balance;
            this.EURAccNo = this.d.account_no;
            // username = data.toString();
        })
    }

    ngOnInit() {
        this.netBalanceUSD();
        this.netBalanceGBP();
        this.netBalanceEUR();

    }

}
