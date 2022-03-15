import { StyleSheet } from 'react-native';
import { colors } from '../Colors';
const Styles = StyleSheet.create({
  // Styles start
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
    margin: 20,
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
    borderRadius: 10
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
  backgroundGray: {
    backgroundColor: 'lightgrey',
  },
  backgroundRed: {
    backgroundColor: colors.red,
  },
  backgroundPurple: {
    backgroundColor: colors.purpledark,
  },
  purple: {
    color: colors.purpledark
  }
});

export default Styles;
