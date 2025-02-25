import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  isMobileView: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const clickedInsideNavbar = target.closest('.navbar') !== null;
    if (!clickedInsideNavbar && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 768;
      if (!this.isMobileView) {
        this.isMenuOpen = false;
      }
    }
  }

}
