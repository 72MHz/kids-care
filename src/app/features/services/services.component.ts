import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Service } from '../../core/models/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services$!: Observable<Service[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.services$ = this.dataService.getServices();
  }
}
