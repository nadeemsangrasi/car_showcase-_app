import { CarInfo } from "@/types/type"

export const fetchDataFromApi = async (fuel = '', year: string = '2022', manufacture: string = '', model: string = '', limit: string = "20") => {
    const url: string = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&fuel_type=${fuel}&year=${year}&make=${manufacture}&model=${model}`

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'da1aab2d31msh4a879c586a10d41p1090a0jsnd51831e8dd5b',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response: Response = await fetch(url, options)
        const result: CarInfo[] = await response.json()
        let finalData = result?.map((resData: CarInfo, index: number): CarInfo => {

            return { ...resData, id: index };
        });

        return finalData
    } catch (error) {
        console.error(error);
    }
}





