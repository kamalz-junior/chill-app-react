import { Link } from "react-router";
import Badge from "./ui/badge";
import { button } from "./ui/button";

export default function CardSubscibe({ isPremium, name, date }) {
  return (
    <div
      className={`h-fit w-1/2 rounded-md border p-6 ${isPremium ? "bg-primary" : "bg-muted"}`}
    >
      <div className="flex items-center gap-4">
        <img src="images/Warning.png" alt="" className="size-22" />
        <div className="space-y-4">
          {isPremium && (
            <Badge className="bg-white px-4 py-1 text-muted text-sm hover:bg-white">
              Aktif
            </Badge>
          )}
          <div className="space-y-1">
            <h3 className="font-medium">
              {isPremium ? `Akun Premium ${name}✨` : "Anda belum Berlangganan"}
            </h3>
            <p className="">
              {isPremium
                ? "Saat ini kamu sedang menggunakan akses akun premium"
                : "Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!"}
            </p>
          </div>
          {!isPremium ? (
            <Link
              to="/premium"
              className={button({
                variant: "primary",
              })}
            >
              Subscribe
            </Link>
          ) : (
            <p className="">
              Berlaku hingga <span className="text-sm">{date}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
