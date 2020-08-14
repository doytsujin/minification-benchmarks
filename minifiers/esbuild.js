const pMapSeries = require('p-map-series');
const esbuild = require('esbuild');
const { measure } = require('../utils');

module.exports = async (code) => {
	const service = await esbuild.startService();

	const result = await pMapSeries([{
		name: 'esbuild',
		minify: async () => (await service.transform(code, { minify: true })).js,
	}], measure);

	service.stop();

	return result;
};
