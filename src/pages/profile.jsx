import { Camera, Gem } from "lucide-react";
import { Link } from "react-router";
import Button, { button } from "~/components/ui/button";
import Input from "~/components/ui/input";

export default function Profile() {
  return (
    <main className="container space-y-8 py-8">
      <section className="flex flex-col gap-6 md:flex-row-reverse">
        <div className="h-fit flex-1 space-y-4 rounded-md bg-muted p-6">
          <div className="flex gap-4">
            <img src="src/assets/images/Warning.png" alt="" />
            <div className="space-y-2">
              <h3 className="font-medium">Saat Ini anda belum berlangganan</h3>
              <p className="text-muted-foreground">
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
            </div>
          </div>
          <Link
            to="/pricing"
            className={button({
              variant: "primary",
              className: "relative -right-22",
            })}
          >
            Mulai Berlangganan
          </Link>
        </div>
        <div className="w-full flex-1 space-y-6">
          <h1 className="font-medium text-2xl">My Profile</h1>
          <form action="" className="space-y-4">
            <label className="group inline-block">
              <figure className="relative size-20 overflow-hidden rounded-full border">
                <img
                  src="src/assets/images/Profile.png"
                  alt=""
                  className="size-full object-cover "
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 group-hover:flex">
                  <Camera className="size-5" />
                </div>
              </figure>
              <input type="file" className="hidden" />
            </label>
            <div className="grid gap-2">
              <label htmlFor="username" className="font-medium text-sm">
                Username
              </label>
              <Input id="username" defaultValue="muhammad" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium text-sm">
                Email
              </label>
              <Input
                id="email"
                type="email"
                defaultValue="muhammad@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password" className="font-medium text-sm">
                Password
              </label>
              <Input
                id="password"
                defaultValue="harisenin"
                type="password"
                required
              />
            </div>
            <div className="space-y-2">
              <Button className="w-full" disabled>
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
