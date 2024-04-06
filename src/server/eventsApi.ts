import { api } from "./api";

const baseUrl = "/events";

export async function registerForEvent(
  eventId: string,
  name: string,
  email: string
) {
  const response = await api.post(`${baseUrl}/${eventId}/attendees`, {
    name,
    email,
  });
  return response.data;
}
