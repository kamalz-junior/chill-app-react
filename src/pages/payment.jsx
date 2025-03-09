import { CreditCard, Wallet } from "lucide-react";
import { Link } from "react-router";
import PlanCard from "~/components/plan-card";
import Button, { button } from "~/components/ui/button";
import Input from "~/components/ui/input";
import Radio from "~/components/ui/radio";
import { plans } from "~/constants/plans";
import { formatCurrency } from "~/lib/utils";

export default function Payment() {
  const adminFee = 3000;
  const total = plans[0].price.monthly + adminFee;

  return (
    <main className="container space-y-8 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <PlanCard plan={plans[0]} />
        <form action="" className="space-y-4 md:col-span-2">
          <div className="grid gap-2">
            <label htmlFor="payment-method" className="font-medium">
              Metode Pembayaran
            </label>
            <div className="grid gap-2">
              <label className="flex items-center gap-4 rounded-md border p-4 font-medium text-sm has-checked:border-primary has-checked:bg-primary/10">
                <Radio name="payment-method" />
                <CreditCard className="size-5" />
                Debit/Credit Card
              </label>
              <label className="flex items-center gap-4 rounded-md border p-4 font-medium text-sm has-checked:border-primary has-checked:bg-primary/10">
                <Radio name="payment-method" />
                <Wallet className="size-5" />
                E-Wallet
              </label>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="voucher" className="font-medium">
              Kode Voucher (Jika ada)
            </label>
            <div className="flex items-center gap-2">
              <Input name="voucher" placeholder="Masukan kode voucher" />
              <Button variant="secondary">Gunakan</Button>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Ringkasan Transaksi</label>
            <div className="grid gap-2 *:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Paket {plans[0].name}
                </span>
                <span className="justify-end">
                  {formatCurrency(
                    plans[0].price.monthly,
                    plans[0].price.currency,
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Biaya Admin</span>
                <span className="justify-end">
                  {formatCurrency(adminFee, plans[0].price.currency)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Pembayaran</span>
                <span className="justify-end">
                  {formatCurrency(total, plans[0].price.currency)}
                </span>
              </div>
            </div>
          </div>
          <Link to="/payment/p_1" className={button({ className: "w-full" })}>
            Bayar
          </Link>
        </form>
      </div>
    </main>
  );
}
