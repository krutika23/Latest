import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-eur-account',
  templateUrl: './eur-account.component.html',
  styleUrls: ['./eur-account.component.css']
})
export class EurAccountComponent implements OnInit {

  account_number="xx556GGh9901";
  type="Savings";
  balance="€ 889,998";
  d: any;
  get_receipient_name: string;
  get_account_number: string;
  get_amount: string;
  
  constructor(public dialog: MatDialog, private http: HttpClient) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { receipient_name: this.get_receipient_name, account_number: this.get_account_number, amount: this.get_amount },
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result);
      if (result === '') { // <- This is not ok, should check for undefined, not empty string
        console.log('The user has cancelled the operation');
      } else {
          console.log('The user has confirmed the operation');
          console.log("Result: " + result);
        this.get_receipient_name = result.get_receipient_name;
        this.get_account_number = result.get_account_number;
        this.get_amount = result.get_amount;
        //console.log("Please: " + this.get_account_number.valueOf);
        this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/addTransaction/add', { recipient_name: 'Krutika', account_no: '203921', amount: '049.43' }).subscribe(data => {
            this.d = JSON.stringify(data);
            this.d = JSON.parse(this.d);
            console.log(data);

            // username = data.toString();
        })
      }
    });
  }
  getAccDetails() {
     // console.log("accDetails");
      this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/accDetails/eur', { test: 'test' }).subscribe(data => {
          this.d = JSON.stringify(data);
          this.d = JSON.parse(this.d);
          console.log(this.d);
          console.log(data.toString);
          console.log(this.d.balance);
          console.log(this.d.account_no);
          this.account_number = this.d.account_no;
          this.balance = this.d.balance;
          // username = data.toString();
      })
  }


  ngOnInit() {
      this.getAccDetails()
  }

  addHandleClick() {
    
    
  }

  viewHandleClick() {
    
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'eur-dialog-box.html',
})
export class DialogOverviewExampleDialog {
    constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { } 
  form: FormData;
  receipient_name: string;
  account_number: string;
  amount: number
  d: any;

  addTransaction() {
      console.log("reciepient_name: " + this.receipient_name);

      this.http.post('http://localhost:8082/Payment_Solution_and_Liquidity_Management/jaxrs/addTransaction/add', { recipient_name: 'Krutika', account_no: '203921', amount: '049.43' }).subscribe(data => {
          this.d = JSON.stringify(data);
          this.d = JSON.parse(this.d);
          console.log(data);

          // username = data.toString();
      })
  }



}
