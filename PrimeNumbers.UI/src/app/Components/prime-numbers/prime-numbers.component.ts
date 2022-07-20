import { Component, OnInit } from '@angular/core';
import {PrimeNumbersService } from 'src/app/Services/prime-numbers/prime-numbers.service';

@Component({
  selector: 'app-prime-numbers',
  templateUrl: './prime-numbers.component.html',
  styleUrls: ['./prime-numbers.component.css']
})
export class PrimeNumbersComponent implements OnInit {
  
  constructor(private numbersService: PrimeNumbersService) { }

  ngOnInit(): void {
  }
  inputNumber: string = '';
  lastInputNumber: string = '';
  numbersList: number[] = [];
  errorMessage = '';
  no: number = 0;

  onInputChanged(member: string){
    this.inputNumber = member;
    this.errorMessage = '';
  }

  generatePrimeNumbers(){
    if(!this.inputNumber){
      this.errorMessage = 'Please enter a number!';
      return;
    }
    
    this.no  = Number(this.inputNumber);
    if(this.no<2 || this.no>100){
      this.errorMessage = 'Please enter a number between 2 and 100!';
      return;
    }

    this.numbersService.getPrimeNumbers(this.no).subscribe(
      {
        next: res=> {this.numbersList=[...res];},
        error: err=> {console.log(err);}
      }
    );
    this.lastInputNumber = "Prime Numbers less than " + this.inputNumber ;
    this.inputNumber = '';
  }

}
