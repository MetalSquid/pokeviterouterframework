import { redirect } from "react-router";
import { waitForUser } from "./firebase.utils";

export const requireAuth = async () => {
  const user = await waitForUser();
  if (!user) throw redirect("/login");
  return user;
};