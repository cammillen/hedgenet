import React from 'react';
import { View, StyleSheet } from 'react-native';
import { globalColors } from '../../styles/Colors.js';

const Pagination = ({ activeIndex, total }) => {
  const dots = [];

  for (let i = 0; i < total; i++) {
    dots.push(
      <View
        key={i}
        style={[
          styles.dot,
          activeIndex === i ? styles.activeDot : null
        ]}
      />
    );
  }

  return (
    <View style={styles.container}>
      {dots}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: globalColors.dark._3.color,
    borderRadius: 100,
  },
  activeDot: {
    backgroundColor: globalColors.primary._500.color,
    width: 32,
    height: 8,
    borderRadius: 100,
  }
});

export default Pagination;