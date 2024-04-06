import Button from "@/components/button";
import { Input } from "@/components/input";
import { handleError } from "@/lib/utils";
import { accessCredentials } from "@/server/attendeesApi";
import { registerForEvent } from "@/server/eventsApi";
import { useBadgeStore } from "@/store/badge-store";
import { colors } from "@/styles/colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";

const EVENT_ID = "2c589bfb-c7f8-48dc-8393-b4bdd2485524";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const badgeStore = useBadgeStore();

  async function handleRegister() {
    try {
      if (!name.trim() || !email.trim()) {
        return Alert.alert("Inscrição", "Preencha todos os campos.");
      }

      setIsLoading(true);

      const registerResponse = await registerForEvent(EVENT_ID, name, email);

      if (registerResponse.attendeeId) {
        const badgeResponse = await accessCredentials(
          registerResponse.attendeeId
        );
        badgeStore.save(badgeResponse.badge);

        Alert.alert("Inscrição", "Inscrição realizada com sucesso!", [
          {
            text: "OK",
            onPress: () => router.push("/ticket"),
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      handleError(error);
    } finally {
      setIsLoading(false);
    }
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

        <Button
          title="Realizar inscrição"
          onPress={handleRegister}
          isLoading={isLoading}
        />

        <Link href="/" className="text-gray-100 text-base text-center mt-8">
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
