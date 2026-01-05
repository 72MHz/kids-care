import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { ServicesComponent } from '../../features/services/services.component';
import { WhyChooseComponent } from '../../features/why-choose/why-choose.component';
import { GalleryComponent } from '../../features/gallery/gallery.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    WhyChooseComponent,
    GalleryComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
