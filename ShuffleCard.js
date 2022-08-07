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
          status: ''
        },
        {
          id: 2,
          value: 'B',
          status: ''
        },
        {
          id: 3,
          value: 'C',
          status: ''
        },
        {
          id: 4,
          value: 'D',
          status: ''
        },
        {
          id: 5,
          value: 'E',
          status: ''
        },
        {
          id: 6,
          value: 'F',
          status: ''
        },
        {
          id: 7,
          value: 'G',
          status: ''
        },
        {
          id: 8,
          value: 'H',
          status: ''
        },
        {
          id: 9,
          value: 'A',
          status: ''
        },
        {
          id: 10,
          value: 'B',
          status: ''
        },
        {
          id: 11,
          value: 'C',
          status: ''
        },
        {
          id: 12,
          value: 'D',
          status: ''
        },
        {
          id: 13,
          value: 'E',
          status: ''
        },
        {
          id: 14,
          value: 'F',
          status: ''
        },
        {
          id: 15,
          value: 'G',
          status: ''
        },
        {
          id: 16,
          value: 'H',
          status: ''
        }
      ],
      id: '',
      value: '',
      count: 0,
      attempts: 0,
      alphabetsArray1: [],
      alphabet: '',
      prev: -1
    };
  }

  componentDidMount = async () => {
    this.shuffle()
  };

  shuffle = () => {
    let alphabetsArray = this.state.alphabetsArray
    let alphabetsArray1 = []
    alphabetsArray1 = alphabetsArray.sort(() => Math.random() - 0.5)
    this.setState({ alphabetsArray1 })
  }

  check = (current) => {
    let count = 0
    if (this.state.alphabetsArray1[current].id == this.state.alphabetsArray1[this.state.prev].id) {
      this.setState({ prev: -1 })
    }
    else {
      if (this.state.alphabetsArray1[current].value === this.state.alphabetsArray1[this.state.prev].value) {
        count = this.state.count + 1
        this.state.alphabetsArray1[current].status = "correct"
        this.state.alphabetsArray1[this.state.prev].status = "correct"
        this.setState([...this.state.alphabetsArray1])
        this.setState({ prev: -1, count })
      } else {
        this.state.alphabetsArray1[current].status = "wrong"
        this.state.alphabetsArray1[this.state.prev].status = "wrong"
        this.setState([...this.state.alphabetsArray1])
        setTimeout(() => {
          this.state.alphabetsArray1[current].status = ""
          this.state.alphabetsArray1[this.state.prev].status = ""
          this.setState([...this.state.alphabetsArray1])
          this.setState({ prev: -1 })
        }, 500)
      }
    }
  }

  handleClick = (id) => {
    let attempts = this.state.attempts
    if (this.state.prev === -1) {
      this.state.alphabetsArray1[id].status = "active"
      this.setState([...this.state.alphabetsArray1])
      this.setState({ prev: id })
    } else {
      this.setState({
        attempts: this.state.attempts + 1
      }, () => this.check(id)
      )
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: hp("15%") }}>
        <Text style={{ textAlign: 'center', fontSize: hp("3.5%") }}>Memory Game</Text>
          <View style={{flexDirection: 'row', marginTop: hp("5%"), justifyContent: 'space-between'}}>
            <Text style={{ textAlign: 'left', marginLeft: wp("8%"),  fontSize: hp("2.8%") }}>Attempts: {this.state.attempts}</Text>
            <Text style={{ textAlign: 'right', marginRight: wp("10%"), fontSize: hp("2.8%") }}>Matches: {this.state.count}</Text>
          </View>
          <FlatList
            contentContainerStyle={{ flexDirection: 'column', width: wp("88%"), marginLeft: wp("3%"), marginTop: hp("5%"), alignSelf: 'center' }}
            numColumns={4}
            data={this.state.alphabetsArray1}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => <View style={{ flexDirection: 'row', marginVertical: hp("1%") }}>
              <TouchableOpacity disabled={item.status == "correct"} onPress={() => { this.setState({ id: index }, () => this.handleClick(index)) }}
                style={{ borderWidth: 1, paddingVertical: hp("2%5"), width: wp("19%"), alignItems: 'center', marginRight: wp("2%"), borderRadius: 16, borderColor: 'grey', backgroundColor: item.status === "correct" ? "green" : item.status === "wrong" ? "red" : "#FFF" }}>
                <Text style={{ color: item.status === "active" ? "#000" : "#FFF" }}>{item.value}</Text>
              </TouchableOpacity></View>}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
