import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { GalleryItem } from '../../core/models/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery$!: Observable<GalleryItem[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.gallery$ = this.dataService.getGallery();
  }
}
