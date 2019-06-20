import { map, find , propEq} from 'ramda';

export const buildAppsDataProps = ({ results = [] }) => map(({ id, name, genres, artworkUrl100: image }) =>({ id, name, genres, image }) )(results);

export const fetchAppPayload = ( { appId: id}, { appsData } ) => { 
    const  { name, artworkUrl100, releaseDate, kind, genres, artistName, artistUrl, url }  = find( propEq('id', id) )(appsData.results);
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
				value: artistUrl
			},
			{
				field: 'url',
				value: url
			},
    ];
    return { appName, appImage, appGenres, appDetailsFields};
}