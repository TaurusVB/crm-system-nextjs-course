import { Status } from "@/lib/types";
import StatusLabel from "./components/StatusLabel";
import AddCompanyButton from "./components/AddCompanyButton";

export default function Home() {
  return (
    <main>
      <h1 className=" text-sm">CRM system</h1>
      <AddCompanyButton />
    </main>
  );
}
