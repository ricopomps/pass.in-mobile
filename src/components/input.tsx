import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full h-14 flex-row items-center p-3 border border-green-400 rounded-lg gap-x-3 m-auto">
      {children}
    </View>
  );
}

function Field({ ...props }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-white text-base font-regular"
      placeholderTextColor={colors.gray[200]}
      {...props}
    />
  );
}

Input.Field = Field;

export { Input };
