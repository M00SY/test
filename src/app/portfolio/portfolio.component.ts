import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';

declare var $: any; 

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images = [
    { src: 'assets/images/portfolio1.png', alt: 'Portfolio Image 1' },
    { src: 'assets/images/portfolio2.png', alt: 'Portfolio Image 2' },
    { src: 'assets/images/portfolio3.png', alt: 'Portfolio Image 3' },
    { src: 'assets/images/portfolio3.png', alt: 'Portfolio Image 4' },
    { src: 'assets/images/portfolio1.png', alt: 'Portfolio Image 5' },
    { src: 'assets/images/portfolio2.png', alt: 'Portfolio Image 6' }
  ];

  selectedImage: { src: string, alt: string } | null = null;

  openModal(image: { src: string, alt: string }): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}