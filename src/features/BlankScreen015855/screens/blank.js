import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <View style={styles.View_4}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View style={styles.View_12}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View style={styles.View_13}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View style={styles.View_14}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View style={styles.View_15}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: {},
  Button_3: {},
  View_4: { flexDirection: "row" },
  View_5: {},
  Button_8: {},
  View_6: {},
  Button_11: {},
  View_12: { flexDirection: "row" },
  View_5: {},
  Button_8: {},
  View_6: {},
  Button_11: {},
  View_13: { flexDirection: "row" },
  View_5: {},
  Button_8: {},
  View_6: {},
  Button_11: {},
  View_14: { flexDirection: "row" },
  View_5: {},
  Button_8: {},
  View_6: {},
  Button_11: {},
  View_15: { flexDirection: "row" },
  View_5: {},
  Button_8: {},
  View_6: {},
  Button_11: {},
  Button_16: {},
  Button_17: {},
  Button_18: {}
})
