import Button from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";

export default function Home() {
  const [code, setCode] = useState("");

  function handleAccesCredential() {
    if (!code.trim()) {
      return Alert.alert("Ingresso", "Informe o código do ingresso.");
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8 gap-3">
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full gap-y-3">
        <View>
          <Input>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={20}
              color={colors.green[200]}
            />
            <Input.Field
              placeholder={"Código do ingresso"}
              onChangeText={setCode}
            />
          </Input>
        </View>

        <Button
          title="Acessar credencial"
          onPress={handleAccesCredential}
        ></Button>

        <Link
          href="/register"
          className="text-gray-100 text-base text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
