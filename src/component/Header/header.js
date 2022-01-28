import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.heading}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
})
