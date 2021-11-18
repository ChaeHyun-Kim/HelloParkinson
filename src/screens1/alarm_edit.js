import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
function alarm_edit({}) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>알람 편집화면</Text>
        <View style={styles.margin}></View>
      </View>
      <View style={{ margin: "5%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "3%",
            borderColor: "#E0E0E0",
            borderRadius: 6,
            borderWidth: 2,
            marginBottom: "4%",
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              alignItems: "center",
              borderRightWidth: 3,
              borderColor: "#E0E0E0",
              flex: 5,
            }}
          >
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                color: "#B5B5B5",
              }}
            >
              오전
            </Text>
          </View>
          <View style={{ flex: 5, alignItems: "center" }}>
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#B5B5B5" }}
            >
              오후
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "3%",
            borderColor: "#E0E0E0",
            borderRadius: 6,
            borderWidth: 2,
            marginBottom: "4%",
            backgroundColor: "#ffffff",
          }}
        >
          <View>
            <Text style={{ fontSize: 39, color: "#B5B5B5" }}>00</Text>
          </View>
          <View>
            <Text style={{ fontSize: 39, color: "#000000" }}>:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 39, color: "#B5B5B5" }}>00</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            flexDirection: "column",
            borderColor: "#E0E0E0",
            alignItems: "center",
            // padding: "3%",
            borderRadius: 6,
            borderWidth: 2,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                padding: "3%",
                borderBottomWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text
                style={{ fontSize: 23, fontWeight: "bold", color: "#B5B5B5" }}
              >
                오늘 하루만 알림
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                padding: "3%",
                borderBottomWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text
                style={{ fontSize: 23, fontWeight: "bold", color: "#B5B5B5" }}
              >
                일주일마다 반복하기
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ padding: "3%" }}>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: "bold",
                  borderColor: "#E0E0E0",
                  color: "#B5B5B5",
                }}
              >
                매일 반복하기
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: "3%",
            marginTop: "3%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                padding: "7%",
                borderRadius: 200,
                backgroundColor: "#C20000",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Octicons name="trashcan" size={50} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="checkcircle" size={24} color="#577F67" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default alarm_edit;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 30,
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

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
});