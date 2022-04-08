import React, {useEffect, useState} from 'react';

import {SafeAreaView, Text, View, TextInput, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Icon} from 'react-native-elements';
import {All_Quotaton_list} from '../Redux/Actions';

import {setItem} from '../AsyncStorageData';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const Responst2 = useSelector(state => state?.userReducer?.allquotaion);
  const [listQuataion, setlistQuataion] = useState([]);
  useEffect(() => {
    dispatch(All_Quotaton_list());
  }, []);

  const onPressEnquiry = inquirycode => {
    const Headerresponse = JSON.parse(Responst2.config.data);
    const detailHeader = {
      user_type: Headerresponse.user_type,
      status_id: Headerresponse.status_id,
      start_index: Headerresponse.start_index,
      type_id: Headerresponse.type_id,
      action: 'orderdetail',
      auth_token: Headerresponse.auth_token,
      page_size: Headerresponse.page_size,
      inquiry_code: inquirycode,
    };
    setItem('myheader', JSON.stringify(detailHeader));
    navigation.navigate('Details');
  };

  const renderItem = (item, index) => {
    return (
      <View
        key={index}
        style={{
          height: 60,
          width: '100%',
          backgroundColor: '#E7E7E7',
          marginVertical: 5,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 4.5,
            // backgroundColor: 'yellow',
            paddingLeft: 5,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', width: '90%'}}>
            inq#{item.inquiry_code} ({item.total_items} Items) | ({item.sheets}{' '}
            Sheets) | {item.created_at}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'green',
            paddingRight: 8,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Icon
            name="navigate-next"
            type="material"
            color="black"
            size={30}
            style={{marginTop: 20}}
            onPress={() => onPressEnquiry(item.inquiry_code)}
          />
        </View>
      </View>
    );
  };

  // <View
  //       style={{
  //         backgroundColor: '#E7E7E7',
  //         height: 50,
  //         marginVertical: 8,
  //         alignContent: 'center',
  //         flexDirection: 'row',
  //       }}>
  //
  // <Icon
  //   name="arrow-forward"
  //   type="material-icons"
  //   color="black"
  //   size={15}
  //   style={{marginTop: 20}}
  //   onPress={() => navigation.navigate('Details')}
  // />
  //     </View>

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 55,
          backgroundColor: '#cde5c3',
          padding: 10,
        }}>
        <View
          style={{
            borderRadius: 5,
            flex: 1,
            flexDirection: 'row',
            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <View style={{flex: 7, backgroundColor: 'red'}}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: 'white',
                color: 'black',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              marginLeft: -1,
              alignItems: 'center',
            }}>
            <Icon
              // reverse
              name="highlight-off"
              type="material"
              color="#bfbfbf"
              size={25}
            />
          </View>
        </View>
      </View>

      <ScrollView>
        <>
          {Responst2?.data?.data &&
            Responst2.data.data.map((item, index) => {
              return renderItem(item, index);
            })}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
