import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header, PickerInput, LinearButton, TextInput } from '../../Components';

const Drinks = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={[Theme.height100p]}>
                <Header title="Edit Profile" left="arrowleft" leftnav={() => navigation.goBack()} />
                <ScrollView style={[]}>
                    <View style={[Theme.width100p]}>
                        <View style={[Theme.selectedItems, Theme.padding10]}>

                            <PickerInput title="Drink" />
                            <PickerInput title="Smoke" />
                            <PickerInput title="Diet" />

                            <View style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                                    <LinearButton
                                        title="Save"
                                        onPress={() => {
                                            navigation.navigate('dashboard');
                                        }}
                                    />
                                </View>
                                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                                    <LinearButton
                                        noGradient={true}
                                        title="Cancel"
                                        onPress={() => {
                                            navigation.goBack();
                                        }}
                                        color='lightgrey'
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Drinks;
