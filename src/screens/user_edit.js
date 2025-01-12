import React, { Component } from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";

import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p5 from "../image/p5.png";
import p6 from "../image/p6.png";
import p7 from "../image/p7.png";
import p8 from "../image/p8.png";
import p9 from "../image/p9.png";
import p_1 from "../image/p-1.png";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import on from "../icon/r_btn_on.svg";
import off from "../icon/r_btn_off.svg";

import { WithLocalSvg } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class user_edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_id: "",
      user_age: "",
      user_sex: 1,
      user_group: "",
      user_memo: "",
      age1: off,
      age2: off,
      rank1: off,
      rank2: off,
      birth: 0,
      profilepic: "",
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
      rank: true,
      progress: 0,
      behavior: "position",
    };
  }

  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");
    this.setState({ user_token: manager_token });

    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
        this.props.route.params.id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + String(this.state.user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            birth: json.data[0].birthday,
            gender: json.data[0].gender,
            name: json.data[0].uname,
            memo: json.data[0].memo,
            team: json.data[0].team,
            UID: json.data[0].uid,
            rank: json.data[0].ranking,
            profilepic: json.data[0].profilepic,
          },
          () => {
            this.profile();
          }
        );
        if (this.state.gender === "M") {
          this.setState({ age1: on, age2: off });
        } else {
          this.setState({ age1: off, age2: on });
        }
        if (this.state.rank === true) {
          this.setState({ rank1: on, rank2: off });
        } else {
          this.setState({ rank1: off, rank2: on });
        }
      });
  }

  edit_update = () => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
        this.props.route.params.id,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + String(this.state.user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: this.state.UID,
          gender: this.state.age1 == on ? "M" : "F",
          birthday:
            this.state.user_age === "" ? this.state.birth : this.state.user_age,
          ranking: this.state.rank1 == on ? "true" : "false",
          memo:
            this.state.user_memo === ""
              ? this.state.memo
              : this.state.user_memo,

          team:
            this.state.user_group === ""
              ? this.state.team
              : this.state.user_group,
          uname:
            this.state.user_name === ""
              ? this.state.name
              : this.state.user_name,
        }),
      }
    )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  sex_click1 = () => {
    if (this.state.age1 === off) {
      this.setState({ age1: on, age2: off });
    } else if (this.state.age1 === on) {
    } else {
      this.setState({ age1: off });
    }
  };

  sex_click2 = () => {
    if (this.state.age2 === off) {
      this.setState({ age2: on, age1: off });
    } else if (this.state.age2 === on) {
    } else {
      this.setState({ age2: off });
    }
  };
  rank_click1 = () => {
    if (this.state.rank1 === off) {
      this.setState({ rank1: on, rank2: off });
    } else if (this.state.rank1 === on) {
    } else {
      this.setState({ rank1: off });
    }
  };

  rank_click2 = () => {
    if (this.state.rank2 === off) {
      this.setState({ rank2: on, rank1: off });
    } else if (this.state.rank2 === on) {
    } else {
      this.setState({ rank2: off });
    }
  };

  createTwoButtonAlert = () =>
    Alert.alert("프로필을 삭제할까요?", "", [
      {
        text: "취 소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "삭 제",
        onPress: () => {
          fetch(
            "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
              this.props.route.params.id,
            {
              method: "DELETE",
              headers: {
                Authorization:
                  "Bearer " + String(this.state.user_token).slice(1, -1),
                "Content-Type": "application/json",
              },
            }
          ).then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              Alert.alert("삭제되었습니다.");
              this.props.navigation.navigate("TabNavigation", {
                init_set: "list",
              });
            } else if (response.status === 400) {
              console.log("사용 불가능");
              Alert.alert("error");
            } else {
              throw new Error("Unexpected Http Status Code");
            }
          });
        },
      },
    ]);

  edit_finish = () => {
    Alert.alert("프로필을 수정할까요?", "", [
      {
        text: "취 소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "수 정",
        onPress: () => {
          if (
            this.state.user_age.length != 8 &&
            this.state.user_age.length != 0
          ) {
            Alert.alert("생년월일을 정확하게 입력해주세요.");
          } else {
            Alert.alert("수정되었습니다.");
            if (this.state.age1 === on) {
              this.setState({ user_sex: 1 }); // 남자
            } else {
              this.setState({ user_sex: 2 }); // 여자
            }
            if (this.state.rank1 === on) {
              this.setState({ user_rank: 1 }); // 남자
            } else {
              this.setState({ user_rank: 0 }); // 여자
            }
            this.edit_update();
            this.props.navigation.navigate("user_setting");
          }
        },
      },
    ]);
  };

  //
  passwordreset = () =>
    Alert.alert("비밀번호를 초기화 하시겠습니까?", "", [
      {
        text: "취 소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "초기화",
        onPress: () => {
          fetch(
            "http://hccparkinson.duckdns.org:19737/onlymanager/uid/resetpw/" +
              this.props.route.params.id,
            {
              method: "DELETE",
              headers: {
                Authorization:
                  "Bearer " + String(this.state.user_token).slice(1, -1),
                "Content-Type": "application/json",
              },
            }
          ).then((response) => {
            if (response.status === 200) {
              console.log("사용 가능");
              Alert.alert("초기화 되었습니다.");
              this.props.navigation.navigate("user_setting");
            } else if (response.status === 400) {
              console.log("사용 불가능");
              Alert.alert("error");
            } else {
              throw new Error("Unexpected Http Status Code");
            }
          });
        },
      },
    ]);
  profile = () => {
    if (this.state.profilepic === "-1") {
      return p_1;
    } else if (this.state.profilepic === "1") {
      return p1;
    } else if (this.state.profilepic === "2") {
      return p2;
    } else if (this.state.profilepic === "3") {
      return p3;
    } else if (this.state.profilepic === "4") {
      return p4;
    } else if (this.state.profilepic === "5") {
      return p5;
    } else if (this.state.profilepic === "6") {
      return p6;
    } else if (this.state.profilepic === "7") {
      return p7;
    } else if (this.state.profilepic === "8") {
      return p8;
    } else if (this.state.profilepic === "9") {
      return p9;
    }
  };

  render() {
    return (
      <HideKeyboard>
        <View style={styles.finalView}>
          <View style={styles.menuView}>
            <AntDesign
              name="left"
              style={{ fontSize: responsiveScreenFontSize(3) }}
              color="#808080"
              onPress={() => {
                this.props.navigation.navigate("user_setting", {
                  id: this.props.route.params.id,
                });
              }}
            />
            <View style={styles.margin}></View>
            <Text style={styles.titleText}>환자 정보 편집</Text>
            <View style={styles.margin}></View>
            <Feather
              name="check"
              style={{ fontSize: responsiveScreenFontSize(3) }}
              color="#5CB405"
              onPress={this.edit_finish}
            />
          </View>

          <View style={styles.scrollView}>
            <ScrollView
              contentContainerStyle={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <KeyboardAvoidingView behavior={this.state.behavior}>
                <View style={styles.firstView}>
                  <Image
                    source={this.profile()}
                    style={{
                      height: responsiveScreenWidth(20),
                      width: responsiveScreenWidth(20),
                      borderRadius: 400 / 2,
                    }}
                  />
                  {/**<Text style={styles.profile_edit}>프로필 사진 바꾸기</Text>**/}
                </View>

                <View style={styles.secondView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>환자 이름</Text>
                  </View>
                  <View style={styles.textView}>
                    <TextInput
                      style={styles.text2}
                      onChangeText={(text) => {
                        this.setState({ user_name: text });
                      }}
                      placeholder={this.state.name}
                    />
                  </View>
                </View>

                <View style={styles.secondView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>아이디</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text2}>{this.state.UID}</Text>
                  </View>
                </View>

                <View style={styles.secondView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>생년월일</Text>
                  </View>
                  <View style={styles.textView}>
                    <TextInput
                      style={styles.text2}
                      onChangeText={(age) => {
                        this.setState({ user_age: age });
                      }}
                      keyboardType="number-pad"
                      placeholder={String(this.state.birth)}
                      maxLength={8}
                    />
                  </View>
                </View>

                <View style={styles.secondView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>조</Text>
                  </View>
                  <View style={styles.textView}>
                    <TextInput
                      style={styles.text2}
                      onChangeText={(text) => {
                        this.setState({ user_group: text });
                      }}
                      keyboardType="number-pad"
                      placeholder={
                        this.state.team === "" ? "없음" : this.state.team
                      }
                      maxLength={2}
                    />
                  </View>
                </View>

                <View style={styles.secondView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>성별</Text>
                  </View>

                  <View style={styles.ageview}>
                    <TouchableOpacity
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      onPress={this.sex_click1}
                    >
                      <WithLocalSvg
                        width={responsiveScreenWidth(5.5)}
                        height={responsiveScreenWidth(5.5)}
                        asset={this.state.age1}
                      />
                    </TouchableOpacity>
                    <Text style={styles.text2}> 남</Text>

                    <View style={styles.margin}></View>
                    <TouchableOpacity
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      onPress={this.sex_click2}
                    >
                      <WithLocalSvg
                        width={responsiveScreenWidth(5.5)}
                        height={responsiveScreenWidth(5.5)}
                        asset={this.state.age2}
                      />
                    </TouchableOpacity>
                    <Text style={styles.text2}> 여</Text>
                    <View style={styles.margin}></View>
                  </View>
                </View>
                <View style={styles.secondView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>랭킹참가</Text>
                  </View>

                  <View style={styles.ageview}>
                    <TouchableOpacity
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      onPress={this.rank_click1}
                    >
                      <WithLocalSvg
                        width={responsiveScreenWidth(5.5)}
                        height={responsiveScreenWidth(5.5)}
                        asset={this.state.rank1}
                      />
                    </TouchableOpacity>
                    <Text style={styles.text2}> YES</Text>

                    <View style={styles.margin}></View>
                    <TouchableOpacity
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      onPress={this.rank_click2}
                    >
                      <WithLocalSvg
                        width={responsiveScreenWidth(5.5)}
                        height={responsiveScreenWidth(5.5)}
                        asset={this.state.rank2}
                      />
                    </TouchableOpacity>
                    <Text style={styles.text2}> NO</Text>
                    <View style={styles.margin}></View>
                  </View>
                </View>

                <View style={styles.threeView}>
                  <View style={styles.memoView}>
                    <Text style={styles.text1}>메모</Text>
                  </View>
                  <View style={styles.textView}>
                    <TextInput
                      style={styles.text2}
                      onChangeText={(text) => {
                        this.setState({ user_memo: text });
                      }}
                      placeholder={
                        this.state.memo === null ? "메모 없음" : this.state.memo
                      }
                    />
                  </View>
                </View>
                <View style={styles.marginView}>
                  <View style={styles.margin}></View>

                  <TouchableOpacity
                    style={styles.margin1}
                    activeOpacity={0.8}
                    onPress={() => {
                      this.createTwoButtonAlert();
                    }}
                  >
                    <EvilIcons
                      name="trash"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: responsiveScreenFontSize(0.3),
                        fontSize: responsiveScreenFontSize(4),
                      }}
                      color="#808080"
                    />
                    <Text style={styles.pwreset}>환자 삭제</Text>
                  </TouchableOpacity>
                  <View style={styles.margin}></View>

                  <TouchableOpacity
                    style={styles.margin1}
                    activeOpacity={0.8}
                    onPress={() => {
                      this.passwordreset();
                    }}
                  >
                    <Ionicons
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: responsiveScreenFontSize(0.3),
                        fontSize: responsiveScreenFontSize(3),
                      }}
                      name="ios-reload"
                      color="#808080"
                    />
                    <Text style={styles.pwreset}>비밀번호 초기화</Text>
                  </TouchableOpacity>
                  <View style={styles.margin}></View>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
      </HideKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#FFFFFF",
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: "8.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
    paddingRight: "5%",
    paddingLeft: "5%",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2.48),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(4),
    marginBottom: responsiveScreenHeight(3),
    backgroundColor: "#FFFFFF",
  },

  scrollView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "40%",
  },

  secondView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: responsiveScreenHeight(7.34),
    paddingLeft: responsiveScreenWidth(4.7),
    paddingRight: responsiveScreenWidth(4.7),
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  threeView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(3.1),
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: responsiveScreenHeight(11.0),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#E5E5E5",
    paddingTop: responsiveScreenHeight(2.6),
    paddingBottom: responsiveScreenHeight(2.6),
    paddingLeft: responsiveScreenWidth(4.7),
    paddingRight: responsiveScreenHeight(4),
  },

  marginView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: responsiveScreenHeight(2),
    backgroundColor: "#FFFFFF",
  },

  margin: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  margin1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },

  memoView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
  },

  textView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 3,
  },

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  ageview: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
    marginRight: 15,
  },

  profile_edit: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.88),
    color: "#59A60B",
    justifyContent: "center",
  },

  text1: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#000000",
    justifyContent: "center",
  },

  text2: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
  textg: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#316200",
    justifyContent: "center",
  },

  pwreset: {
    fontSize: responsiveScreenFontSize(1.52),
    color: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
});
