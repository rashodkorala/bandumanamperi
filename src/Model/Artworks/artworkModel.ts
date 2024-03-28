export class Artwork {
    id?: number;
    name: string;
    year: number;
    images: string[];
    description: string;
  
    constructor(name: string, year: number, images: string[], description: string, id?: number) {
      this.id = id;
      this.name = name;
      this.year = year;
      this.images = images;
      this.description = description;
    }
  }
  