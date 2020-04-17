/* eslint-disable @typescript-eslint/no-floating-promises */
import NovelCovid from './index';

const track = new NovelCovid();

(async () => {
	 // console.log(await track.all({ yesterday: true }));

	 // console.log(await track.all());

	console.log(await track.countries('India', { yesterday: true, strict: true }));
	console.log(await track.countries('India'));
	// console.log(await track.countries(null, { sort: 'active' }));
})();
