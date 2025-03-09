import { Copy, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import PlanCard from "~/components/plan-card";
import Button from "~/components/ui/button";
import Radio from "~/components/ui/radio";
import { plans } from "~/constants/plans";
import { formatCurrency } from "~/lib/utils";

export default function PaymentDetail() {
  const [timeLeft, setTimeLeft] = useState(1 * 3600);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const adminFee = 3000;
  const total = plans[0].price.monthly + adminFee;

  return (
    <main className="container space-y-8 py-8">
      <div className="space-y-4 rounded-md bg-muted p-6">
        <p className="text-center font-medium">Lakukan pembayaran sebelum</p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg">
              {hours.toString().padStart(2, "0")}
            </span>
            <span className="text-muted-foreground">jam</span>
          </div>
          <span className="">:</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg">
              {minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-muted-foreground">menit</span>
          </div>
          <span className="">:</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg">
              {seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-muted-foreground">detik</span>
          </div>
        </div>
      </div>
      <h1 className="font-medium text-xl">Ringkasan Pembayaran</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <PlanCard plan={plans[0]} />
        <form action="" className="space-y-4 md:col-span-2">
          <div className="grid gap-2 *:text-sm">
            <label htmlFor="payment-method" className="font-medium">
              Metode Pembayaran
            </label>
            <label className="flex items-center gap-4 rounded-md border p-4 font-medium text-sm has-checked:border-primary has-checked:bg-primary/10">
              <Radio name="payment-method" defaultChecked="true" />
              <Wallet className="size-5" />
              E-Wallet
            </label>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tanggal Pembelian</span>
              <span className="justify-end text-sm">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Kode Pembayaran</span>
              <div className="flex items-center gap-1">
                <span className="justify-end text-sm">3KDj5FOV</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-sm"
                >
                  <Copy className="size-4" />
                </Button>
              </div>
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
          <Button type="submit" className="w-full">
            Bayar
          </Button>
        </form>
      </div>
    </main>
  );
}
