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
  disabled,
}) => {
  return (
    <View style={Theme.inputContainer}>
      <DropDownPicker
        style={[
          Theme.textInput,
          Theme.paddingHorizonal20p,
          disabled ? Theme.backgroundGray : Theme.backgroundWhite,
        ]}
        dropDownContainerStyle={[Theme.borderRadius0p, Theme.borderLightGrey]}
        listItemContainerStyle={Theme.height50p}
        itemSeparator={true}
        itemSeparatorStyle={Theme.backgroundGray}
        onOpen={onOpen}
        ArrowUpIconComponent={() => <Icon size={25} name="closecircleo" />}
        zIndex={zIndex}
        open={open}
        autoScroll={true}
        setOpen={setOpen}
        value={value}
        listMode="SCROLLVIEW"
        items={items ? items : []}
        disableBorderRadius={true}
        setValue={setValue}
        textStyle={[Theme.textCaption]}
        labelStyle={Theme.textCaption}
        setItems={setItems}
        placeholder="Select"
        showTickIcon={false}
        selectedItemLabelStyle={Theme.purple}
        placeholderStyle={Theme.grey}
        min={4}
        disabled={disabled}
        max={4}
        mode="BADGE"
        dropDownDirection={dropDownDirection ? dropDownDirection : 'BOTTOM'}
      />
      {title ? (
        <Text
          style={[
            Theme.textInputLabelStyle,
            {zIndex: zIndexTitle ? zIndexTitle : Theme.zIndex2},
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
