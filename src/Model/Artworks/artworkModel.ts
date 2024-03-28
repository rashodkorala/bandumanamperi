export default class Artwork {
    id?: string;
    name: string;
    year: number;
    images: File[];
    description: string;
  
    constructor(name: string, year: number, images: File[], description: string, id?: string) {
      this.id = id;
      this.name = name;
      this.year = year;
      this.images = images;
      this.description = description;
    }
  }
  