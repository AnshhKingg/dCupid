import React from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
} from 'react-native';
import {Theme} from '../Assets/Styles';

const ModalComponent = ({children, state, onPressCancel}) => {
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[Theme.flex1, Theme.alignContentCenter, Theme.blackFaded]}
        onPress={onPressCancel}>
        <ScrollView
          contentContainerStyle={[
            Theme.flexGrow,
            Theme.padding10,
            Theme.alignContentCenter,
          ]}>
          <TouchableWithoutFeedback style={[Theme.backgroundWhite]}>
            {children}
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalComponent;
