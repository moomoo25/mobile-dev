import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import BookList from './component/BookList';
import PageOne from './component/PageOne';

export default class App extends React.Component {

  
  render() {
    return (
      <Router>
 <Scene key="root">
   
<Scene key="BookList" component={BookList} title="BookList" initial={true} />
 <Scene key="PageOne" component={PageOne} title="Detail"/>
 
 </Scene>
 </Router>
    );
  }
}
