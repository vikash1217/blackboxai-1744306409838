import { Component, OnInit } from '@angular/core';

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  categories: string[] = ['All', 'Landscape', 'Portrait', 'Wedding', 'Events', 'Street'];
  selectedCategory: string = 'All';
  selectedProject: PortfolioProject | null = null;

  projects: PortfolioProject[] = [
    {
      id: 1,
      title: 'Mountain Sunrise',
      description: 'Capturing the first light of dawn over the mountain ranges.',
      imageUrl: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
      category: 'Landscape',
      tags: ['Nature', 'Mountains', 'Sunrise']
    },
    {
      id: 2,
      title: 'Urban Life',
      description: 'Street photography capturing the essence of city life.',
      imageUrl: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg',
      category: 'Street',
      tags: ['Urban', 'City', 'Black and White']
    },
    {
      id: 3,
      title: 'Wedding Moments',
      description: 'Beautiful moments from wedding ceremonies.',
      imageUrl: 'https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg',
      category: 'Wedding',
      tags: ['Wedding', 'Couple', 'Celebration']
    },
    {
      id: 4,
      title: 'Portrait Study',
      description: 'Professional portrait photography in studio setting.',
      imageUrl: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
      category: 'Portrait',
      tags: ['Portrait', 'Studio', 'Professional']
    },
    {
      id: 5,
      title: 'Concert Photography',
      description: 'Capturing live music performances and events.',
      imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      category: 'Events',
      tags: ['Music', 'Concert', 'Entertainment']
    },
    {
      id: 6,
      title: 'Coastal Sunset',
      description: 'Beautiful sunset captured at the coastline.',
      imageUrl: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
      category: 'Landscape',
      tags: ['Nature', 'Coast', 'Sunset']
    }
  ];

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  ngOnInit(): void {
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  openProject(project: PortfolioProject): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }
}
