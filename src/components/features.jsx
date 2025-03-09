import {
  Captions,
  Download,
  FlagOff,
  GalleryHorizontal,
  TabletSmartphone,
  TvMinimal,
} from "lucide-react";

export default function Features({ className }) {
  return (
    <div className={`grid grid-cols-2 gap-6 md:grid-cols-3 ${className}`}>
      {features.map((feature) => (
        <div key={feature.label} className="flex flex-col items-center gap-4">
          {feature.icon}
          <span className="text-center text-muted-foreground text-sm">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const features = [
  { label: "Download Konten Pilihan", icon: <Download /> },
  { label: "Tidak ada iklan", icon: <FlagOff /> },
  { label: "Tonton Semua Konten ", icon: <GalleryHorizontal /> },
  { label: "Kualitas Maksimal Sampai Dengan 4K", icon: <TvMinimal /> },
  {
    label: "Tonton di Tv, Tablet, Mobile, dan Laptop",
    icon: <TabletSmartphone />,
  },
  { label: "Subtitle Untuk Konten Pilihan", icon: <Captions /> },
];
