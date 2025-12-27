import { redirect } from "next/navigation";

export default function FastRemoteRedirect() {
  redirect("/#remote");
}
