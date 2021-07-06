import * as React from "react";
import { View, Text } from "react-native";
import AppNavigator from './app.navigator';

export default class App extends React.Component<{}> {
    render(){
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <AppNavigator />
          <Text>Maria Clara Linda</Text>
          <Text>plic ploc!</Text>
        </View>
      );
    }
}
