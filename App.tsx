import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export default function App()
{
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>

      <Pressable onPress={() => setModalVisible(true)}>
          <Text>Show modal message</Text>
      </Pressable>

      <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a modal</Text>
            <Pressable
            onPress={() => setModalVisible(false)}>
              <Text style={styles.modalText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#000',
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 20
  },
  buttonOpen: {
    backgroundColor: '#C6C6C6',
  },
  buttonClose: {
    backgroundColor: '#C6C6C6',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
