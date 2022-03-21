import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header } from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../Assets/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CircularProgressBar = () => {
    return (
        <View style={Theme.circularBackground}>
            <View style={Theme.circularForeground}>
                <Icon name="user" size={50} color="black" />
            </View>
        </View>
    );
};

const Dashboard = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={[Theme.height100p]}>
                <Header left="menuunfold" right="home" title="Dashboard" />
                <ScrollView contentContainerStyle={[Theme.alignContentCenter]}>
                    <View style={[Theme.width100p, Theme.separator]}>
                        <View style={[Theme.width100p, Theme.row]}>
                            <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                                <LinearGradient
                                    colors={[colors.purplelight, colors.purpledark]}
                                    style={[
                                        Theme.mediumButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundBlue,
                                    ]}>
                                    <Icon name="user" size={30} color="white" />
                                </LinearGradient>
                                <Text style={[Theme.textBody]}>Profile</Text>
                            </View>

                            <View
                                style={[
                                    Theme.flex1,
                                    Theme.padding10,
                                    Theme.alignCenter,
                                    Theme.borderRight,
                                    Theme.borderLeft,
                                ]}>
                                <LinearGradient
                                    colors={[colors.purplelight, colors.purpledark]}
                                    style={[
                                        Theme.mediumButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundBlue,
                                    ]}>
                                    <Icon name="photo" size={30} color="white" />
                                </LinearGradient>
                                <Text style={[Theme.textBody]}>Photos</Text>
                            </View>

                            <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                                <LinearGradient
                                    colors={[colors.purplelight, colors.purpledark]}
                                    style={[
                                        Theme.mediumButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundBlue,
                                    ]}>
                                    <Icon name="user" size={30} color="white" />
                                </LinearGradient>
                                <Text style={[Theme.textBody, Theme.textCenter]}>
                                    Partner preference
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={[Theme.width100p, Theme.separator]}>
                        <View style={[Theme.width100p, Theme.row]}>
                            <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                                <CircularProgressBar />
                            </View>

                            <View
                                style={[
                                    Theme.flex1,
                                    Theme.padding10,
                                    Theme.alignContentCenter,
                                ]}>
                                <Text style={[Theme.textBody, Theme.textCenter]}>
                                    Trust Factor
                                </Text>
                                <Text style={[Theme.textHeader, Theme.textCenter]}>40%</Text>
                            </View>
                        </View>
                        <Text style={[Theme.textCaption, Theme.textCenter]}>
                            Trust score determines your profile credibility
                        </Text>
                    </View>

                    <View style={[Theme.width100p, Theme.separator, Theme.marginBottom0]}>
                        <View style={[Theme.width100p, Theme.row]}>
                            <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                                <View
                                    style={[
                                        Theme.smallButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundGray,
                                    ]}>
                                    <Icon name="user" size={20} color="black" />
                                </View>
                                <Text style={[Theme.textBody, Theme.textCenter]}>
                                    Verify Email 20%
                                </Text>
                            </View>

                            <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                                <View
                                    style={[
                                        Theme.smallButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundGray,
                                    ]}>
                                    <Icon name="photo" size={20} color="black" />
                                </View>
                                <Text style={[Theme.textBody, Theme.textCenter]}>
                                    Verify mobile 20%
                                </Text>
                            </View>

                            <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                                <View
                                    style={[
                                        Theme.smallButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundGray,
                                    ]}>
                                    <Icon name="user" size={25} color="black" />
                                </View>
                                <Text style={[Theme.textBody, Theme.textCenter]}>
                                    Verify Photo ID 20%
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={[Theme.width100p, Theme.separator]}>
                        <View style={[Theme.width100p, Theme.row]}>
                            <View style={[Theme.flex1, Theme.alignCenter, Theme.padding5]}>
                                <View>
                                    <Icon name="heart-o" size={70} color="grey" />
                                    <View
                                        colors={[colors.purplelight, colors.purpledark]}
                                        style={[
                                            Theme.notificationLook,
                                            Theme.alignContentCenter,
                                            Theme.backgroundBlue,
                                        ]}>
                                        <Text style={[Theme.textCaption, Theme.white]}>9</Text>
                                    </View>
                                </View>
                                <Text style={[Theme.textCaption, Theme.textCenter]}>Likes</Text>
                            </View>

                            <View
                                style={[
                                    Theme.flex1,
                                    Theme.alignCenter,
                                    Theme.padding5,
                                    Theme.borderLeft,
                                    Theme.borderRight,
                                ]}>
                                <View>
                                    <IconFeather name="message-square" size={70} color="grey" />
                                </View>
                                <Text style={[Theme.textCaption, Theme.textCenter]}>
                                    Messages
                                </Text>
                            </View>

                            <View style={[Theme.flex1, Theme.alignCenter, Theme.padding5]}>
                                <View>
                                    <IconMaterial
                                        name="message-text-outline"
                                        size={70}
                                        color="grey"
                                    />
                                </View>
                                <Text style={[Theme.textCaption, Theme.textCenter]}>
                                    Chat requests
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={[Theme.width100p, Theme.separator]}>
                        <View style={[Theme.width100p, Theme.padding10]}>
                            <View style={[Theme.row, Theme.alignCenter]}>
                                <LinearGradient
                                    colors={[colors.purplelight, colors.purpledark]}
                                    style={[
                                        Theme.smallButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundBlue,
                                    ]}>
                                    <Icon name="user" size={25} color="white" />
                                </LinearGradient>
                                <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                                    My Matches
                                </Text>
                            </View>
                            <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                                View all profiles who matches your partner preferences.{' '}
                            </Text>
                            <View
                                style={[
                                    Theme.width100p,
                                    Theme.alignContentCenter,
                                    Theme.padding10,
                                ]}>
                                <LinearGradient
                                    style={[
                                        Theme.width100p,
                                        Theme.buttonLook,
                                        Theme.alignContentCenter,
                                    ]}
                                    colors={[colors.purplelight, colors.purpledark]}>
                                    <TouchableOpacity
                                        style={[Theme.width100p, Theme.alignContentCenter]}>
                                        <Text style={[Theme.textBody, Theme.white]}>
                                            View matching profiles
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>

                    <View style={[Theme.width100p, Theme.separator]}>
                        <View style={[Theme.width100p, Theme.padding10]}>
                            <View style={[Theme.row, Theme.alignCenter]}>
                                <LinearGradient
                                    colors={[colors.purplelight, colors.purpledark]}
                                    style={[
                                        Theme.smallButtonLook,
                                        Theme.alignContentCenter,
                                        Theme.backgroundBlue,
                                    ]}>
                                    <Icon name="search" size={25} color="white" />
                                </LinearGradient>
                                <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                                    Search
                                </Text>
                            </View>
                            <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                                View all profiles who matches your partner preferences.{' '}
                            </Text>
                            <View
                                style={[
                                    Theme.width100p,
                                    Theme.alignContentCenter,
                                    Theme.padding10,
                                ]}>
                                <LinearGradient
                                    style={[
                                        Theme.width100p,
                                        Theme.buttonLook,
                                        Theme.alignContentCenter,
                                    ]}
                                    colors={[colors.purplelight, colors.purpledark]}>
                                    <TouchableOpacity
                                        style={[Theme.width100p, Theme.alignContentCenter]}>
                                        <Text style={[Theme.textBody, Theme.white]}>
                                            Search now
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Dashboard;
