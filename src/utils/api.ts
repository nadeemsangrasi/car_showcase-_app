import { CarInfo } from "@/types/type"

export const fetchDataFromApi = async (fuel = '', year: string = '2022', manufacture: string = '', model: string = '', limit: string = "20") => {
    const url: string = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&fuel_type=${fuel}&year=${year}&make=${manufacture}&model=${model}`

    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'd1bb9212bbmsh8eb2e7eb6f5b147p1af2dejsn7061c4a865f8',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    }

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





