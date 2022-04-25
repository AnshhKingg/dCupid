import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomPickerInput = ({
  title,
  error,
  zIndex,
  zIndexTitle,
  dropDownDirection,
  items,
  value,
  setValue,
  setItems,
  onOpen,
  open,
  setOpen,
}) => {
  return (
    <View style={Theme.inputContainer}>
      <DropDownPicker
        style={[Theme.textInput, Theme.paddingHorizonal20p]}
        dropDownContainerStyle={[Theme.borderRadius0p, Theme.borderLightGrey]}
        listItemContainerStyle={Theme.height50p}
        itemSeparator={true}
        itemSeparatorStyle={Theme.backgroundGray}
        onOpen={onOpen}
        ArrowUpIconComponent={() => <Icon size={25} name="closecircleo" />}
        zIndex={zIndex}
        open={open}
        setOpen={setOpen}
        value={value}
        listMode="SCROLLVIEW"
        items={items ? items : []}
        disableBorderRadius={true}
        setValue={setValue}
        textStyle={[Theme.textCaption]}
        labelStyle={Theme.textCaption}
        setItems={setItems}
        showTickIcon={false}
        selectedItemLabelStyle={Theme.purple}
        placeholderStyle={Theme.grey}
        min={4}
        max={4}
        mode="BADGE"
        dropDownDirection={dropDownDirection ? dropDownDirection : 'BOTTOM'}
      />

      {title ? (
        <Text
          style={[
            Theme.textInputLabelStyle,
            {zIndex: zIndexTitle ? zIndexTitle : 2},
          ]}>
          {' '}
          {title}{' '}
        </Text>
      ) : null}
      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomPickerInput;
