const BaseURL = 'https://dev.naturalveneers.com/services/nservice_v1.php';

const APICONFIG = {
  Home: {
    // ShopList: BaseURL + 'static/list-all-vendor',
    Quotation_list: BaseURL ,
    // http://192.168.1.162:8000/api/user/list-market-product
    CityList: BaseURL + 'static/list-cities',
    SerViceList: BaseURL + 'static/list-businesses',
    VendorList: BaseURL + 'static/list-all-vendor',
    // static/list-all-vendor
    WeddingTrendsList: BaseURL + 'static/list-all-vendor',
  },
};

// localhost:8000/api/user/add-Quote

export default APICONFIG;
