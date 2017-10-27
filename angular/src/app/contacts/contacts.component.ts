import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  keyword: string = '';
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;

  constructor(public http: Http, public contactsService: ContactsService, public router: Router) { }

  ngOnInit() {

  }

  doSearch() {
    this.contactsService.getContacts(this.keyword, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
      }, error => {
        console.log(error);
      })
  }

  chercher() {
    this.doSearch();
  }

  gotoPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['/edit-contact', id]);
  }

  onDeleteContact(contact: Contact) {
    let confirm = window.confirm("Etes-vous sur ?");
    if (confirm==true) {
      this.contactsService.deleteContact(contact.id)
        .subscribe(data => {
          alert("Contact supprimé");
          this.pageContacts.content.splice(this.pageContacts.content.indexOf(contact), 1);
        }, error => {
          console.log(error);
        })
    }
  }

}
