import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }
  constructor(private messagesService: MessagesService) {}
}
