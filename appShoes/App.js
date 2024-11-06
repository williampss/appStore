import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading} from 'expo';
import {useFonts, Poppins_100Thin} from '@expo-google-fonts/poppins';

import Routes from './src/router';

export default function App(){

  let [fontloaded] = useFonts({
    Poppins_100Thin,
  });

  if(fontloaded){
    return <AppLoading/>
  }

  return (
    <>
       <StatusBar style="light" backgroundColor="#000" translucent={true} />
       <Routes/>
    </>
  );
}