import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-gbp-transaction',
  templateUrl: './gbp-transaction.component.html',
  styleUrls: ['./gbp-transaction.component.css']
})
export class GbpTransactionComponent implements OnInit {

    d: any;
    transactions: any;
    amount: number;
    id: any;
    title = "USD Transactions";

    constructor(private http: HttpClient) { }
    getTransaction() {
        console.log("get transaction");
        this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/getTransaction/gbp', { test: 'test' }).subscribe(data => {
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
