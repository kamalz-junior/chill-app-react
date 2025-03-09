import Features from "~/components/features";
import PlanCard from "~/components/plan-card";
import { plans } from "~/constants/plans";

export default function Pricing() {
  return (
    <main className="container space-y-8 py-8">
      <section className="space-y-6">
        <div className="space-y-2 py-4">
          <h1 className="text-center font-medium text-xl">
            Kenapa harus Berlangganan
          </h1>
        </div>
        <Features />
      </section>
      <section className="space-y-6">
        <div className="space-y-2 py-4">
          <h1 className="text-center font-medium text-xl">Pilih Paketmu</h1>
          <p className="text-center text-muted-foreground">
            Temukan paket sesuai kebutuhanmu.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>
    </main>
  );
}
