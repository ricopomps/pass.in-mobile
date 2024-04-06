import { TooManyRequestsError } from "@/server/http-errors";
import { AxiosError, isAxiosError } from "axios";
import { Alert } from "react-native";

export function handleError(error: unknown) {
  console.error(error);
  if (error instanceof TooManyRequestsError) {
    Alert.alert("Error", "Too many requests, please wait a while");
  } else if (isAxiosError(error)) {
    const axiosError = error as AxiosError<{ error: string; message: string }>;
    if (axiosError.response?.data?.message) {
      Alert.alert("Error", axiosError.response.data.message);
    } else if (axiosError.response?.data?.error) {
      Alert.alert("Error", axiosError.response.data.error);
    } else {
      Alert.alert("Error", "An error occurred.");
    }
  } else if (error instanceof Error) {
    Alert.alert("Error", error.message);
  } else if (typeof error === "string") {
    Alert.alert("Error", error);
  } else {
    Alert.alert("Error", "An error occurred.");
  }
}
