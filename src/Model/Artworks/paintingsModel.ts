import { Artwork } from './artworkModel';

export class Paintings extends Artwork {
  medium: string;
  size: string;

  constructor(name: string, year: number, images: string[], description: string, medium: string, size: string, id?: number) {
    super(name, year, images, description, id);
    this.medium = medium;
    this.size = size;
  }
}
