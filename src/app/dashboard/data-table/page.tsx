import { payments } from "@/data/payments.data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function fetchgData(){
  return payments;
}
export default async function Page() {

  const data = await fetchgData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}