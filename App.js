import React from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Wrapper>
      <StatusBar backgroundColor="#A03D35" barStyle="light-content" />
      <WebView source={{uri: 'https://www.bing.com/covid'}} />
    </Wrapper>
  );
};

export default App;
