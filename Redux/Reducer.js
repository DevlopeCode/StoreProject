
import {
  GET_ALL_QUATIONLIST,
  GET_ALL_QUATIONDETAILS,
  GET_CATAGORY_LIST,
  SET_INQUIRY_CODE
} from './Constants';



const initialState={
  allquotaion:'',
  quataiondetails : '',
  categorylist:''
}
function userReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_QUATIONLIST:
      return {
        ...state,
        allquotaion: action.payload,
      };
      case GET_ALL_QUATIONDETAILS:
        return {
          ...state,
          quataiondetails: action.payload,
        };
        case GET_CATAGORY_LIST:
          return {
            ...state,
            categorylist: action.payload,
          };
          case SET_INQUIRY_CODE:
            return {
              ...state,
              inquirycode: action.payload,
            };
    default:
      return state;
  }
}
export default userReducer;
