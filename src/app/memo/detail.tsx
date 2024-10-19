import { View, Text, ScrollView, StyleSheet} from "react-native"

import Header from "../../components/header"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const Detail = ():JSX.Element => {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          AAAAAAA
        </Text>
      </ScrollView>

      <CircleButton style={{top: 160, bottom: "auto"}}>
        <Icon name="pencil" size = {40} color ="#ffffff" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor: "#ffffff"
  },

  memoHeader: {
    backgroundColor: "#467FD3",
    paddingHorizontal: 19 ,
    paddingVertical: 24,
    height: 96,
    justifyContent: "center"
  },

  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold"
  },

  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },

  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  }

})
export default Detail