import { Component  } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-footerlinks',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './footerlinks.component.html',
  styleUrl: './footerlinks.component.css'
})
export class FooterlinksComponent  {
    

  isMobileView: boolean = false;
  isMenuOpen: boolean = false;

  isLinksDropdownVisible = false;
  isContactDropdownVisible = false;

  email = 'info@getspot.com';
  phone = '+123-456-789-123';
  address = 'Lorem Ipsum is simply dummy text';


  currentYear: number = new Date().getFullYear();

  }
