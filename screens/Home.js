import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import colors from "../colors";

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;

const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 100px;
  font-weight: 500;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${colors.btnColor};
  border-radius: 40px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  elevation: 5;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Title>My journal</Title>
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </View>
  );
};

export default Home;
