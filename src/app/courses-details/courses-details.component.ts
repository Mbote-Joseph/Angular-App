import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
})
export class CoursesDetailsComponent implements OnInit {
  @Input() course: Course | undefined;

  constructor() {}

  ngOnInit(): void {}
}
