import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../Colors';
const width = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  // Styles start
  flex2: {
    flex: 2,
  },
  flex6: {
    flex: 6,
  },
  flex4: {
    flex: 4,
  },
  flex1: {
    flex: 1,
  },
  flex5: {
    flex: 5,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  OtpContainer: {
    width: '100%',
    height: 80,
  },
  height100p: {
    height: '100%',
  },
  height50p: {
    height: 50,
  },
  height3p: {
    height: 3,
  },
  maxWidth80: {
    maxWidth: '80%',
  },
  maxWidth70: {
    maxWidth: '70%',
  },
  maxWidth20: {
    maxWidth: '20%',
  },
  width100p: {
    width: '100%',
  },
  width50p: {
    width: '50%',
  },
  width60p: {
    width: '60%',
  },
  width40p: {
    width: '40%',
  },
  width80p: {
    width: '80%',
  },
  width70p: {
    width: '70%',
  },
  width30p: {
    width: '30%',
  },
  width20p: {
    width: '20%',
  },
  width90p: {
    width: '90%',
  },
  width5p: {
    width: '5%',
  },
  width7p: {
    width: '7%',
  },
  width6p: {
    width: '6%',
  },
  width10p: {
    width: '10%',
  },
  heightImage: {
    height: 300,
  },
  marginBottom0: {
    marginBottom: 0,
  },
  margin30: {
    margin: 30,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginHorizontal5: {
    marginHorizontal: 5,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginVertical5: {
    marginVertical: 5,
  },
  padding5: {
    padding: 5,
  },
  padding2: {
    padding: 2,
  },
  padding10: {
    padding: 10,
  },
  paddingHorizonal5p: {
    paddingHorizontal: 5,
  },
  paddingVertical5p: {
    paddingVertical: 5,
  },
  paddingHorizonal10p: {
    paddingHorizontal: 10,
  },
  paddingHorizonal20p: {
    paddingHorizontal: 20,
  },
  paddingVertical10p: {
    paddingVertical: 10,
  },
  paddingVertical20p: {
    paddingVertical: 20,
  },
  paddingHorizonal30p: {
    paddingHorizontal: 30,
  },
  paddingVertical30p: {
    paddingVertical: 30,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },
  paddingBottom30: {
    paddingBottom: 30,
  },
  paddingBottom20: {
    paddingBottom: 20,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  heightAuto: {
    height: 'auto',
  },
  borderRadius0p: {
    borderRadius: 0,
  },
  textInput: {
    width: '100%',
    borderRadius: 4,
    borderWidth: 0.6,
    borderColor: 'lightgrey',
    height: 55,
  },
  textInputLabelStyle: {
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: 'white',
    fontSize: 16,
    color: colors.purpledark,
    zIndex: 10,
  },
  toastFontBig: {
    fontSize: 18,
    color: 'black',
  },
  toastFontMed: {
    fontSize: 16,
    color: 'black',
  },
  zIndex2: {
    zIndex: 2,
  },
  inputContainer: {
    borderRadius: 3,
    marginVertical: 10,
  },
  chatTextInputStyle: {
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: 'orange',
    borderRadius: 40,
    fontSize: 18,
  },
  textXl: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
  },
  textHeader: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
  },
  textTitle: {
    fontSize: 22,
    color: 'black',
  },
  textBody: {
    fontSize: 20,
    color: 'black',
  },
  textBlack: {
    color: 'black',
  },
  textCaption: {
    fontSize: 16,
    color: 'black',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  textFontWeight0: {
    fontWeight: 'normal',
  },
  textUnderLine: {
    textDecorationLine: 'underline',
  },
  spacingViewHorizontal: {
    margin: '4%',
    padding: 10,
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  textInputButton: {
    position: 'absolute',
    right: -20,
    bottom: -10,
    borderRadius: 2,
    width: 100,
    height: 55,
  },
  alignCenter: {
    alignItems: 'center',
  },
  selfAlignCenter: {
    alignSelf: 'center',
  },
  selfAlignStart: {
    alignSelf: 'flex-start',
  },
  selfAlignEnd: {
    alignSelf: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpcArnd: {
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
  },
  justifySpcBtw: {
    justifyContent: 'space-between',
  },
  alignContentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 5,
  },
  drawerSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    marginVertical: 5,
  },
  drawerHeight: {
    height: 60,
  },
  totalView: {
    height: 'auto',
    backgroundColor: 'white',
    margin: '4%',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  selectedItems: {
    height: 'auto',
    backgroundColor: 'white',
    margin: '4%',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    height: 35,
    margin: 5,
    borderRadius: 20,
  },
  buttonLook: {
    backgroundColor: 'gray',
    height: 60,
    margin: 10,
    borderRadius: 30,
  },
  flatButton: {
    backgroundColor: 'gray',
    height: 60,
    margin: 10,
    borderRadius: 5,
  },
  notificationLook: {
    width: 25,
    height: 25,
    margin: 0,
    borderRadius: 12.5,
    position: 'absolute',
    top: -0,
    right: -10,
  },
  profileIconNotification: {
    width: 30,
    height: 30,
    margin: 0,
    borderRadius: 15,
    position: 'absolute',
    bottom: -0,
    right: 0,
  },
  vsmallButtonLook: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  smallButtonLook: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 20,
  },
  mediumButtonLook: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
  },
  largeButtonLook: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
  profileIcon: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 35,
  },
  borderRed: {
    borderWidth: 1,
    borderColor: 'red',
  },
  borderBox: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  borderLeft: {
    borderLeftWidth: 0.25,
    borderLeftColor: 'black',
  },
  borderRight: {
    borderRightWidth: 0.25,
    borderRightColor: 'black',
  },
  borderLineMargin: {
    marginVertical: 5,
  },
  borderRadius10: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  borderRadius5: {
    borderRadius: 5,
  },
  trashPos: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  pendingButtonPos: {
    position: 'absolute',
    bottom: 10,
  },
  absolutePos: {
    position: 'absolute',
  },

  //colors

  red: {
    color: colors.red,
  },
  blue: {
    color: colors.blue,
  },
  white: {
    color: 'white',
  },
  grey: {
    color: 'grey',
  },
  blackFaded: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  backgroundGray: {
    backgroundColor: 'lightgrey',
  },
  backgroundRed: {
    backgroundColor: colors.red,
  },
  backgroundPurple: {
    backgroundColor: colors.purpledark,
  },
  backgroundBlue: {
    backgroundColor: colors.blue,
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  backgroundPink: {
    backgroundColor: colors.pink,
  },
  purple: {
    color: colors.purpledark,
  },
  borderBlue: {
    borderColor: 'blue',
  },
  borderLightGrey: {
    borderColor: 'lightgrey',
  },
  Circlediv: {
    position: 'absolute',
    top: 10,
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  CircledivDown: {
    position: 'absolute',
    bottom: 10,
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: colors.purpledark,
  },

  //slider
  sliderWidth: {
    width: width * 4,
  },
  fullWidth: {
    width: width,
  },
  imageMatchingProfileWidth: {
    width: width - 22,
    height: 300,
  },
  imageMatchingVerticalComponent: {
    width: 60,
    height: 90,
    position: 'absolute',
    top: 0,
    left: 20,
  },
  imageMatchingHorizontalComponent: {
    width: 150,
    height: 40,
    position: 'absolute',
    bottom: 40,
    left: 0,
  },
  width90: {
    width: width * 0.9,
  },

  //Circular bar
  container: {
    width: 120,
    height: 120,
    borderWidth: 15,
    borderRadius: 60,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 120,
    height: 120,
    borderWidth: 15,
    borderRadius: 60,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: colors.purpledark,
    borderTopColor: colors.purpledark,
    transform: [{ rotateZ: '-135deg' }],
  },
  secondProgressLayer: {
    width: 120,
    height: 120,
    borderWidth: 15,
    borderRadius: 60,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: colors.purpledark,
    borderTopColor: colors.purpledark,
    transform: [{ rotateZ: '45deg' }],
  },
  offsetLayer: {
    width: 120,
    height: 120,
    borderWidth: 15,
    borderRadius: 60,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'lightgrey',
    borderTopColor: 'lightgrey',
    transform: [{ rotateZ: '-135deg' }],
  },
  //Otp Styles
  underlineStyleBase: {
    width: (width - 20 - (width * 8) / 100) / 6,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    height: 60,
    borderWidth: 1,
    borderColor: 'grey',
  },
  opacityFull: {
    opacity: 1,
  },
  opacityHalf: {
    opacity: 0.5,
  },
});

export default Styles;
