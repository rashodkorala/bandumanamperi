import  Artwork  from './artworkModel';

export default class Performance extends Artwork {
  duration?: string;
  location: string;
  performanceType?: string;
  videos?: File[];

  constructor(name: string, year: number, images: File[], description: string, duration: string, location: string, performanceType: string, id?: string, videos?: File[]) {
    super(name, year, images, description, id);
    this.duration = duration;
    this.location = location;
    this.performanceType = performanceType;
    this.videos = videos;
  }
}
