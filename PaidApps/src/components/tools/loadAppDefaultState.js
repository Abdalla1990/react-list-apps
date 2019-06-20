import readJson from './readJson';
import { postList } from '../../actions/appsData';
import dispatcher from './dispatcher';

export default (dispatch, pathname)=>{
	if( !pathname ) {
		readJson().then( res => {
			let appsData = res.data;
			if(res.status === 200 && appsData){
					dispatcher(dispatch, postList, appsData)
					.catch((e)=>console.warn(e));
			}
		});
	}
}