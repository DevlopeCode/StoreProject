import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';
import {GET_DATA_LIST} from '../Redux/Actions';
import {useSelector, useDispatch} from 'react-redux';
import {getItem} from '../AsyncStorageData';
import {getDetailsData} from '../Redux/Actions';
import {CatagoryList} from '../Redux/Actions';
import {QuotaionDetails} from '../Redux/Actions';
import {Overlay} from 'react-native-elements';
import OVERLAY_MODAL from './Component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Size = [
  {id: '1', name: '2.44 X 1.22', total: 2.9765},
  {id: '2', name: '1.22 X 2.44', total: 2.9768},
  {id: '3', name: '2.14 X 1.22', total: 2.6108},
  {id: '3', name: '1.22 X 2.14', total: 2.6108},
];
const Details = ({navigation}) => {
  const dispatch = useDispatch();
  const DetailsList = useSelector(
    state => state?.userReducer?.quataiondetails?.data?.data,
  );
  const Catogory = useSelector(
    state => state?.userReducer?.categorylist?.request?._response,
  );

  const [ValueaddedProcessModal, setValueaddedProcessModal] = useState(false);
  const [VeenerThiknessModal, setVeenerThiknessModal] = useState(false);
  const [PLaywoodCatogryModal, setPLaywoodCatogryModal] = useState(false);
  const [GrainDirectionModal, setGrainDirectionModal] = useState(false);
  const [PlaywoodthiknessModal, setPlaywoodthiknessModal] = useState(false);
  const [SizePickerModal, setSizePickerModal] = useState(false);
  const [valueaddedprocess, setvalueaddedprocess] = useState('');
  const [veenerthikness, setveenerthikness] = useState('');
  const [playwoodcategory, setplaywoodcategory] = useState('');
  const [graincatogory, setgraincatogory] = useState('');
  const [playwoodthikness, setplaywoodthikness] = useState('');
  const [playsize, setplaysize] = useState('');
  const [quantity, setquantity] = useState(null);
  const [mmtoFoot, setmmtoFoot] = useState(1);
  const [totalzze, settotalzze] = useState('');
  let form_data = new FormData();
  useEffect(() => {
    dispatch(QuotaionDetails());
    dispatch(CatagoryList());
    switch (playsize) {
      case '2.44 X 1.22':
        setmmtoFoot(2.9768);
        break;
      case '1.22 X 2.44':
        setmmtoFoot(2.9768);
        break;
      case '2.14 X 1.22':
        setmmtoFoot(2.6108);
        break;
      case '1.22 X 2.14':
        setmmtoFoot(2.6108);
        break;
      default:
        setmmtoFoot(1);
    }
    // switch (playwoodcategory) {
    //   case 'Regular (8x4)':
    //     setsqfeet(32);
    //     break;
    //   case 'Long Plus (12x4)':
    //     setsqfeet(48);
    //     break;
    //   case 'Long (10x4)':
    //     setsqfeet(40);
    //     break;
    //   case 'Shorts (7x4) / (3x8)':
    //     setsqfeet(28);
    //     break;
    //   default:
    //     setsqfeet(1);
    // }
    settotalzze(mmtoFoot * quantity);
  }, [playsize, playwoodcategory, quantity]);

  console.log({
    inquiry_id: '200',
    form_data: [{veneers_thickness: ['1']}],
    action: 'updatequation',
    auth_token: '3287641598717661',
  });

  const PrizeBox = item => {
    // console.log(item.item);
    return (
      <>
        <View
          style={{
            height: 60,
            // backgroundColor: 'pink',
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setSizePickerModal(true)}
            style={{
              flex: 1.3,
              height: '80%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderRadius: 5,
              borderWidth: 1,
            }}>
            {/* <Text>{playsize}</Text> */}
            <Text>{!playsize ? item.item.size_name : playsize.name}</Text>
          </TouchableOpacity>
          <TextInput
            style={{
              flex: 0.5,
              height: '80%',
              justifyContent: 'center',
              backgroundColor: 'white',
              margin: 5,
              textAlign: 'center',
              borderRadius: 5,
              borderWidth: 1,
            }}
            onChangeText={setquantity}
            value={!quantity ? item.item.quantity : quantity}></TextInput>
          <Text style={{flex: 0.8, textAlign: 'center'}}>
            {item.item.final_sqft}
          </Text>
          <View
            style={{
              flex: 0.5,
              backgroundColor: '#37A856',
              borderRadius: 5,
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Add</Text>
          </View>
        </View>
      </>
    );
  };

  const ServiceIItemList = props => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}
          lineBreakMode={true}>
          {props.headding1}
        </Text>
        <Text
          style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}
          lineBreakMode={true}>
          {props.headding2}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          switch (props.headding1) {
            case 'Value Added':
              setValueaddedProcessModal(true);
              break;
            case 'Veener':
              setVeenerThiknessModal(true);
              break;
            case 'Plywood':
              setPLaywoodCatogryModal(true);
              break;
            case 'Grain':
              setGrainDirectionModal(true);
              break;
            case 'Plywood':
              setPlaywoodthiknessModal(true);
          }
        }}
        style={{
          borderColor: '#B0AEB1',
          borderWidth: 1,
          width: windowWidth / 2.7,
          height: windowHeight / 18,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 6,
          borderRadius: 5,
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>{props.inputitem}</Text>
        <Icon name="caret-down" type="font-awesome" color="black" />
      </TouchableOpacity>
    </View>
  );
  const renderlist = item => {
    return (
      <KeyboardAvoidingView style={{padding: 10, backgroundColor: '#f2f2f2'}}>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            {item.item.product_name}
          </Text>
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
            }}>
            <Icon color={'white'} name="clear" type="material" />
          </View>
        </View>
        <View style={{height: 350, flexDirection: 'row'}}>
          <Image
            source={{
              uri: item.item.image,
            }}
            style={{flex: 1}}></Image>

          <View
            style={{
              width: windowWidth / 1.5,
              justifyContent: 'space-around',
            }}>
            <ServiceIItemList
              headding1={'Value Added'}
              headding2={'Process'}
              inputitem={valueaddedprocess.name}
            />
            <ServiceIItemList
              headding1={'Veener'}
              headding2={'Thikness:'}
              inputitem={veenerthikness.name}
            />
            <ServiceIItemList
              headding1={'Plywood'}
              headding2={'Categery:'}
              inputitem={playwoodcategory.name}
            />
            <ServiceIItemList
              headding1={'Grain'}
              headding2={'Direction'}
              inputitem={graincatogory.name}
            />
            <ServiceIItemList
              headding1={'Plywood'}
              headding2={'Thikness:'}
              inputitem={playwoodthikness.name}
            />
          </View>
        </View>
        <View style={{width: '30%', alignItems: 'center'}}>
          <Text
            style={{color: 'black', alignItems: 'center', fontWeight: 'bold'}}>
            P{item.item.product_id && item.item.product_id}
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
          }}>
          <List text="Size" />
          <List text="Qty" />
          <List text="Total(SqFt)" />
        </View>
        <FlatList
          data={item.item.sizes_quantity}
          renderItem={item => PrizeBox(item)}
        />
        <View
          style={{
            // backgroundColor: 'red',
            height: 40,
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Total Amount :</Text>

          <View
            style={{
              height: '100%',
              width: 150,
              marginLeft: 13,
              backgroundColor: '#DEDEE0',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {item.item.sizes_quantity && item.item.sizes_quantity[0].rate}
              {/* {item.item.sizes_quantity &&
                Math.floor(
                  totalzze * quantity * item.item.sizes_quantity[0].sqft_rate,
                )} */}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };

  const List = ({text}) => (
    <View
      style={{
        flex: 1,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, color: '#0F0F0F', fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
  // console.log('ValueaddedProcessModal=>>>>>>>>>>>>>', ValueaddedProcessModal);
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'white', padding: 7}}>
      <OVERLAY_MODAL
        datalist={Catogory && JSON.parse(Catogory).data[0].data}
        isVisible={ValueaddedProcessModal}
        onBackdropPressX={() => {
          setValueaddedProcessModal(false);
        }}
        Hedding={'Value added Process'}
        onSelect={item => {
          setvalueaddedprocess(item);
          setValueaddedProcessModal(false);
        }}
      />
      <OVERLAY_MODAL
        datalist={Catogory && JSON.parse(Catogory).data[3].data}
        isVisible={VeenerThiknessModal}
        onBackdropPressX={() => {
          setVeenerThiknessModal(false);
        }}
        Hedding={'Veener Thikness'}
        onSelect={item => {
          setveenerthikness(item);
          setVeenerThiknessModal(false);
        }}
      />
      <OVERLAY_MODAL
        datalist={Catogory && JSON.parse(Catogory).data[1].data}
        isVisible={PLaywoodCatogryModal}
        onBackdropPressX={() => {
          setPLaywoodCatogryModal(false);
        }}
        Hedding={'Plywood Catogery'}
        onSelect={item => {
          setplaywoodcategory(item);
          setPLaywoodCatogryModal(false);
        }}
      />
      <OVERLAY_MODAL
        datalist={Catogory && JSON.parse(Catogory).data[4].data}
        isVisible={GrainDirectionModal}
        onBackdropPressX={() => {
          setGrainDirectionModal(false);
        }}
        Hedding={'Grain Direction'}
        onSelect={item => {
          setgraincatogory(item);
          setGrainDirectionModal(false);
        }}
      />
      <OVERLAY_MODAL
        datalist={Catogory && JSON.parse(Catogory).data[2].data}
        isVisible={PlaywoodthiknessModal}
        onBackdropPressX={() => {
          setPlaywoodthiknessModal(false);
        }}
        Hedding={'Grain Direction'}
        onSelect={item => {
          setplaywoodthikness(item);
          setPlaywoodthiknessModal(false);
        }}
      />
      <OVERLAY_MODAL
        datalist={Size}
        isVisible={SizePickerModal}
        onBackdropPressX={() => {
          setSizePickerModal(false);
        }}
        Hedding={'Ply Size'}
        onSelect={item => {
          setplaysize(item);
          setSizePickerModal(false);
        }}
      />

      <View style={{flex: 1}}>
        <FlatList
          data={DetailsList}
          renderItem={item => renderlist(item)}
          showsVerticalScrollIndicator={false}
        />

        <View
          style={{
            height: 50,
            backgroundColor: 'white',
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.replace('Home')}
            style={{
              flex: 1,
              backgroundColor: '#37A856',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              CANCEL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.replace('Home')}
            style={{
              flex: 1,
              backgroundColor: '#37A856',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              CONFIRM
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Details;

const styles = StyleSheet.create({});
