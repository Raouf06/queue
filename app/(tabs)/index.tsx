import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

// Title Component
const Title: React.FC = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.titleText}>ATM Finder</Text>
  </View>
);

// Map Screen
const MapScreen: React.FC = () => (
  <View style={styles.container}>
    <MapView style={styles.map} />
  </View>
);

// List Screen
const ListScreen: React.FC = () => {
  const atmData = [
    { id: 1, name: 'ATM 1', color: 'green' },
    { id: 2, name: 'ATM 2', color: 'orange' },
    { id: 3, name: 'ATM 3', color: 'red' },
  ];

  return (
    <View style={styles.container}>
      {atmData.map((atm) => (
        <View key={atm.id} style={styles.listItem}>
          <Icon name="account-balance" size={24} color={atm.color} />
          <Text style={styles.listItemText}>{atm.name}</Text>
        </View>
      ))}
    </View>
  );
};

// Main App
const App: React.FC = () => (
  <NavigationContainer>
    <Title />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Map' ? 'map' : 'list';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
