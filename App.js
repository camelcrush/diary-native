import { NavigationContainer } from "@react-navigation/native";
import Realm from "realm";
import React, { useState } from "react";
import Navigator from "./navigator";
import AppLoading from "expo-app-loading";
import { DBContext } from "./context";
import { setTestDeviceIDAsync } from "expo-ads-admob";

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);
  const startLoading = async () => {
    await setTestDeviceIDAsync("EMULATOR");
    const connection = await Realm.open({
      path: "diaryDB",
      schema: [FeelingSchema],
    });
    setRealm(connection);
  };
  const onFinish = () => setReady(true);
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DBContext.Provider>
  );
}
