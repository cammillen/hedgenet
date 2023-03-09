import React, { useRef, useEffect } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback, PanResponder } from 'react-native';
import { globalColors } from '../styles/Colors';

const KeyActionsModal = ({ visible, onClose }) => {
  const modalOpacity = useRef(new Animated.Value(0)).current;
  const modalTranslateY = useRef(new Animated.Value(Dimensions.get('screen').height)).current;
  const backgroundOpacity = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: (_, gestureState) => gestureState.dy > 0,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          onClose(false);
        }
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(modalTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(modalTranslateY, {
          toValue: Dimensions.get('screen').height,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={() => onClose(false)}>
        <Animated.View style={[styles.modalBackground, { opacity: backgroundOpacity }]}>
          <TouchableWithoutFeedback>
            <Animated.View {...panResponder.panHandlers} style={[styles.modalContainer, { opacity: modalOpacity, transform: [{ translateY: modalTranslateY }] }]}>
              <TouchableOpacity style={styles.closeButton} onPress={() => onClose(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <Text>Hello Modal</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: globalColors.dark._1.color,
    borderColor: globalColors.dark._3.color,
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default KeyActionsModal;