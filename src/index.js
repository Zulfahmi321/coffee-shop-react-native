import { StatusBar } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/landing';
import Login from './screens/login';
import Welcome from './screens/welcome';
import Registrasi from './screens/registrasi';
import Home from './screens/home';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import Forgot from './screens/forgot';
import Favorite from './screens/favorite';
import ProductList from './screens/productlist';
import ProductDetail from './screens/productdetail';
import Cart from './screens/cart';
import DeliveryMethods from './screens/deliverymethods';
import Payments from './screens/payments';
import History from './screens/history';
import Profile from './screens/profile';
import EditPassword from './screens/editpassword';
import EditProfile from './screens/editprofile';
import Splash from './screens/splash';
import AddProduct from './screens/addproduct';
import AddPromo from './screens/addpromo';
import EditProduct from './screens/editproduct';
import EditPromo from './screens/editpromo';
import Promo from './screens/promo';

const Router = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle={"dark-content"} />
          <Navigator initialRouteName='splash'
            screenOptions={{
              headerShown: false
            }}>
            <Screen name="splash" component={Splash} />
            <Screen name="landing" component={Landing} />
            <Screen name="welcome" component={Welcome} />
            <Screen name="login" component={Login} />
            <Screen name="registrasi" component={Registrasi} />
            <Screen name="home" component={Home} />
            <Screen name="forgot" component={Forgot} />
            <Screen name="favorite" component={Favorite} />
            <Screen name="productlist" component={ProductList} />
            <Screen name="productdetail" component={ProductDetail} />
            <Screen name="cart" component={Cart} />
            <Screen name="deliverymethods" component={DeliveryMethods} />
            <Screen name="payments" component={Payments} />
            <Screen name="history" component={History} />
            <Screen name="profile" component={Profile} />
            <Screen name="editpassword" component={EditPassword} />
            <Screen name="editprofile" component={EditProfile} />
            <Screen name="addproduct" component={AddProduct} />
            <Screen name="editproduct" component={EditProduct} />
            <Screen name="addpromo" component={AddPromo} />
            <Screen name="editpromo" component={EditPromo} />
            <Screen name="promo" component={Promo} />
          </Navigator>
        </PersistGate>
      </ReduxProvider>
    </>
  )
}

export default Router