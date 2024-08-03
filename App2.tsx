import { View } from 'react-native'
import ProfileScreen from './components/ProfileScreen'
import React from 'react'
import UseEffectExample from './components/UseEffectExample'

const App = (): React.JSX.Element => {
  return (
    <View>
      <UseEffectExample/>
      {/* <ProfileScreen /> */}
    </View>
  )
}

export default App
