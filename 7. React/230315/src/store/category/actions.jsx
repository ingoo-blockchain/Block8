import { CATEGORY_REQUEST_SUCCESS, CATEGORY_REQUEST_ERROR, CATEGORY_REQUEST_START} from './types'
import request from '../../utils/request'

export const RequestSuccess = (payload) => ({ type:CATEGORY_REQUEST_SUCCESS, payload})
export const RequestError = (payload) => ({ type:CATEGORY_REQUEST_ERROR, payload})


// export const CategoryRequest = (props) => {
//     return async (dispatch) => {
//         dispatch({type:CATEGORY_REQUEST_START})
//         try {
//             const response = await request.get('/categories')
//             dispatch(RequestSuccess(response.data))
//         } catch (error) {
//             dispatch(RequestError(error))
//         }
//     }
// }

export const CategoryRequest = (props) => (dispatch) => {
    dispatch({type:CATEGORY_REQUEST_START}) 

    const success = ({data}) => dispatch(RequestSuccess(data))
    const error = error => dispatch(RequestError(error))

    request.get('/categories').then(success).catch(error)
}

