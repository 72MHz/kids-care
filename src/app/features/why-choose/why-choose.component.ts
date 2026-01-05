import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.scss']
})
export class WhyChooseComponent {
  benefits = [
    { icon: 'bi-check-circle-fill', title: 'Certified Educators', text: 'All staff are trained and certified' },
    { icon: 'bi-check-circle-fill', title: 'Safe Environment', text: 'State-of-the-art facilities and 24/7 monitoring' },
    { icon: 'bi-check-circle-fill', title: 'Nutritious Meals', text: 'Healthy, balanced meals and snacks daily' },
    { icon: 'bi-check-circle-fill', title: 'Early Learning', text: 'Focus on STEM and creative development' }
  ];
}
