import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Body,
  TextInput,
} from "react-native";
import Task from "./task_move";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

let id = "1-1";
let Svg1 = require("../image/" + id + ".png");
let Svg2 = require("../image/1-2.png");
let Svg3 = require("../image/1-3.png");
let Svg4 = require("../image/1-4.png");
let Svg5 = require("../image/1-5.png");
let Svg6 = require("../image/1-6.png");
let Svg7 = require("../image/1-7.png");
let Svg8 = require("../image/1-8.png");
let Svg9 = require("../image/1-9.png");
let Svg10 = require("../image/1-10.png");
let Svg11 = require("../image/1-11.png");
let Svg12 = require("../image/1-12.png");

function move_1({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.navigate("TabNavigation1");
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>신장운동</Text>
        <View style={styles.margin}></View>
        <EvilIcons name="star" size={30} color="#ffffff" />
      </View>

      <View style={styles.secondView}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg1} text1="목 앞 근육 스트레칭" text2="1 / 5"></Task>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 2,
              });
            }}
          >
            <Task
              image={Svg2}
              text1="목 좌우 근육 스트레칭"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 3,
              });
            }}
          >
            <Task
              image={Svg3}
              text1="목통 앞쪽 근육 스트레칭"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 4,
              });
            }}
          >
            <Task
              image={Svg4}
              text1="목통 옆쪽 근육 스트레칭"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 5,
              });
            }}
          >
            <Task
              image={Svg5}
              text1="목통 회전 근육 스트레칭"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 6,
              });
            }}
          >
            <Task image={Svg6} text1="목통 스트레칭 1단계" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 7,
              });
            }}
          >
            <Task image={Svg7} text1="목통 스트레칭 2단계" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 8,
              });
            }}
          >
            <Task image={Svg8} text1="날개뼈 움직이기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 9,
              });
            }}
          >
            <Task image={Svg9} text1="어깨 들어올리기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 10,
              });
            }}
          >
            <Task image={Svg10} text1="날개뼈 모으기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 11,
              });
            }}
          >
            <Task
              image={Svg11}
              text1="손목 및 팔꿈치 주변 근육 스트레칭"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 1,
                paramName2: 12,
              });
            }}
          >
            <Task
              image={Svg12}
              text1="허벅지 및 종아리 근육 스트레칭"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default move_1;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  menuView: {
    marginTop: "10%",
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
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 15,
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "30%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
