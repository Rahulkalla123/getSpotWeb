import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  faqs = [
    {
      question: 'How do I sign up for GetSpot?',
      answer: 'Download the GetSpot app on iOS or Android, create an account, and you\'re ready to get started.',
      isOpen: false
    },
    {
      question: 'Is GetSpot available in my city?',
      answer: 'GetSpot is expanding quickly! Check our app or website to see if we\'re available in your area.',
      isOpen: false
    },
    {
      question: 'How does real-time parking space booking work?',
      answer: 'Our app shows you available parking spaces in real-time. Choose your preferred spot, book it instantly, and navigate to it with ease.',
      isOpen: false
    },
    {
      question: 'How can I rent out my parking space?',
      answer: 'Create a GetSpot account, list your parking space details (location, availability, price), and start earning money by renting it out to others.',
      isOpen: false
    },
    {
      question: 'Is there a fee for listing my parking space?',
      answer: 'Listing your parking space is free! GetSpot charges a small commission only when your space is successfully rented.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

