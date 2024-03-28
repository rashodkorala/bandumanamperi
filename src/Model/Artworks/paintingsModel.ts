import  Artwork  from './artworkModel';

export default class Painting extends Artwork {
  medium: string;
  size: string;

  constructor(name: string, year: number, images: File[], description: string, medium: string, size: string, id?: string) {
    super(name, year, images, description, id);
    this.medium = medium;
    this.size = size;
  }
}
