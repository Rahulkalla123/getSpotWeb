import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
   private baselineDevicePixelRatio: number = 1; 

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object,
    
  ) {}

  @HostListener('window:resize')
  onResize() {
    this.adjustScale();
  }

  ngOnInit() {
    this.setBaselineDevicePixelRatio(); 
  }

  private setBaselineDevicePixelRatio(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.baselineDevicePixelRatio = window.devicePixelRatio || 1; 
    }
  }

  private adjustScale(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentDevicePixelRatio = window.devicePixelRatio || 1; 
      const normalizedScale = currentDevicePixelRatio / this.baselineDevicePixelRatio;
      
      const content = document.getElementById('app-container');
      if (content) {
        this.renderer.setStyle(content, 'transform', `scale(${normalizedScale})`);
        this.renderer.setStyle(content, 'width', '100%'); 
        this.renderer.setStyle(content, 'height', '100%');
      }
    }
  }
  }