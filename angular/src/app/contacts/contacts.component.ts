import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;

  constructor(public http: Http, public contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(data => {
        this.pageContacts = data;
      }, error => {
        console.log(error);
      })
  }

}
