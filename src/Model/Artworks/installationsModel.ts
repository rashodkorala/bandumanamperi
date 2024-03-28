import { Artwork } from './artworkModel';

export default class installation extends Artwork {
  medium: string;
  size: string;
  location?: string;

  constructor(name: string, year: number, images: string[], description: string, medium: string, size: string, location?: string, id?: number) {
    super(name, year, images, description, id);
    this.medium = medium;
    this.size = size;
    this.location = location;
  }
}
