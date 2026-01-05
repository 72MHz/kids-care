import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AnimatedCard {
  id: number;
  title: string;
  image: string;
  rotateX: number;
  rotateY: number;
}

interface Feature {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  animatedCards: AnimatedCard[] = [];
  features: Feature[] = [];

  ngOnInit(): void {
    this.initializeCards();
    this.initializeFeatures();
  }

  initializeFeatures(): void {
    this.features = [
      { icon: '🎨', text: 'Creative Learning' },
      { icon: '🤝', text: 'Social Growth' },
      { icon: '⭐', text: 'Fun Activities' }
    ];
  }

  initializeCards(): void {
    this.animatedCards = [
      {
        id: 1,
        title: 'Play & Learn',
        image: 'assets/images/playtime-social.jpg',
        rotateX: 0,
        rotateY: 0
      },
      {
        id: 2,
        title: 'Safe Environment',
        image: 'assets/images/learning-activities.jpg',
        rotateX: 0,
        rotateY: 0
      },
      {
        id: 3,
        title: 'Creative Growth',
        image: 'assets/images/outdoor-time.jpg',
        rotateX: 0,
        rotateY: 0
      }
    ];
  }

  onMouseMove(event: MouseEvent, card: AnimatedCard): void {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = ((y - centerY) / centerY) * 20;
    const rotationY = ((x - centerX) / centerX) * 20;

    card.rotateX = rotationX;
    card.rotateY = rotationY;
  }

  onMouseLeave(card: AnimatedCard): void {
    card.rotateX = 0;
    card.rotateY = 0;
  }

  getCardTransform(card: AnimatedCard): { transform: string } {
    return {
      transform: `perspective(1000px) rotateX(${card.rotateX}deg) rotateY(${card.rotateY}deg) scale(${Math.abs(card.rotateX) > 0 || Math.abs(card.rotateY) > 0 ? 1.05 : 1})`
    };
  }
}
