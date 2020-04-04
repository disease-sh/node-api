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
	 * @description Gets yesterday's information from the api.
	 * @returns {Promise<Array<Country>>}
	 */
	async yesterday(): Promise<Array<Country>> {

		return fetch(`${this.baseURL}/yesterday`).then(json);
	}

	/**
	 * @description Gets all the effected country names.
	 * @returns {Promise<Array<String>>}
	 */
	async countryNames(): Promise<Array<string>> {

		const countries = await this.countries() as Country[] | null;

		return countries!.map(x => x.country);
	}

	/**
	 * @description Fetches data of corona virus by country.
	 * @param {?string} [country=null] - Country details you want to fetch.
	 * @param {?string} sort - Sort by active, deaths , etc.
	 * @returns {Promise<Array<Country>| Country |null>}
	 */
	async countries(country?: string | null | number): Promise<Country | Array<Country> | null>;
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
	 * @param {?string} [state=null] - State name data you wanna fetch.
	 * @returns {Promise<Array<State> | State | null>}
	 */
	async states(): Promise<Array<State>>;
	async states(state: string | null): Promise<State | null>;
	async states(state?: string | null): Promise<Array<State> | State | null> {

		if (state) {

			return fetch(`${this.baseURL}/states/${state}`).then(json);

		}

		return fetch(`${this.baseURL}/states`).then(json);


	}

	/**
	 * @description Get historical data from the start of 2020. (JHU CSSE GISand Data).
	 * @param {?boolean} [all=null] - Returns  all the cases and deaths.
	 * @param {?string} [country=null] -  Returns data of a specific country.
	 * @param {?string} [province=null] - Get a province within a country's time series.
	 * @returns {Promise<Array<Historical> | HistoricalAll | HistoricalCountry | Array<HistoricalCountry> | null>}
	 */
	async historical(): Promise<Array<Historical>>;
	async historical(all?: boolean | null): Promise<HistoricalAll>;
	async historical(all: null, country: string | null, province?: string | null): Promise<HistoricalCountry | Array<HistoricalCountry> | null>;
	async historical(all?: boolean | null, country?: string | null, province?: string | null): Promise<Array<Historical> | HistoricalCountry | Array<HistoricalCountry> | HistoricalAll | null> {

		if (country && !province && !all) {

			return fetch(`${this.baseURL}/v2/historical/${country}`).then(json);

		} else if (country && province && !all) {

			return fetch(`${this.baseURL}/v2/historical/${country}/${province}`).then(json);

		} else if (all) {

			return fetch(`${this.baseURL}/v2/historical/all`).then(json);

		}

		return fetch(`${this.baseURL}/v2/historical`).then(json);

	}

	/**
	 * @description Return data from the John Hopkins CSSE Data Repository (Provinces and such).
	 * @param {?boolean} [countries=null] - If method should return counties
	 * @param {?string} countryname - County name if counties is true.
	 * @returns {Promise<Array<Jhucsse>>}
	 */
	async jhucsse(): Promise<Array<Jhucsse>>;
	async jhucsse(counties?: boolean | null): Promise<Array<JhucsseCounties>>;
	async jhucsse(counties: boolean, countyname: string): Promise<JhucsseCountry>;
	async jhucsse(counties?: boolean, countyname?: string): Promise<Array<Jhucsse> | Array<JhucsseCounties> | JhucsseCountry> {

		if (counties) {

			return fetch(`${this.baseURL}/v2/jhucsse/counties`).then(json);

		} else if (counties && countyname) {

			return fetch(`${this.baseURL}/v2/jhucsse/counties/${countyname}`).then(json);

		}

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
	updated: number;
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
	province: Array<string> | string | null;
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

export interface JhucsseCountry {
	country: string;
	province: string | null;
	county: string;
	updatedAt: Date;
}

export interface JhucsseCounties {
	country: string;
	province: string | null;
	updatedAt: Date;
	county: string;
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
	todayCases: number;
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
