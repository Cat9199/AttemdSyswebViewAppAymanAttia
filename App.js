import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
       
      </View>

      {/* WebView */}
      <WebView
        source={{ uri: 'http://aymanattiaattend-001-site1.htempurl.com' }}
        style={{ flex: 1 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#009efb', // Change the color to your preferred color
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navButton: {
    paddingHorizontal: 10,
  },
  navText: {
    color: '#fff', // Change the color to your preferred text color
    fontSize: 16,
  },
  navTitle: {
    color: '#fff', // Change the color to your preferred text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});
