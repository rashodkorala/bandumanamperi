import { Artwork } from './artworkModel';

export default class Performance extends Artwork {
  duration: string;
  location: string;
  performanceType: string;

  constructor(name: string, year: number, images: string[], description: string, duration: string, location: string, performanceType: string, id?: number) {
    super(name, year, images, description, id);
    this.duration = duration;
    this.location = location;
    this.performanceType = performanceType;
  }
}
