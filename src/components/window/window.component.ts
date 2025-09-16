import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  projects: Project[] = [
    {name: 'Project 1', image: 'assets/img/projects/project1.png', likes: 10, comments: 5},
    {name: 'Project 2', image: 'assets/img/projects/project2.png', likes: 20, comments: 15},
    {name: 'Project 3', image: 'assets/img/projects/project3.png', likes: 30, comments: 25}
  ];

  currentIndex: number = 0;

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prevProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }
}
