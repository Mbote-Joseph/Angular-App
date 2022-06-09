import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-courses';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses!: Course[];

  selectedCourse: Course | undefined;

  constructor(private courseService: CourseService) {
    this.getCourse();
  }

  ngOnInit(): void {}

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourse(): void {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }
}
