export class Series {
    position: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    hyperlink: string;
    image: string;
  
    constructor(position:number, name: string, channel: string, seasons: number, description: string, hyperlink: string, 
      image: string) {
      this.position = position;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.hyperlink = hyperlink;
      this.image = image;
    }
  }