import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../Redux/actions/profile';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  LinearButton,
  MultiSelect,
  DropDownButton,
} from '../../Components';
import axiosService from '../../service/axios';

const Location = ({navigation}) => {
  const dis = useDispatch();
  const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile.user);
  const [country, setCountry] = useState(profile.partnerpref.country);
  const [countryItems, setCountryItems] = useState([
    {label: 'Algeria', value: 'Algeria'},
    {label: 'Afghanistan', value: 'Afghanistan'},
    {label: 'Albania', value: 'Albania'},
    {label: 'American Samoa', value: 'American Samoa'},
    {label: 'Andorra', value: 'Andorra'},
    {label: 'Angola', value: 'Angola'},
    {label: 'Anguilla', value: 'Anguilla'},
    {label: 'Antigua & Barbuda', value: 'Antigua & Barbuda'},
    {label: 'Argentina', value: 'Argentina'},
    {label: 'Aruba', value: 'Aruba'},
    {label: 'Australia', value: 'Australia'},
    {label: 'Armenia', value: 'Armenia'},
    {label: 'Austria', value: 'Austria'},
    {label: 'Bahrain', value: 'Bahrain'},
    {label: 'Bahamas', value: 'Bahamas'},
    {label: 'Bangladesh', value: 'Bangladesh'},
    {label: 'Azerbaijan', value: 'Azerbaijan'},
    {label: 'Barbados', value: 'Barbados'},
    {label: 'Belize', value: 'Belize'},
    {label: 'Belarus', value: 'Belarus'},
    {label: 'Belgium', value: 'Belgium'},
    {label: 'Bermuda', value: 'Bermuda'},
    {label: 'Benin', value: 'Benin'},
    {label: 'Bhutan', value: 'Bhutan'},
    {label: 'Bolivia', value: 'Bolivia'},
    {label: 'Brazil', value: 'Brazil'},
    {label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina'},
    {label: 'Botswana', value: 'Botswana'},
    {label: 'British Virgin Islands', value: 'British Virgin Islands'},
    {label: 'Brunei', value: 'Brunei'},
    {label: 'Burundi', value: 'Burundi'},
    {label: 'Burkina Faso', value: 'Burkina Faso'},
    {label: 'Bulgaria', value: 'Bulgaria'},
    {label: 'Cambodia', value: 'Cambodia'},
    {label: 'Cameroon', value: 'Cameroon'},
    {label: 'Cape Verde', value: 'Cape Verde'},
    {label: 'Canada', value: 'Canada'},
    {label: 'Caribbean Netherlands', value: 'Caribbean Netherlands'},
    {label: 'Cayman Island', value: 'Cayman Island'},
    {label: 'Chad', value: 'Chad'},
    {label: 'Central African Republic', value: 'Central African Republic'},
    {label: 'Chile', value: 'Chile'},
    {label: 'Colombia', value: 'Colombia'},
    {label: 'China', value: 'China'},
    {label: 'Comoros', value: 'Comoros'},
    {label: 'Congo', value: 'Congo'},
    {label: 'Congo (DRC)', value: 'Congo (DRC)'},
    {label: 'Cook Island', value: 'Cook Island'},
    {label: 'Costa Rica', value: 'Costa Rica'},
    {label: 'Curaçao', value: 'Curaçao'},
    {label: 'Cuba', value: 'Cuba'},
    {label: 'Croatia', value: 'Croatia'},
    {label: 'Cyprus', value: 'Cyprus'},
    {label: 'Djibouti', value: 'Djibouti'},
    {label: 'Czech Republic', value: 'Czech Republic'},
    {label: 'Denmark', value: 'Denmark'},
    {label: 'Dominica', value: 'Dominica'},
    {label: 'Dominican Republic', value: 'Dominican Republic'},
    {label: 'Ecuador', value: 'Ecuador'},
    {label: 'Egypt', value: 'Egypt'},
    {label: 'El Salvador', value: 'El Salvador'},
    {label: 'Equatorial Guinea', value: 'Equatorial Guinea'},
    {label: 'Eritrea', value: 'Eritrea'},
    {label: 'Estonia', value: 'Estonia'},
    {label: 'Ethiopia', value: 'Ethiopia'},
    {label: 'Falklands Islands', value: 'Falklands Islands'},
    {label: 'Finland', value: 'Finland'},
    {label: 'Faroe Islands', value: 'Faroe Islands'},
    {label: 'Fiji', value: 'Fiji'},
    {label: 'France', value: 'France'},
    {label: 'Gabon', value: 'Gabon'},
    {label: 'French Guiana', value: 'French Guiana'},
    {label: 'French Polynesia', value: 'French Polynesia'},
    {label: 'Gambia', value: 'Gambia'},
    {label: 'Georgia', value: 'Georgia'},
    {label: 'Germany', value: 'Germany'},
    {label: 'Ghana', value: 'Ghana'},
    {label: 'Grenada', value: 'Grenada'},
    {label: 'Gibraltar', value: 'Gibraltar'},
    {label: 'Greece', value: 'Greece'},
    {label: 'Greenland', value: 'Greenland'},
    {label: 'Guernsey', value: 'Guernsey'},
    {label: 'Guinea', value: 'Guinea'},
    {label: 'Guinea-Bissau', value: 'Guinea-Bissau'},
    {label: 'Guyana', value: 'Guyana'},
    {label: 'Guam', value: 'Guam'},
    {label: 'Honduras', value: 'Honduras'},
    {label: 'Guadeloupe', value: 'Guadeloupe'},
    {label: 'Guatemala', value: 'Guatemala'},
    {label: 'Haiti', value: 'Haiti'},
    {label: 'Hong Kong', value: 'Hong Kong'},
    {label: 'Hungary', value: 'Hungary'},
    {label: 'Iceland', value: 'Iceland'},
    {label: 'India', value: 'India'},
    {label: 'Indonesia', value: 'Indonesia'},
    {label: 'Iran', value: 'Iran'},
    {label: 'Iraq', value: 'Iraq'},
    {label: 'Ireland', value: 'Ireland'},
    {label: 'Isle of Men', value: 'Isle of Men'},
    {label: 'Israel', value: 'Israel'},
    {label: 'Italy', value: 'Italy'},
    {label: 'Ivory Coast', value: 'Ivory Coast'},
    {label: 'Jamaica', value: 'Jamaica'},
    {label: 'Japan', value: 'Japan'},
    {label: 'Jersey', value: 'Jersey'},
    {label: 'Jordan', value: 'Jordan'},
    {label: 'Kazakhstan', value: 'Kazakhstan'},
    {label: 'Kenya', value: 'Kenya'},
    {label: 'Kiribati', value: 'Kiribati'},
    {label: 'Kosovo', value: 'Kosovo'},
    {label: 'Kuwait', value: 'Kuwait'},
    {label: 'Kyrgyzstan', value: 'Kyrgyzstan'},
    {label: 'Laos', value: 'Laos'},
    {label: 'Latvia', value: 'Latvia'},
    {label: 'Lebanon', value: 'Lebanon'},
    {label: 'Lesotho', value: 'Lesotho'},
    {label: 'Liberia', value: 'Liberia'},
    {label: 'Libya', value: 'Libya'},
    {label: 'Liechtenstein', value: 'Liechtenstein'},
    {label: 'Lithuania', value: 'Lithuania'},
    {label: 'Luxembourg', value: 'Luxembourg'},
    {label: 'Macau', value: 'Macau'},
    {label: 'Macedonia', value: 'Macedonia'},
    {label: 'Madagascar', value: 'Madagascar'},
    {label: 'Malawi', value: 'Malawi'},
    {label: 'Malaysia', value: 'Malaysia'},
    {label: 'Maldives', value: 'Maldives'},
    {label: 'Mali', value: 'Mali'},
    {label: 'Malta', value: 'Malta'},
    {label: 'Marshall Islands', value: 'Marshall Islands'},
    {label: 'Martinique', value: 'Martinique'},
    {label: 'Mauritania', value: 'Mauritania'},
    {label: 'Mauritius', value: 'Mauritius'},
    {label: 'Mayotte', value: 'Mayotte'},
    {label: 'Mexico', value: 'Mexico'},
    {label: 'Micronesia', value: 'Micronesia'},
    {label: 'Moldova', value: 'Moldova'},
    {label: 'Monaco', value: 'Monaco'},
    {label: 'Mongolia', value: 'Mongolia'},
    {label: 'Montenegro', value: 'Montenegro'},
    {label: 'Montserrat', value: 'Montserrat'},
    {label: 'Morocco', value: 'Morocco'},
    {label: 'Mozambique', value: 'Mozambique'},
    {label: 'Myanmar', value: 'Myanmar'},
    {label: 'Namibia', value: 'Namibia'},
    {label: 'Nauru', value: 'Nauru'},
    {label: 'Nepal', value: 'Nepal'},
    {label: 'Netherlands', value: 'Netherlands'},
    {label: 'New Caledonia', value: 'New Caledonia'},
    {label: 'New Zealand', value: 'New Zealand'},
    {label: 'Nicaragua', value: 'Nicaragua'},
    {label: 'Niger', value: 'Niger'},
    {label: 'Nigeria', value: 'Nigeria'},
    {label: 'Niue', value: 'Niue'},
    {label: 'North Korea', value: 'North Korea'},
    {label: 'Northern Mariana Islands', value: 'Northern Mariana Islands'},
    {label: 'Norway', value: 'Norway'},
    {label: 'Oman', value: 'Oman'},
    {label: 'Pakistan', value: 'Pakistan'},
    {label: 'Palau', value: 'Palau'},
    {label: 'Palestine', value: 'Palestine'},
    {label: 'Panama', value: 'Panama'},
    {label: 'Papua New Guinea', value: 'Papua New Guinea'},
    {label: 'Paraguay', value: 'Paraguay'},
    {label: 'Peru', value: 'Peru'},
    {label: 'Philippines', value: 'Philippines'},
    {label: 'Poland', value: 'Poland'},
    {label: 'Portugal', value: 'Portugal'},
    {label: 'Puerto Rico', value: 'Puerto Rico'},
    {label: 'Qatar', value: 'Qatar'},
    {label: 'Reunion', value: 'Reunion'},
    {label: 'Romania', value: 'Romania'},
    {label: 'Russia', value: 'Russia'},
    {label: 'Rwanda', value: 'Rwanda'},
    {label: 'Saint Helena', value: 'Saint Helena'},
    {label: 'Saint Kitts & Nevis', value: 'Saint Kitts & Nevis'},
    {label: 'Saint Lucia', value: 'Saint Lucia'},
    {label: 'Saint martin', value: 'Saint martin'},
    {
      label: 'Saint Vincent & the Grenadines',
      value: 'Saint Vincent & the Grenadines',
    },
    {label: 'Samoa', value: 'Samoa'},
    {label: 'San Marino', value: 'San Marino'},
    {label: 'Sao Tome and Principe', value: 'Sao Tome and Principe'},
    {label: 'Saudi Arabia', value: 'Saudi Arabia'},
    {label: 'Senegal', value: 'Senegal'},
    {label: 'Serbia', value: 'Serbia'},
    {label: 'Seychelles', value: 'Seychelles'},
    {label: 'Sierra Leone', value: 'Sierra Leone'},
    {label: 'Singapore', value: 'Singapore'},
    {label: 'Slovakia', value: 'Slovakia'},
    {label: 'Slovenia', value: 'Slovenia'},
    {label: 'Solomon Island', value: 'Solomon Island'},
    {label: 'Somalia', value: 'Somalia'},
    {label: 'South Africa', value: 'South Africa'},
    {label: 'South Korea', value: 'South Korea'},
    {label: 'South Sudan', value: 'South Sudan'},
    {label: 'Spain', value: 'Spain'},
    {label: 'Sri Lanka', value: 'Sri Lanka'},
    {label: 'Sudan', value: 'Sudan'},
    {label: 'Suriname', value: 'Suriname'},
    {label: 'Swaziland', value: 'Swaziland'},
    {label: 'Sweden', value: 'Sweden'},
    {label: 'Switzerland', value: 'Switzerland'},
    {label: 'Syria', value: 'Syria'},
    {label: 'Taiwan', value: 'Taiwan'},
    {label: 'Tajikistan', value: 'Tajikistan'},
    {label: 'Tanzania', value: 'Tanzania'},
    {label: 'Thailand', value: 'Thailand'},
    {label: 'Timor-Leste', value: 'Timor-Leste'},
    {label: 'Togo', value: 'Togo'},
    {label: 'Tonga', value: 'Tonga'},
    {label: 'Trinidad and Tobago', value: 'Trinidad and Tobago'},
    {label: 'Tunisia', value: 'Tunisia'},
    {label: 'Turkey', value: 'Turkey'},
    {label: 'Turkmenistan', value: 'Turkmenistan'},
    {label: 'Turks and Caicos Island', value: 'Turks and Caicos Island'},
    {label: 'Tuvalu', value: 'Tuvalu'},
    {label: 'UAE', value: 'UAE'},
    {label: 'Uganda', value: 'Uganda'},
    {label: 'UK', value: 'UK'},
    {label: 'Ukraine', value: 'Ukraine'},
    {label: 'Uruguay', value: 'Uruguay'},
    {label: 'US Virgin Island', value: 'US Virgin Island'},
    {label: 'USA', value: 'USA'},
    {label: 'Uzbekistan', value: 'Uzbekistan'},
    {label: 'Vanuatu', value: 'Vanuatu'},
    {label: 'Vatican City', value: 'Vatican City'},
    {label: 'Venezuela', value: 'Venezuela'},
    {label: 'Vietnam', value: 'Vietnam'},
    {label: 'Wallis and Futuna', value: 'Wallis and Futuna'},
    {label: 'Western Sahara', value: 'Western Sahara'},
    {label: 'Yemen', value: 'Yemen'},
    {label: 'Zambia', value: 'Zambia'},
    {label: 'Zimbabwe', value: 'Zimbabwe'},
  ]);
  const [countryOpen, setCountryOpen] = useState(false);

  // useEffect(() => {
  //   axiosService(auth.token)
  //     .get('/location/country')
  //     .then(resp => {
  //       console.log(resp.data.data);
  //       setCountryItems(resp.data.data);
  //     })
  //     .catch(er => {
  //       console.log(er.response.data);
  //     });
  // }, [auth.token]);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Location"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <MultiSelect
          title="Location"
          state={countryOpen}
          array={countryItems}
          selectedItems={profile.partnerpref.country}
          onPressCancel={() => setCountryOpen(!countryOpen)}
          onPress={data => {
            setCountry(data);
            setCountryOpen(false);
          }}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <DropDownButton
                title="Location"
                text={
                  country.length === 0
                    ? "Doesn't matter"
                    : country.toString().replace(/,/g, ' , ')
                }
                onPress={() => setCountryOpen(!countryOpen)}
              />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Save"
                    onPress={() => {
                      dis(
                        updateProfile({
                          partnerpref: {
                            ...profile.partnerpref,
                            country: country,
                          },
                        }),
                      );
                      navigation.goBack();
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
                    color="lightgrey"
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

export default Location;
