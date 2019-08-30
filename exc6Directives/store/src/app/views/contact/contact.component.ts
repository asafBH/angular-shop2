import { Component, OnInit, Directive } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
  email: string;
  subject: string;
  message: string;

  //log(x) {console.log(x); }

  constructor() { }

  ngOnInit() {
  }

  // sentForm(){
  //   console.log(this.email+' '+this.subject+' '+this.subject)
  // }
}
