import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import {Theme} from '../Assets/Styles';

class Carousel extends React.Component {
  scrollRef = React.createRef();
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      visible: false,
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
    const {images} = this.props;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const setSelectedIndex = event => {
      const contentOffset = event.nativeEvent.contentOffset;
      const viewSize = event.nativeEvent.layoutMeasurement;
      // Divide the horizontal offset by the width of the view to see which page is visible
      const selectedIndex = Math.ceil(contentOffset.x / viewSize.width);
      this.setState({...this.state, selectedIndex: selectedIndex});
    };
    const view = images.map(data => {
      return {
        uri: data.photo,
      };
    });
    const Count = ({imageIndex}) => {
      return (
        <View
          style={[Theme.width100p, Theme.alignContentCenter, Theme.padding10]}>
          <Text style={[Theme.textHeader, Theme.white]}>
            {imageIndex + 1}/{view.length}
          </Text>
        </View>
      );
    };
    return (
      <View>
        <ImageView
          images={view}
          imageIndex={0}
          visible={this.state.visible}
          onRequestClose={() => this.setState({...this.state, visible: false})}
          doubleTapToZoomEnabled
          FooterComponent={Count}
        />
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={setSelectedIndex}
          ref={this.scrollRef}>
          {images.map((item, i) => {
            return (
              <TouchableOpacity
                // onPress={() => this.setState({...this.state, visible: true})}
                activeOpacity={1}
                onPress={() =>
                  !this.props.disabled
                    ? this.props.onPress()
                    : this.setState({...this.state, visible: true})
                }
                key={i}>
                <Image
                  resizeMethod="scale"
                  resizeMode="stretch"
                  source={{uri: `${item.photo}`}}
                  style={{
                    width: width - 22,
                    height: 350,
                  }}
                  key={i}
                />
              </TouchableOpacity>
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
