import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewOrder from './views/NewOrder';
import Menu from './views/Menu';
import DishDetails from './views/DishDetails';
import DishForm from './views/DishForm';
import OrderDetails from './views/OrderDetails';
import OrderProgress from './views/OrderProgress';
import FirebaseState from './context/firebase/firebaseState';
import OrdersState from './context/orders/ordersState';
import {NativeBaseProvider} from 'native-base';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <FirebaseState>
        <OrdersState>
          <NativeBaseProvider>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerTintColor: '#000',
                  headerStyle: {
                    backgroundColor: '#ffda00',
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}>
                <Stack.Screen
                  name="NewOrder"
                  component={NewOrder}
                  options={{
                    title: 'New Order',
                  }}
                />
                <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{
                    title: 'Our Menu',
                  }}
                />
                <Stack.Screen
                  name="DishDetails"
                  component={DishDetails}
                  options={{
                    title: 'Dish Details',
                  }}
                />
                <Stack.Screen
                  name="DishForm"
                  component={DishForm}
                  options={{
                    title: 'Dish Form',
                  }}
                />

                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetails}
                  options={{
                    title: 'Order Details',
                  }}
                />
                <Stack.Screen
                  name="OrderProgress"
                  component={OrderProgress}
                  options={{
                    title: 'Order Progress',
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>
        </OrdersState>
      </FirebaseState>
    </>
  );
}

export default App;
