import {
  GET_ALL_QUATIONLIST,
  GET_ALL_QUATIONDETAILS,
  GET_CATAGORY_LIST,
  SET_INQUIRY_CODE
} from './Constants';
import axios from 'axios';
import { getItem } from '../AsyncStorageData';


const allquotaion = {"user_type":"dealer","status_id":"52","start_index":0,"type_id":"267","action":"orderslist","auth_token":"3287641598717661","page_size":10}



export const All_Quotaton_list = () => async dispatch => {
  const Response = await axios.post(
    'https://dev.naturalveneers.com/services/nservice_v1.php',allquotaion
  );
  console.log("QuotaionDetails=>>>>>>>>>>>>>>>>>",Response )
  dispatch({
    type: GET_ALL_QUATIONLIST,
    payload: Response,
  });
};






export const QuotaionDetails = () => async dispatch => {
  const head = await getItem('myheader') ;


  const Response = await axios.post(
    'https://dev.naturalveneers.com/services/nservice_v1.php',head
  );
  // console.log("QuotaionDetails=>>>>>>>>>>>>>>>>",Response )
  dispatch({
    type: GET_ALL_QUATIONDETAILS,
    payload: Response,
  });
};



export const CatagoryList = () => async dispatch => {

  const Response = await axios.post(
    'https://dev.naturalveneers.com/services/nservice_v1.php',{"user_type":"dealer","type_id":"267","action":"get_quotation_form","auth_token":"3287641598717661"}
  );
  dispatch({
    type: GET_CATAGORY_LIST,
    payload: Response,
  });
};







export const setInquirycode = () => async dispatch => {

  
  dispatch({
    type: SET_INQUIRY_CODE,
    payload: Response,
  });
};





