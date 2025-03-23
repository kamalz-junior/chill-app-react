import { Link } from "react-router";
import Badge from "./ui/badge";
import { button } from "./ui/button";

export default function CardSubscibe({ isPremium, name, date }) {
  return (
    <div
      className={`h-fit w-fit md:w-1/2 rounded-md border p-6 ${isPremium ? "bg-primary" : "bg-muted"}`}
    >
      <div className="flex items-center gap-4">
        <img src="images/Warning.png" alt="" className="size-22" />
        <div className="space-y-4">
          {isPremium && (
            <Badge className="bg-white px-4 py-1 text-muted text-xs md:text-sm hover:bg-white">
              Aktif
            </Badge>
          )}
          <div className="space-y-1">
            <h3 className="font-medium text-xs md:text-base">
              {isPremium ? `Akun Premium ${name}✨` : "Anda belum Berlangganan"}
            </h3>
            <p className="w-full text-xs md:text-base">
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
            <p className="text-xs md:text-base">
              Berlaku hingga{" "}
              <span className="text-xs md:text-base">{date}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
