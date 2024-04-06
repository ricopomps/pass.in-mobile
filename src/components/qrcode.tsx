import { colors } from "@/styles/colors";
import QRCodeSvg from "react-native-qrcode-svg";

interface QRCodeProps {
  value: string;
  size: number;
}

export default function QRCode({ value, size }: QRCodeProps) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  );
}
