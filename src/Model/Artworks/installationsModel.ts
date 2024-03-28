import Artwork  from './artworkModel';

export default class installation extends Artwork {
  medium: string;
  size: string;
  location?: string;

  constructor(name: string, year: number, images: File[], description: string, medium: string, size: string, location?: string, id?: string) {
    super(name, year, images, description, id);
    this.medium = medium;
    this.size = size;
    this.location = location;
  }
}
