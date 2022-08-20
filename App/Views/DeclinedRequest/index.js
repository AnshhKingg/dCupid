import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header, ChatDeclinedComp } from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { connect } from 'socket.io-client'
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

const MessageTile = ({ onPress, data }) => {
    let dateData = moment(data.createdAt).isSame(new Date(), "day");
    if (dateData) {
        dateData = moment(data.createdAt).format('hh:mm')
    } else {
        dateData = moment(data.createdAt).format('DD-MM-YYYY')
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                Theme.width100p,
                Theme.row,
                Theme.separator,
                Theme.alignContentCenter,
            ]}>
            <View style={[Theme.width20p]}>
                <View style={[Theme.alignContentCenter, Theme.profileIcon]}>
                    <Icon name={'user-circle'} size={50} color="black" />
                </View>
            </View>
            <View
                style={[
                    Theme.width80p,
                    Theme.paddingVertical5p,
                    Theme.alignContentCenter,
                    Theme.paddingHorizonal10p,
                ]}>
                <View
                    style={[
                        Theme.width100p,
                        Theme.alignCenter,
                        Theme.justifySpcBtw,
                        Theme.row,
                        Theme.marginBottom10,
                    ]}>
                    <View style={[Theme.width60p]}>
                        <Text style={[Theme.textBody, Theme.textBold]} numberOfLines={1}>
                            {data.userData.name}
                        </Text>
                    </View>
                    <View style={[Theme.width40p]}>
                        <Text style={[Theme.selfAlignEnd]}>{dateData}</Text>
                    </View>
                </View>
                <View
                    style={[
                        Theme.width100p,
                        Theme.alignCenter,
                        Theme.justifySpcBtw,
                        Theme.row,
                    ]}>
                    <View style={[Theme.width80p]}>
                        <Text style={[]} numberOfLines={1}>
                            {data.conversationData.lastMessage}
                        </Text>
                    </View>

                    {
                        data.unread === 0 ?
                            null
                            :
                            <View
                                style={[
                                    Theme.width20p,
                                    Theme.backgroundBlue,
                                    Theme.alignContentCenter,
                                    Theme.vsmallButtonLook,
                                ]}>
                                <Text style={[Theme.white]}>{data.conversationData.unread}</Text>
                            </View>
                    }

                </View>
            </View>
        </TouchableOpacity>
    );
};

const DeclinedRequests = ({ navigation }) => {
    const msglist = useSelector(state => state.chatDeclined.data)

    // const socket = useRef(connect("http://ec2-3-110-117-121.ap-south-1.compute.amazonaws.com:5000"))
    useEffect(() => {
        // socket.current.on('connect', () => {
        //   console.log(socket.current.id)
        // })

    }, [])
    return (
        <>
            <SafeAreaView style={[Theme.height100p]}>
                <Header
                    left="menuunfold"
                    right="home"
                    title="Declined Chats"
                    leftnav={() => navigation.openDrawer()}
                    rightnav={() => navigation.navigate('dashboard')}
                />

                <FlatList
                    contentContainerStyle={[Theme.width100p, Theme.flexGrow, Theme.padding10]}
                    data={msglist}
                    showsVerticalScrollIndicator={true}
                    key={data => data._id}
                    renderItem={(data) => {
                        return <ChatDeclinedComp
                            data={data.item.userData}
                            conversationData={data.item.conversationData}
                            onPress={() => navigation.navigate('chat', { receiverId: data.item._id, name: data.item.name })}
                            onPressProfile={() => navigation.navigate('otherprofile', { data: data.item.userData })}
                        />
                    }}
                />
            </SafeAreaView>
        </>
    );
};

export default DeclinedRequests;
