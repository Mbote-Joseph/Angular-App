import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = COURSES;

  selectedCourse: Course | undefined;

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  constructor() {}

  ngOnInit(): void {}
}
