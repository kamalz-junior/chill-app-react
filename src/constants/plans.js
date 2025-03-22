export const plans = [
  {
    id: "plan_individu",
    name: "Individu",
    description:
      "Streaming terjangkau untuk satu pengguna dengan kualitas standar",
    price: {
      monthly: 49990,
      currency: "IDR",
    },
    limit: {
      devices: 1,
      resolution: "HD",
      downloads: "Unlimited",
    },
    features: ["Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"],
  },
  {
    id: "plan_berdua",
    name: "Berdua",
    description: "FHD streaming for small households or with friends",
    price: {
      monthly: 79990,
      currency: "IDR",
    },
    limit: {
      devices: 2,
      resolution: "FHD",
      downloads: "Unlimited",
    },
    features: ["Tidak ada iklan", "Kualitas 1080p", "Download konten pilihan"],
  },
  {
    id: "plan_keluarga",
    name: "Keluarga",
    description: "Ultimate 4K experience for families or enthusiasts",
    price: {
      monthly: 159990,
      currency: "IDR",
    },
    limit: {
      devices: 5,
      resolution: "4K",
      downloads: "Unlimited",
    },
    features: ["Tidak ada iklan", "Kualitas 4K", "Download konten pilihan"],
  },
];
