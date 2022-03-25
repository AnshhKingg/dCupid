import React from 'react';
import { View } from 'react-native';
import { Theme } from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

propStyle = (percent, base_degrees) => {
    const rotateBy = base_degrees + (percent * 3.6);
    return {
        transform: [{ rotateZ: `${rotateBy}deg` }]
    };
}

renderThirdLayer = (percent) => {
    if (percent > 50) {
        return <View style={[Theme.secondProgressLayer, propStyle((percent - 50), 45)]}></View>
    } else {
        return <View style={Theme.offsetLayer}></View>
    }
}

const CircularProgress = ({ percent }) => {
    let firstProgressLayerStyle;
    if (percent > 50) {
        firstProgressLayerStyle = propStyle(50, -135);
    } else {
        firstProgressLayerStyle = propStyle(percent, -135);
    }

    return (
        <View style={Theme.container}>
            <View style={[Theme.firstProgressLayer, firstProgressLayerStyle]}></View>
            {renderThirdLayer(percent)}
            <Icon style={{ position: 'absolute' }} name="photo" size={40} color="black" />
        </View>
    );
}


export default CircularProgress;