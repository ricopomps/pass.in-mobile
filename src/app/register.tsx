import Button from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Inscrição", "Preencha todos os campos.");
    }

    router.push("/ticket");
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8 gap-3">
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-y-3">
        <View>
          <Input>
            <FontAwesome6
              name="user-circle"
              size={20}
              color={colors.green[200]}
            />
            <Input.Field placeholder={"Nome completo"} onChangeText={setName} />
          </Input>
        </View>

        <View>
          <Input>
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={colors.green[200]}
            />
            <Input.Field
              placeholder={"E-Mail"}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </Input>
        </View>

        <Button title="Realizar inscrição" onPress={handleRegister}></Button>

        <Link href="/" className="text-gray-100 text-base text-center mt-8">
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
