import React, { Component } from 'react';
import {View,StatusBar} from 'react-native'
import { Container, Header, Item, Input, Icon} from 'native-base';
import CONFIG from '../config/config.js';

export default class HeaderCompoent extends Component {
  onTextChange = (query) =>{
    // Make api call when search string is > 3 char
    if(query.length >= 3){
      this.props.emptyNewsList([])
      this.props.updateQuery(query, 1)
    }else if(query.length == 0){
      this.props.updateQuery(query, 1)
    }
  }
  render() {
    return (
      <Header searchBar rounded hasSegment style={{backgroundColor: CONFIG.themeColor}}>
        <Item>
          <Icon name="ios-search" />
          <Input 
            placeholder="Search" 
            onChangeText={(text) => this.onTextChange(text)}
          />
          <Icon name="md-paper" />
        </Item>
      </Header>
    );
  }
}