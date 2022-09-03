import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  TextInput,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
// import { ip } from './IpAddress';
class Carousel extends React.Component {
  scrollRef = React.createRef();
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }
  componentDidMount = () => {
    // this.timer = setInterval(() => {
    //     this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1 }),
    //         () => {
    //             this.scrollRef.current.scrollTo({
    //                 animated: true,
    //                 y: 0,
    //                 x: Dimensions.get("window").width * this.state.selectedIndex
    //             })
    //         })
    // }, 7000)
  };
  componentWillUnmount() {
    // clearInterval(this.timer)
  }
  render() {
    const {selectedIndex} = this.state;
    const {images, text} = this.props;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const setSelectedIndex = event => {
      const contentOffset = event.nativeEvent.contentOffset;
      const viewSize = event.nativeEvent.layoutMeasurement;

      // Divide the horizontal offset by the width of the view to see which page is visible
      const selectedIndex = Math.ceil(contentOffset.x / viewSize.width);
      this.setState({selectedIndex});
    };
    // console.log(images);
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={setSelectedIndex}
          ref={this.scrollRef}>
          {images.map((item, i) => {
            return (
              <View key={i}>
                <Image
                  resizeMethod="scale"
                  resizeMode="stretch"
                  // source={{ uri: `${ip}${item.image}` }}
                  source={{uri: `${item.photo}`}}
                  style={{
                    width: width - 20,
                    height: 300,
                  }}
                  key={i}
                />
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: Math.ceil(height / 100) * 5,
            position: 'absolute',
            bottom: 0,
          }}>
          <View style={style.Circlediv}>
            {images.map((images, i) => {
              return (
                <View
                  key={i}
                  style={{
                    ...style.circle,
                    opacity: i === selectedIndex ? 1 : 0.5,
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  Circlediv: {
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    marginHorizontal: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'brown',
  },
});
export default Carousel;
