import { MailtrapClient } from "mailtrap";
import "dotenv/config";

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint: process.env.MAILTRAP_ENDPOINT,
});

export const sender = {
  email: "mailtrap@alisamir.me",
  name: "Ali Samir",
};
