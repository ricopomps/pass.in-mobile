import { api } from "./api";

const baseUrl = "/attendees";

export async function accessCredentials(badgeCode: string) {
  const response = await api.get(`${baseUrl}/${badgeCode}/badge`);
  return response.data;
}
