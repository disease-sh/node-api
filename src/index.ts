import fetch, { Response } from 'node-fetch';

const json = (res: Response) => res.json();

export class NovelCovid {

	public baseURL: string;

	public constructor() {

		this.baseURL = 'https://corona.lmao.ninja/v2';
	}

	/**
	 * @description Gets all the information from the api.
	 * @param {?yesterdayOptions} options - Options for All.
	 * @returns {Promise<All>}
	 */
	async all(options?: AllOptions): Promise<All> {

		if (options) {

			if (options.yesterday) {

				return fetch(`${this.baseURL}/all?yesterday=${options.yesterday}`).then(json);

			}
		}

		return fetch(`${this.baseURL}/all`).then(json);
	}

	/**
	 * @description Gets all the affected country names.
	 * @returns {Promise<Array<string>>}
	 */
	async countryNames(): Promise<Array<string>> {

		return (await (this.countries() as Promise<Country[]>)).map(x => x.country);

	}

	/**
	 * @description Fetches data of corona virus by country.
	 * @param {?string} [country=null] - Country details you want to fetch.
	 * @param {CountryOptions} options - options for country.
	 * @returns {Promise<Array<Country>| Country>}
	 */
	async countries(): Promise<Array<Country>>;
	async countries(country?: string | number): Promise<Array<Country> | Country>;
	async countries(country?: string | null, options?: CountryOptions): Promise<Array<Country>| Country>;
	async countries(country?: string | null | number, options?: CountryOptions): Promise<Array<Country> | Country> {

		if (country && !options) {

			return fetch(`${this.baseURL}/countries/${country}`).then(json);

		} else if (!country && options) {

			if (options.sort && !options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/countries?sort=${options.sort}`).then(json);

			} else if (options.sort && options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/countries?yesterday=${options.yesterday}&sort=${options.sort}`).then(json);

			} else if (!options.sort && options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/countries?yesterday=${options.yesterday}`).then(json);
			}

		} else if (country && options) {

			if (!options.sort && options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/countries/${country}?yesterday=${options.yesterday}`).then(json);

			} else if (!options.sort && options.yesterday && options.strict) {

				return fetch(`${this.baseURL}/countries/${country}?yesterday=${options.yesterday}&strict=${options.strict}`).then(json);

			} else if (!options.sort && !options.yesterday && options.strict) {

				return fetch(`${this.baseURL}.countries/${country}?strict=${options.strict}`).then(json);

			}
		}

		return fetch(`${this.baseURL}/countries`).then(json);

	}

	/**
	 * @param {?string|null} state - For a state in US.
	 * @param {?StateOptions} options - options for State.
	 * @returns {Promise<Array<State>>}
	 */
	async states(): Promise<Array<State>>;
	async states(state?: string | null, options?: StateOptions): Promise<Array<State> | State>;
	async states(state?: string | null, options?: StateOptions): Promise<Array<State> | State> {

		if (state && !options) {

			return fetch(`${this.baseURL}/states/${state}`).then(json);

		} else if (!state && options) {

			if (options.sort && !options.yesterday) {
				return fetch(`${this.baseURL}/states?sort=${options.sort}`).then(json);

			} else if (!options.sort && options.yesterday) {

				return fetch(`${this.baseURL}/states?yesterday=${options.yesterday}`).then(json);

			}

			return fetch(`${this.baseURL}/states?sort=${options.sort}&yesterday=${options.yesterday}`).then(json);

		} else if (state && options) {

			if (options.yesterday && !options.sort) {

				return fetch(`${this.baseURL}/states/${state}?yesterday=${options.yesterday}`).then(json);

			}

		}

		return fetch(`${this.baseURL}/states`).then(json);

	}

	/**
	 * @description Shows information as per continent.
	 * @param {?string} continent - For a continent.
	 * @param {?ContinentOptions} options - Options for continent.
	 * @returns {Promise<Array<Continent> | Continent | ContinentE>}
	 */
	async continents(): Promise<Array<Continent>>;
	async continents(continent: string | null): Promise<ContinentE>;
	async continents(continent?: string | null, options?: ContinentOptions): Promise<Array<Continent> | Continent>;
	async continents(continent?: string | null, options?: ContinentOptions): Promise<Array<Continent> | Continent | ContinentE> {

		if (continent && !options) {

			return fetch(`${this.baseURL}/continents/${continent}`).then(json);

		} else if (!continent && options) {

			if (options.sort && !options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/continents?sort=${options.sort}`).then(json);

			} else if (!options.sort && options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/continents?yesterday=${options.yesterday}`).then(json);
			}

			return fetch(`${this.baseURL}/continents?sort=${options.sort}&yesterday=${options.yesterday}`).then(json);

		} else if (continent && options) {

			if (!options.sort && options.yesterday && !options.strict) {

				return fetch(`${this.baseURL}/continents/${continent}?yesterday=${options.yesterday}`).then(json);

			} else if (!options.sort && options.yesterday && options.strict) {

				return fetch(`${this.baseURL}/continents/${continent}?yesterday=${options.yesterday}&strict=${options.strict}`).then(json);

			} else if (!options.sort && !options.yesterday && options.strict) {

				return fetch(`${this.baseURL}/continents/${continent}?strict=${options.strict}`).then(json);
			}

		}

		return fetch(`${this.baseURL}/continents`).then(json);

	}

	/**
	 * @description - Get historical data of USA.
	 * @param {?string} state - For a specfic state.
	 * @returns {Promise<Array<string> | Array<HistoricalUSA>>}
	 */
	async historicalUSA(): Promise<Array<string>>;
	async historicalUSA(state: string): Promise<Array<HistoricalUSA>>;
	async historicalUSA(state?: string): Promise<Array<HistoricalUSA> | Array<string>> {

		if (state) {

			return fetch(`${this.baseURL}/historical/usacounties/${state}`).then(json);
		}

		return fetch(`${this.baseURL}/historical/usacounties`).then(json);
	}

	/**
	 * @description Get historical data from the start of 2020. (JHU CSSE GISand Data).
	 * @param {?boolean} [all=null] - Returns  all the cases and deaths.
	 * @param {?string} [country=null] -  Returns data of a specific country.
	 * @param {?string} [province=null] - Get a province within a country's time series.
	 * @returns {Promise<Array<Historical> | HistoricalAll | HistoricalCountry | Array<HistoricalCountry>>}
	 */
	async historical(): Promise<Array<Historical>>;
	async historical(all?: boolean | null): Promise<HistoricalAll>;
	async historical(all: null, country: string | null, province?: string | null): Promise<HistoricalCountry | Array<HistoricalCountry>>;
	async historical(all?: boolean | null, country?: string | null, province?: string | null): Promise<Array<Historical | HistoricalCountry> | HistoricalCountry | HistoricalAll> {

		if (country && !province && !all) {

			return fetch(`${this.baseURL}/historical/${country}`).then(json);

		} else if (country && province && !all) {

			return fetch(`${this.baseURL}/historical/${country}/${province}`).then(json);

		} else if (all) {

			return fetch(`${this.baseURL}/historical/all`).then(json);

		}

		return fetch(`${this.baseURL}/historical`).then(json);

	}

	/**
	 * @description Return data from the John Hopkins CSSE Data Repository (Provinces and such).
	 * @param {?boolean} [countries=null] - If method should return counties
	 * @param {?string} countryname - for a specific County.
	 * @returns {Promise<Array<Jhucsse> | Array<JhucsseCounties>>}
	 */
	async jhucsse(): Promise<Array<Jhucsse>>;
	async jhucsse(counties?: boolean | null, countyname?: string | null): Promise<Array<JhucsseCounties>>;
	async jhucsse(counties?: boolean | null, countyname?: string | null): Promise<Array<Jhucsse | JhucsseCounties>> {

		if (counties && !countyname) {

			return fetch(`${this.baseURL}/jhucsse/counties`).then(json);

		} else if (counties && countyname) {

			return fetch(`${this.baseURL}/jhucsse/counties/${countyname}`).then(json);

		}

		return fetch(`${this.baseURL}/jhucsse`).then(json);

	}

	/**
	 * @description - Return all NYT state data or individual state data if specified. Each entry returned represents data for a given day.
	 * @param {?string} state - Specfic State.
	 * @returns {Promise<Array<NytState>>}
	 */
	async nytState(state?: string): Promise<Array<NytState>>
	async nytState(state?: string): Promise<Array<NytState>> {

		if (state) {

			return fetch(`${this.baseURL}/nyt/states/${state}`).then(json);

		}

		return fetch(`${this.baseURL}/nyt/states`).then(json);

	}

	/**
	 * @description - Return all NYT county data or individual county data if specified. Each entry returned represents data for a given day.
	 * @param {?string} county - Specfic county.
	 * @returns {Promise<Array<NytCounties>>}
	 */
	async nytCounties(county?: string): Promise<Array<NytCounties>>;
	async nytCounties(county?: string): Promise<Array<NytCounties>> {

		if (county) {

			return fetch(`${this.baseURL}/nyt/counties/${county}`).then(json);

		}

		return fetch(`${this.baseURL}/nyt/counties`).then(json);

	}

	/**
	 * @description - Return all NYT US nationwide data. Each entry returned represents data for a given day.
	 * @returns {Promise<Array<NytUSA>>}
	 */
	async nytUSA(): Promise<Array<NytUSA>> {

		return fetch(`${this.baseURL}/nyt/usa`).then(json);

	}

}

