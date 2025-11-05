import { Country } from '../../app/types';
const API_URL = 'https://restcountries.com/v3.1';

export const searchCountryByName = async (name: string): Promise<Country[]> =>{
    const response = await fetch(`${API_URL}/name/${name.trim()}`);
}