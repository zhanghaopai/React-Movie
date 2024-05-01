import {View, Text, Platform} from 'react-native'
import {React} from 'react'
import { StatusBar } from 'expo-status-bar'

export default function ScreenWrapper({children}) {
    let osHeight = Platform.OS == "ios"? 30 : 0;
    let statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight:osHeight;
  return (
    <View style={{paddingTop: statusBarHeight}}>
        {children}
    </View>
  )
}