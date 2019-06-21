import { map, filter, find, propEq, pipe } from 'ramda';

export const buildAppsDataProps = ({ results = [] }) => search => pipe(
	map(({ id, name, genres, artworkUrl100: image }) =>({ id, name, genres, image }) ),
	filter( app => 
		app.genres !== undefined  && app.genres.length && search !== "" ?
		find(genre => genre.name && genre.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)(app.genres) :
		app
	),
)(results);

export const fetchAppPayload = ( { appId: id}, { appsData } ) => { 
	if( appsData.length === 0 ) {
		return undefined;
	}
	const  { name, artworkUrl100, releaseDate, kind, genres, artistName, artistUrl, url }  = appsData && appsData.results && appsData.results.length && find( propEq('id', id) )(appsData.results);
	const appName = name;
	const appImage= artworkUrl100;
	const appGenres = genres;
	const appDetailsFields = [
		{
			field: 'releaseDate',
			value: releaseDate,
		},
		{
			field: 'kind',
			value: kind
		},
		{
			field: 'artistName',
			value: artistName
		},
		{
			field: 'artistUrl',
			value: artistUrl,
			type: 'url'
		},
		{
			field: 'url',
			value: url,
			type: 'url'
		},
	];
	return { appName, appImage, appGenres, appDetailsFields};
}