import { ListingType } from "$/app/_types";

export const fetchData = async (): Promise<ListingType[]> => {
    try {
        const response = await fetch('http://localhost:8000/data');  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } 

        const data= await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}; 