export interface NytUSA {
	date: string;
	cases: number;
	deaths: number;
}

export interface NytCounties {
	date: string;
	county: string | null;
	state: string;
	fips: number;
	cases: number;
	deaths: number;
}

export interface NytState {
	date: string;
	state: string;
	fips: number;
	cases: number;
	deaths: number;
}

export interface All {
	updated: number;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	continent: string;
	affectedCountries: number;
}

export interface Country {
	updated: number;
	country: string;
	countryInfo: {
		_id: number;
		iso3: string;
		iso2: string;
		lat: number;
		long: number;
		flag: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	continent: string;
}

export interface State {
	state: string;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	active: number;
	tests: number;
	testsPerOneMillion: number;
}

export interface Historical {
	country: string;
	province: string | null;
	timeline: Stats<object>;
}

export interface HistoricalCountry {
	country: string;
	provinces: string[] | null;
	timeline: Stats<object>;
}

export interface Jhucsse {
	country: string;
	province: Array<string> | string | null;
	updatedAt: string;
	stats: JhucsseStats<number>;
	coordinates: {
		latitude: string;
		longitude: string;
	};
}

export interface JhucsseCounties {
	country: string;
	province: string | null;
	updatedAt: string;
	county: string;
	stats: JhucsseStats<number>;
	coordinates: {
		latitude: string;
		longitude: string;
	};
}

export interface Continent {
	updated: number;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	active: number;
	critical: number;
	continent: string;
}

export interface ContinentE extends Continent {
	countries: Array<string>;
}

export interface HistoricalAll extends Stats<object> {}

export interface HistoricalUSA {
	province: string;
	country: null;
	timeline: Stat<object>;
}

export interface Stat<T> {
	cases: T;
	deaths: T;
}

export interface Stats<T> extends Stat<T> {
	recovered: T;
}

export interface JhucsseStats<T> {
	confirmed: T;
	deaths: T;
	recovered: T;
}

export interface AllOptions {
	yesterday?: yesterday;
}

export interface CountryOptions extends AllOptions {
	sort?: CountrySort;
	strict?: boolean;
}

export interface StateOptions extends AllOptions {
	sort?: Sort;
}

export interface ContinentOptions extends AllOptions {
	sort?: CountrySort;
	strict?: boolean;
}

export type Sort = 'cases' | 'todayCases' | 'deaths' | 'todayDeaths' | 'active';

export type CountrySort = Sort | 'recovered' | 'critical' | 'casesPerOneMillion' | 'deathsPerOneMillion';

export type yesterday = boolean | 1 | 0;

export default NovelCovid;

