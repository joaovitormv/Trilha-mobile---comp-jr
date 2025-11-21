export type Country = {
  name: {
    common: string;
    official: string; 
  };
  flags: {
    png: string;
    alt?: string; 
  };
  capital?: string[];
  population: number;
  region: string;
  subregion?: string; 
  area: number; 

};