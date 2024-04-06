import Button from "@/components/button";
import Credential from "@/components/credential";
import Header from "@/components/header";
import QRCode from "@/components/qrcode";
import { colors } from "@/styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Ticket() {
  const [image, setImage] = useState("");
  const [expandQRCode, setExpandQRCode] = useState(false);

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });
      if (result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem.");
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha Credencial" />
      <ScrollView
        className="-mt-28 -z-10"
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />

        <View className="justify-center items-center w-full mt-4">
          <FontAwesome
            name="angle-double-down"
            color={colors.gray[300]}
            size={24}
            className="self-center my-6"
          />
        </View>

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar desse evento!
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.7} className="mt-10">
          <Text className="text-base text-white font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <QRCode value="text" size={300} />
            <Text className="font-body text-orange-500 text-sm font-bold text-center mt-10">
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
