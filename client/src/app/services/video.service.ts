import { Injectable } from '@angular/core';
import { IVideo, Video } from '../../../../both/models/video.model';

const fakeVideoList: IVideo[] = [
  {
    _id: '5beda0591f8a203158cfcc0e',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Guitar video 6',
    url:
      'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },

  {
    _id: '5bf822ce809d5d3ebcb59aa7',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Guitar video',
    url:
      'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },

  {
    _id: '5bf82331809d5d3ebcb59aa8',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Rag N\'Bone',
    url: 'https://www.youtube.com/watch?v=1Al-nuR1iAU',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },
  {
    _id: '5beda0591f8a203158cfcc0e',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Guitar video 6',
    url:
      'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },

  {
    _id: '5bf822ce809d5d3ebcb59aa7',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Guitar video',
    url:
      'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },

  {
    _id: '5bf82331809d5d3ebcb59aa8',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Rag N\'Bone',
    url: 'https://www.youtube.com/watch?v=1Al-nuR1iAU',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },
  {
    _id: '5beda0591f8a203158cfcc0e',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Guitar video 6',
    url:
      'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },

  {
    _id: '5bf822ce809d5d3ebcb59aa7',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Guitar video',
    url:
      'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  },

  {
    _id: '5bf82331809d5d3ebcb59aa8',
    categories: [
      {
        _id: '5bed9696fa2a5141d067fa7b'
      }
    ],
    name: 'Rag N\'Bone',
    url: 'https://www.youtube.com/watch?v=1Al-nuR1iAU',
    image: 'https://picsum.photos/200/300/?random',
    description: 'Video description...',
    realeaseDate: null,
    isSpotlight: true,
    views: 0
  }
];

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor() {}

  public getVideos(): Promise<IVideo[]> {
    return Promise.resolve(fakeVideoList.map(v => new Video(v)));
  }
}
