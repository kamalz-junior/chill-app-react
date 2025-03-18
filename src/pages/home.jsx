import { VolumeOff } from "lucide-react";
import { useState } from "react";
import CardPoster from "~/components/card-poster";
import CardThumbnail from "~/components/card-thumbnail";
import MovieDetail from "~/components/series-detail";
import Badge from "~/components/ui/badge";
import Button from "~/components/ui/button";
import Carousel from "~/components/ui/carousel";
import Dialog from "~/components/ui/dialog";
import { data } from "~/data/data";
import { tedLasso } from "~/data/series";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const history = data.filter((item) => item.status === "watching");
  const top = data.filter((item) => item.top === true && item.type === "movie");
  const trending = data.filter(
    (item) => item.trending === true && item.type === "movie",
  );

  return (
    <main className="space-y-8 pb-8">
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-t from-black" />
        <img
          src="images/Hero.png"
          alt=""
          className="aspect-video h-[520px] w-screen overflow-x-visible object-cover"
        />
        <div className="absolute bottom-0 w-full">
          <div className="container space-y-6 py-6">
            <div className="space-y-4">
              <h1 className="font-medium text-3xl text-white">
                Duty After School
              </h1>
              <p className="line-clamp-2 max-w-xl text-sm text-white md:line-clamp-none">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam
                keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button>Mulai</Button>
                <Button variant="secondary">Selengkapnya</Button>
                <Badge variant="outline" className="px-4 py-2">
                  18+
                </Badge>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent text-white hover:bg-transparent"
              >
                <VolumeOff className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container space-y-6">
        <h2 className="font-medium text-xl">Melanjutkan tonton Film</h2>
        <Carousel controls>
          {history.map((item) => (
            <CardThumbnail
              key={item.id}
              data={item}
              className="min-w-0 shrink-0 grow-0 basis-full lg:basis-1/4"
            />
          ))}
        </Carousel>
      </section>
      <section className="container space-y-6">
        <h2 className="font-medium text-xl">
          Top rating Film dan Series Hari ini
        </h2>
        <Carousel controls>
          {top.map((item) => (
            <CardPoster
              key={item.id}
              data={item}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
              onClick={() => setIsOpen(true)}
            />
          ))}
        </Carousel>
      </section>
      <section className="container space-y-6">
        <h2 className="font-medium text-xl">Film Trending</h2>
        <Carousel controls>
          {trending.map((item) => (
            <CardPoster
              key={item.id}
              data={item}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
              onClick={() => setIsOpen(true)}
            />
          ))}
        </Carousel>
      </section>
      <section className="container space-y-6">
        <h2 className="font-medium text-xl">Rilis Baru</h2>
        <Carousel controls>
          {data.map((item) => (
            <CardPoster
              key={item.id}
              data={item}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
              onClick={() => setIsOpen(true)}
            />
          ))}
        </Carousel>
      </section>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <MovieDetail data={tedLasso} />
      </Dialog>
    </main>
  );
}
