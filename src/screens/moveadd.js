// 운동 편집 화면
// 운동카테고리 스크롤뷰와 운동 리스트뷰
// d=아마도 없어질 화면!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111
import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Movelist from "./movelist";
function addmove({ navigation }) {
  return (
    <View>
      {/* 헤더 뷰 */}
      <View>
        <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
        <View style={styles.menuView}>
          <AntDesign name="left" size={24} color="#808080" />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>'김옥분'님 운동 편집</Text>
          <View style={styles.margin}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("addmove");
            }}
          >
            <Entypo name="plus" size={30} color="#5CB405" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default addmove;
const styles = StyleSheet.create({
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});