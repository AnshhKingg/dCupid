import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../Colors';
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
  height100p: {
    height: '100%',
  },
  height3p: {
    height: 3,
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
    color: 'black',
  },
  inputContainer: {
    borderRadius: 3,
    marginVertical: 10,
  },
  textXl: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  textTitle: {
    fontSize: 20,
    color: 'black',
  },
  textBody: {
    fontSize: 18,
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
  justifyCenter: {
    justifyContent: 'center',
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
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
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
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 15,
    position: 'absolute',
    top: -10,
    right: -20,
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
  profileIcon: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
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
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: 'white',
  },

  //slider
  sliderWidth: {
    width: width * 4,
  },
  fullWidth: {
    width: width,
  },
  width90: {
    width: width * 0.9,
  },

  //Circular bar
  circularBackground: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 15,
    borderColor: 'lightgrey',
  },
  circularForeground: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 15,
    borderColor: 'lightgrey',
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
});

export default Styles;
