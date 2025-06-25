interface IDeparture {
    code: string
    name: string
    city: string
    country: string
}

interface IArrival {
    code: string
    name: string
    city: string
    country: string
}

export interface IFlight {
    flightNumber: string
    airline: string
    airlineLogo: string
    departure: IDeparture
    arrival: IArrival
    aircraft: string
    airplaneImage: string
    code: string
    statusPercent: number
}