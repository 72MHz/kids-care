export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
