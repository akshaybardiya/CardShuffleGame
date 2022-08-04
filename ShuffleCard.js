import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ShuffleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabetsArray: [
        {
          id: 1,
          value: 'A',
        },
        {
          id: 2,
          value: 'B',
        },
        {
          id: 3,
          value: 'C',
        },
        {
          id: 4,
          value: 'D',
        },
        {
          id: 5,
          value: 'E',
        },
        {
          id: 6,
          value: 'F',
        },
        {
          id: 7,
          value: 'G',
        },
        {
          id: 8,
          value: 'H',
        },
        {
          id: 9,
          value: 'A',
        },
        {
          id: 10,
          value: 'B',
        },
        {
          id: 11,
          value: 'C',
        },
        {
          id: 12,
          value: 'D',
        },
        {
          id: 13,
          value: 'E',
        },
        {
          id: 14,
          value: 'F',
        },
        {
          id: 15,
          value: 'G',
        },
        {
          id: 16,
          value: 'H',
        }
      ],
      id: '',
      value: '',
      count: 0,
      alphabetsArray1: []
    };
  }

  componentDidMount = async () => {
    this.shuffle()
  };

  shuffle = () => {
    let alphabetsArray = this.state.alphabetsArray
    let alphabetsArray1 = []
    alphabetsArray1 = alphabetsArray.sort(() => Math.random() - 0.5)
    this.setState({alphabetsArray1})
  }

  countMark = (id, value) => {
    console.log("id", id+" "+value)
    let count = this.state.count
    this.setState({value: value})
    if(this.state.value === value){
      count = count + 1
      this.setState({count})
    }
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: hp("20%")}}>
          <Text style={{textAlign: 'right', marginRight: wp("10%")}}>Count: {this.state.count}</Text>
        <FlatList
          contentContainerStyle={{ flexDirection: 'column', width: wp("88%"), marginLeft: wp("3%"), marginTop: hp("5%"), alignSelf: 'center' }}
          numColumns={4}
          data={this.state.alphabetsArray1}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => <View style={{ flexDirection: 'row', marginVertical: hp("1%") }}><TouchableOpacity onPress={() => { this.setState({id: item.id},()=>this.countMark(item.id,item.value)) }} style={{ borderWidth: 1, paddingVertical: hp("2%5"), width: wp("19%"), alignItems: 'center', marginRight: wp("2%"), borderRadius: 16, borderColor: 'grey' }}>
            <Text style={{ color: 'red' }}>{item.value}</Text>
          </TouchableOpacity></View>}
          // horizontal
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </View>
    );
  }
}
