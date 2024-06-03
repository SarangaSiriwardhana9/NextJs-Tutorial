import { BillingTable } from "@/components/pages/billing/BillingTable";


export default function Billing() {
  return (
    <div>
      <h1 className="text-2xl mb-10 text-slate-700 font-semibold">Billings</h1>
      <BillingTable />
    </div>
  );
}
