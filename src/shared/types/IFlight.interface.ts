export interface IDeparture {
	code: string
	name: string
	city: string
	country: string
	timeZone: string
	scheduleTime: string
	actualTime: string
}

export interface IArrival {
	code: string
	name: string
	city: string
	country: string
	timeZone: string
	scheduleTime: string
	estimatedTime: string
}

export interface IAirplane {
	airplaneImage: string
	aircraft: string
	brand: string
	model: string
}

export interface IRoute {
	countryName: string
	countryFlag: string
	flightPath: [number, number][]
	speed: number
	altitude: number
	bearing: number
	statusPercent: number
	statusCoordinate: [number, number]
}

export interface IFlight {
	id: string
	flightNumber: string
	airline: string
	airlineLogo: string
	departure: IDeparture
	arrival: IArrival
	airplane: IAirplane
	code: string
	route: IRoute
}
