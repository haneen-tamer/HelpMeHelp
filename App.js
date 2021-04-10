import React, { useState } from 'react';
import { View } from 'react-native';
import Start from './forms/start';
import Navigator from './navigations/startStack';
import Header from './shared/header';

export default function App() {

  return ( 
      <Navigator />
    );
}
