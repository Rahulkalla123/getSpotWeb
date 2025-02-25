import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { KeyFeaturesComponent } from "../key-features/key-features.component";
import { WorkingComponent } from "../working/working.component";
import { BenefitsComponent } from "../benefits/benefits.component";
import { QuestionsComponent } from "../questions/questions.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { FotterbannerComponent } from "../fotterbanner/fotterbanner.component";
import { FooterlinksComponent } from "../footerlinks/footerlinks.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, KeyFeaturesComponent, WorkingComponent, BenefitsComponent, QuestionsComponent, TestimonialsComponent, FotterbannerComponent, FooterlinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); 
        }
      }
    });
  }
}
