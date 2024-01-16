import { Status } from "@/lib/types";
import StatusLabel from "./components/StatusLabel";

export default function Home() {
  return (
    <main>
      <h1 className=" text-sm">CRM system</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NoActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pendind}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
