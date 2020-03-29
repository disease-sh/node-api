import { NovelCovid } from './index';

const track = new NovelCovid();

async function test() {

	const x = await track.countries();

	console.log(x);
}
