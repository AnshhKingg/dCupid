import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { Theme } from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearButton, LinearGradient } from '.';
import { colors } from '../Assets/Colors';
import moment from 'moment-timezone';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../service/axios';
import { getConversationsRequested, getConversations, getConversationsDeclined } from '../Redux/actions'

const ChatRequestComponent = ({ onPress, conversationData,
    onPressProfile, disableButton, data }) => {
    const dis = useDispatch()
    const profile = useSelector(state => state.profile.user)
    const token = useSelector(state => state.auth.token)
    const [like, setLike] = useState(profile.userLikes.includes(data._id) ? true : false)
    const trust = ((data.photos.length > 0 ? 1 : 0) + (data.mobileVerifed ? 1 : 0) + (data.photoID ? 1 : 0) + (data.emailVerified ? 1 : 0)) * 25
    const ageCalc = (date) => {
        const newdate = new Date()
        const age = moment(newdate).diff(moment(date), 'years')
        return age;
    };
    const accept = (status) => {
        axiosServ(token).post(`/chat/accept`, {
            'userId': route.params.receiverId,
            'status': status
        }).then((resp) => {
            dis(getConversations())
            dis(getConversationsDeclined())
            dis(getConversationsRequested())
        }).catch((er) => {
            Alert.alert('Error', 'Unable to perform this action.')
        })
    }
    const [selectedIndex, setSelectedIndex] = useState(0);
    const setIndex = event => {
        const contentOffset = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement;

        // Divide the horizontal offset by the width of the view to see which page is visible
        const selected = Math.ceil(contentOffset.x / viewSize.width);
        setSelectedIndex(selected);
    };
    return (
        <View style={[Theme.width100p, Theme.borderRadius10, Theme.marginBottom10, Theme.borderRed]}>
            <ScrollView
                horizontal
                contentContainerStyle={{ alignItems: 'center' }}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={setIndex}>
                <View style={[Theme.row]}>
                    {data.photos.length === 0 ?
                        <View style={[
                            Theme.imageMatchingProfileWidth,
                            Theme.alignContentCenter
                        ]}>
                            <Icon name="user" size={230} color="black" />
                        </View>
                        :
                        data.photos.map((data) => {
                            return <Image
                                source={{ uri: `${data.photo}` }}
                                style={[
                                    Theme.imageMatchingProfileWidth,
                                    Theme.alignCenter,
                                ]}
                            />
                        })
                    }
                </View>
                <View style={Theme.CircledivDown}>
                    {data.photos.map((data, i) => {
                        return (
                            <View
                                key={i}
                                style={[
                                    Theme.circle,
                                    i === selectedIndex ? Theme.opacityFull : Theme.opacityHalf,
                                ]}
                            />
                        );
                    })}
                </View>
                <LinearGradient
                    style={[
                        Theme.imageMatchingVerticalComponent,
                        Theme.alignContentCenter,
                    ]}>
                    <Text style={[Theme.textTitle, Theme.white, Theme.textCenter]}>
                        {trust}% Trust Score
                    </Text>
                </LinearGradient>
                {
                    profile.userLikes.includes(data._id) ?
                        <LinearGradient
                            style={[
                                Theme.imageMatchingHorizontalComponent,
                                Theme.alignContentCenter,
                            ]}>
                            <Text style={[Theme.textTitle, Theme.white]}>He likes you</Text>
                        </LinearGradient>
                        :
                        null
                }
            </ScrollView>
            <LinearGradient
                style={[Theme.width100p, Theme.padding10, Theme.alignContentCenter]}>
                <TouchableOpacity
                    onPress={onPressProfile}
                    disabled={disableButton ? true : false}>
                    <Text style={[Theme.textCaption, Theme.white]}>{data.name}  {ageCalc(data.dob)}</Text>
                    <Text style={[Theme.textCaption, Theme.white]}>
                        {data.skin}   {data.marital}   {data.religion}
                    </Text>

                    <View style={[Theme.width100p, Theme.marginVertical10]}>
                        <Text style={[Theme.textBody, Theme.white]} numberOfLines={1}>
                            Last message :  {conversationData.lastMessage}
                        </Text>
                    </View>

                    <View
                        style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
                        <View
                            style={[
                                Theme.width50p,
                                Theme.paddingHorizonal10p,
                                Theme.alignCenter,
                            ]}>
                            <LinearButton title='Reply' onPress={onPress} />
                        </View>
                        <View
                            style={[
                                Theme.width50p,
                                Theme.paddingHorizonal10p,
                                Theme.alignCenter,
                            ]}>
                            <TouchableOpacity
                                style={[
                                    Theme.width100p,
                                    Theme.buttonLook,
                                    Theme.alignContentCenter,
                                    Theme.textBold,
                                    Theme.backgroundWhite,
                                ]}
                                onPress={() => {
                                    accept(2)
                                }}>
                                <Text style={[Theme.textTitle, Theme.textBold, Theme.purple]}>Decline</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

export default ChatRequestComponent;
