import Button from "@/components/button";
import { Input } from "@/components/input";
import { handleError } from "@/lib/utils";
import { accessCredentials } from "@/server/attendeesApi";
import { useBadgeStore } from "@/store/badge-store";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";

export default function Home() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const badgeStore = useBadgeStore();

  async function handleAccesCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ingresso", "Informe o código do ingresso.");
      }

      const badgeResponse = await accessCredentials(code);
      badgeStore.save(badgeResponse.badge);

      setIsLoading(true);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (badgeStore.data?.checkInURL) return <Redirect href="/ticket" />;

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
          isLoading={isLoading}
        />

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
