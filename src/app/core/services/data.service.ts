import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service, GalleryItem, ContactInfo } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private servicesSubject = new BehaviorSubject<Service[]>([
    {
      id: 1,
      title: 'Playtime & Social',
      description: 'Structured play sessions help children build social skills and confidence in a safe environment.',
      icon: 'bi-emoji-smile',
      image: 'assets/images/playtime-social.jpg',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Learning Activities',
      description: 'Age-appropriate activities that spark curiosity and foster early cognitive development.',
      icon: 'bi-book-fill',
      image: 'assets/images/learning-activities.jpg',
      color: 'success'
    },
    {
      id: 3,
      title: 'Outdoor Time',
      description: 'Safe outdoor play and nature exploration to keep kids active, healthy, and connected with nature.',
      icon: 'bi-sun-fill',
      image: 'assets/images/outdoor-time.jpg',
      color: 'warning'
    }
  ]);

  private gallerySubject = new BehaviorSubject<GalleryItem[]>([
    {
      id: 1,
      title: 'Kids Playing',
      image: 'assets/images/gallery-1.jpg'
    },
    {
      id: 2,
      title: 'Kids Running',
      image: 'assets/images/gallery-2.jpg'
    },
    {
      id: 3,
      title: 'Kids Playing on Inflatables',
      image: 'assets/images/gallery-3.jpg'
    },
    {
      id: 4,
      title: 'Kids with Paint',
      image: 'assets/images/gallery-4.jpg'
    }
  ]);

  private contactInfoSubject = new BehaviorSubject<ContactInfo>({
    address: 'Apratyakshkar Bhawan, Block-A, Vibhuti Khand, Gomti Nagar, Lucknow-226010, Uttar Pradesh, India',
    phone: '(555) 123-4567',
    email: 'hello@kidscare.com',
    hours: 'Mon - Fri: 7:00 AM - 6:00 PM'
  });

  services$ = this.servicesSubject.asObservable();
  gallery$ = this.gallerySubject.asObservable();
  contactInfo$ = this.contactInfoSubject.asObservable();

  getServices(): Observable<Service[]> {
    return this.services$;
  }

  getGallery(): Observable<GalleryItem[]> {
    return this.gallery$;
  }

  getContactInfo(): Observable<ContactInfo> {
    return this.contactInfo$;
  }
}
