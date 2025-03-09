import { ChevronDown, VolumeOff } from "lucide-react";
import { useState } from "react";
import CardPoster from "~/components/card-poster";
import CardThumbnail from "~/components/card-thumbnail";
import MovieDetail from "~/components/movies-detail";
import Badge from "~/components/ui/badge";
import Button from "~/components/ui/button";
import Carousel from "~/components/ui/carousel";
import Dialog from "~/components/ui/dialog";
import { genres } from "~/constants/genres";
import { data } from "~/data/data";
import { Guardians } from "~/data/movies";

export default function Movies() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(true);

  const history = data.filter(
    (item) => item.status === "watching" && item.type === "movie",
  );
  const top = data.filter((item) => item.top === true && item.type === "movie");

  const trending = data.filter(
    (item) => item.trending === true && item.type === "movie",
  );

  const movies = data.filter((item) => item.type === "movie");

  return (
    <main className="space-y-8 pb-8">
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-t from-black" />
        <img
          src="src/assets/images/hero-movies.png"
          alt=""
          className="aspect-video h-[520px] w-screen overflow-x-visible object-cover"
        />
        <div className="absolute bottom-0 w-full">
          <div className="container space-y-6 py-6">
            <div className="space-y-4">
              <div
                // onClick={() => setIsOpenGenre(true)}
                onMouseOver={() => setIsOpenGenre(true)}
                onMouseLeave={() => setIsOpenGenre(false)}
                className="relative z-50 inline-block py-8"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-white hover:text-foreground"
                >
                  Genre
                  <ChevronDown
                    className={`${isOpen ? "rotate-180" : ""} size-4 transition-transform`}
                  />
                </Button>
                {isOpenGenre ? (
                  <div className="-translate-x-1/6 absolute left-1/2 z-50">
                    <ul className="grid w-[280px] grid-cols-2 gap-x-8 rounded-md border bg-black/90 p-4">
                      {genres.map((genre) => (
                        <li key={genre.label}>
                          <a
                            href={genre.href}
                            className="inline-block py-1 font-medium text-muted-foreground text-sm hover:text-foreground"
                          >
                            {genre.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <h1 className="font-medium text-3xl text-white">
                Duty After School
              </h1>
              <p className="line-clamp-2 max-w-xl text-sm text-white md:line-clamp-none">
                "Avatar 3" melanjutkan cerita konflik antara manusia dan Na'vi
                di planet Pandora. Dalam pertempuran untuk sumber daya dan
                kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi
                tanah mereka. Film ini mengangkat tema persatuan dan perlawanan
                terhadap eksploitasi.
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
        <h2 className="font-medium text-xl">Film Persembahan Chill</h2>
        <Carousel controls>
          {movies.map((movie) => (
            <CardPoster
              key={movie.id}
              data={movie}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
              onClick={() => setIsOpen(true)}
            />
          ))}
        </Carousel>
      </section>
      <section className="container space-y-6">
        <h2 className="font-medium text-xl">Top Rating Series Hari ini</h2>
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
          {movies.map((item) => (
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
        <MovieDetail data={Guardians} />
      </Dialog>
    </main>
  );
}
