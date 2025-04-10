import { Component, OnInit } from '@angular/core';

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
      title: 'Mountain Landscape',
      description: 'Beautiful mountain landscape at sunset'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
      title: 'Urban Photography',
      description: 'City lights at night'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg',
      title: 'Nature Close-up',
      description: 'Macro photography of flowers'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1559041/pexels-photo-1559041.jpeg',
      title: 'Portrait',
      description: 'Professional portrait photography'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
      title: 'Wildlife',
      description: 'Animals in their natural habitat'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg',
      title: 'Architecture',
      description: 'Modern building designs'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  loadMore(): void {
    // Add more photos to the array
    const newPhotos: Photo[] = [
      {
        id: 7,
        url: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg',
        title: 'Beach Sunset',
        description: 'Beautiful sunset at the beach'
      },
      {
        id: 8,
        url: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg',
        title: 'Street Photography',
        description: 'Urban life captured in moments'
      },
      {
        id: 9,
        url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
        title: 'Abstract Art',
        description: 'Creative abstract photography'
      }
    ];

    this.photos = [...this.photos, ...newPhotos];
  }
}
