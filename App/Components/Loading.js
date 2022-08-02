import {View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default Loading;
