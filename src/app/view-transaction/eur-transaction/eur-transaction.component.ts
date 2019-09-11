import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-eur-transaction',
  templateUrl: './eur-transaction.component.html',
  styleUrls: ['./eur-transaction.component.css']
})
export class EurTransactionComponent implements OnInit {

     d: any;
     transactions: any;
     amount: number;
     id: any;
     title="EUR Transactions";

  constructor(private http: HttpClient) { }

  login() {
    console.log("login");
    this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/login/msg', { test: 'test' }).subscribe(data => {
        this.d = JSON.stringify(data);
        this.d = JSON.parse(this.d);
        console.log(this.d);
        console.log(data.toString);
        console.log(this.d.name);
       // username = data.toString();
    })
 }
getTransaction() {
    console.log("get transaction");
    this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/getTransaction/eur', { test: 'test' }).subscribe(data => {
      console.log(data);
        this.transactions = JSON.stringify(data);
        this.transactions = JSON.parse(this.transactions);
        console.log(this.transactions.Array);

        this.amount = this.transactions.Array[0].amount;

        //username = data.toString();
    })
}

deleteTransaction(element: any) {
    element = JSON.stringify(element);
    element = JSON.parse(element);
    console.log("Id value: " + element.transaction_id);
    console
    this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/deleteTransaction/delete', { trans_id: element.transaction_id }).subscribe(data => {
        this.transactions = JSON.stringify(data);
        this.transactions = JSON.parse(this.transactions);
        console.log(this.transactions.Array)
    })
  }

    ngOnInit() {
        this.getTransaction();
  }

}
