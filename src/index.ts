import fetch, { Response } from 'node-fetch';

const json = (res: Response) => res.json();


export class NovelCovid {

	public baseURL: string;

	public constructor() {

		this.baseURL = 'https://corona.lmao.ninja';
	}

	/**
	 * @description Gets all the information from the api.
	 * @returns {Promise<All>}
	 */
	async all(): Promise<All> {

		return fetch(`${this.baseURL}/all`).then(json);
	}

	/**
	 * @description Fetches data of corona virus by country.
	 * @param {String} [country=null] - Country details you want to fetch.
	 * @param {String} sort - Sort by active, deaths , etc.
	 * @returns {Promise<Array<Country>| Country |null>}
	 */
	async countries(country?: string | null | number): Promise<Country | null>;
	async countries(country: null, sort?: keyof CountrySort): Promise<Array<Country>>;
	async countries(country?: string | null | number, sort?: keyof Country): Promise<Array<Country> | Country | null> {

		if (country) {

			return fetch(`${this.baseURL}/countries/${country}`).then(json);

		} else if (sort) {

			return fetch(`${this.baseURL}/countries?sort=${sort}`).then(json);

		}

		return fetch(`${this.baseURL}/countries`).then(json);

	}

	/**
	 * @description Fetches data of corona virus in United States.
	 * @param {String} [state=null] - State name data you wanna fetch.
	 * @returns {Promise<Array<State> | State | null>}
	 */
	async states(): Promise<Array<State>>;
	async states(state: string| null): Promise<State | null>;
	async states(state?: string | null): Promise<Array<State> | State | null> {

		if (state) {

			return fetch(`${this.baseURL}/states/${state}`).then(json);

		}

		return fetch(`${this.baseURL}/states`).then(json);


	}

	/**
	 * @description Get historical data from the start of 2020. (JHU CSSE GISand Data).
	 * @param {String} [all=null] - Returns  all the cases and deaths.
	 * @param {String} [country=null] -  Returns data of a specific country.
	 * @param {String} [province=null] - Get a province within a country's time series.
	 * @returns {Promise<Array<Historical> | HistoricalAll | HistoricalCountry | null>}
	 */
	async historical(): Promise<Array<Historical>>;
	async historical(all: boolean | null): Promise<HistoricalAll>;
	async historical(all: null, country?: string | null, province?: string | null): Promise<HistoricalCountry | null>;
	async historical(all?: boolean | null, country?: string | null, province?: string | null): Promise<Array<Historical> | HistoricalCountry | HistoricalAll | null> {

		if (country) {

			return fetch(`${this.baseURL}/v2/historical/${country}`).then(json);

		} else if (country && province) {

			return fetch(`${this.baseURL}/v2/historical/${country}/${province}`).then(json);

		} else if (all) {

			return fetch(`${this.baseURL}/v2/historical/all`).then(json);

		}

		return fetch(`${this.baseURL}/v2/historical`).then(json);

	}

	/**
	 * @description Return data from the John Hopkins CSSE Data Repository (Provinces and such).
	 * @returns {Promise<Array<Jhucsse>>}
	 */
	async jhucsse(): Promise<Array<Jhucsse>> {

		return fetch(`${this.baseURL}/v2/jhucsse`).then(json);

	}

}

export interface All {
	cases: number;
	deaths: number;
	recovered: number;
	updated: number;
	active: number;
}

export interface Country {
	country: string;
	countryInfo: {
		_id: number;
		latitude: number;
		longitue: number;
		flag: string;
		iso3: string;
		iso2: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
}

export interface State {
	state: string;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	active: number;
}

export interface Historical {
	country: string;
	province: string | null;
	timeline: {
		cases: object;
		deaths: object;
	};
}

export interface HistoricalCountry {
	country: string;
	timeline: {
		cases: object;
		deaths: object;
	};
}
export interface Jhucsse {
	country: string;
	province: string | null;
	updatedAt: Date;
	stats: {
		confirmed: number;
		deaths: number;
		recovered: number;
	};
	coordinates: {
		latitude: string;
		longitude: string;
	};
}

export interface CountrySort {
	cases: number;
	todaysCases: number;
	deaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
}

export interface HistoricalAll {
	cases: object;
	deaths: object;
	recovered: object;
}

