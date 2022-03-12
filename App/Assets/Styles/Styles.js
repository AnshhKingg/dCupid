import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
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
  mainHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  subHeading: {
    color: 'white',
    fontSize: 15,
  },
  marginLeft10: {
    marginLeft: 10,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop15: {
    marginTop: 15,
  },
  mainHeadingView: {
    padding: 10,
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  space: {
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  commonViewLeft: {
    height: 100,
    width: '30%',
  },
  commonViewRight: {
    height: 100,
    width: '70%',
    marginLeft: 10,
  },
  buttonLook: {
    backgroundColor: '#f33b6a',
    height: 50,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  commonImage: {
    height: '90%',
    width: '100%',
  },
  commonParent: {
    padding: 10,
  },
  orderHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
  orderSubHeading: {
    fontSize: 12,
    fontWeight: '300',
    color: 'grey',
  },
  orderPrice: {
    fontSize: 20,
    color: 'maroon',
  },
  totalTitle: {
    fontSize: 20,
  },
  totalValue: {
    fontSize: 20,
    color: 'grey',
  },
  gtotalTitle: {
    fontSize: 23,
    fontWeight: '600',
  },
  gtotalValue: {
    fontSize: 23,
    fontWeight: '600',
  },
  checkoutHeadings: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '700',
  },
  selectedBox: {
    borderColor: '#f33b6a',
    borderWidth: 1,
    borderRadius: 5,
    height: 'auto',
    padding: 10,
  },
  unselectedBox: {
    // borderColor:'#f33b6a',
    borderWidth: 1,
    borderRadius: 5,
    height: 'auto',
    padding: 10,
  },
  addressHeading: {
    color: '#f33b6a',
    fontWeight: 'bold',
  },
  iconStyle: {
    alignSelf: 'center',
    color: '#f33b6a',
  },
  height100p: {
    height: '100%',
  },
  width10p: {
    width: '10%',
  },
  width80p: {
    width: '80%',
  },
  width90p: {
    width: '90%',
  },
});

export default Styles;
