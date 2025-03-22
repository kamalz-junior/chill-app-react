import { Plus, VolumeOff } from "lucide-react";
import { Link } from "react-router";
import Badge from "~/components/ui/badge";
import Button, { button } from "~/components/ui/button";
import { data as movies } from "~/data/data";
import CardPoster from "./card-poster";

export default function MoviesDetail({ data }) {
  return (
    <div className="">
      <figure className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black" />
        <img
          src="images/guardian.png"
          alt=""
          className="aspect-video h-[400px] w-full object-cover"
        />
        <div className="absolute bottom-0 w-full space-y-6 p-6">
          <h1 className="font-medium text-3xl text-white">{data.title}</h1>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/watch-movie"
                className={button({ variant: "primary" })}
              >
                Mulai
              </Link>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent text-white hover:bg-transparent"
              >
                <Plus className="size-4" />
              </Button>
              <Badge>Premium</Badge>
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
      </figure>
      <div className="space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">
                {new Date(data.releaseDate).getFullYear()}
              </span>
              <span className="text-muted-foreground text-sm">
                {data.episodeCount} episode
              </span>
              <Badge variant="outline">16+</Badge>
            </div>
            <p className="line-clamp-3 text-muted-foreground text-sm">
              {data.synopsis}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="w-20 text-muted-foreground text-sm">Cast</span>
              <span className="text-muted-foreground text-sm">:</span>
              <span className="line-clamp-2 flex-1 text-muted-foreground text-sm">
                {Object.keys(data.mainCast)
                  .slice(0, 4)
                  .map((c) => c)
                  .join(", ")}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="w-20 text-muted-foreground text-sm">Genre</span>
              <span className="text-muted-foreground text-sm">:</span>
              <span className="line-clamp-2 flex-1 text-muted-foreground text-sm">
                {data.genres.map((g) => g).join(", ")}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="w-20 text-muted-foreground text-sm">
                Pembuat Series
              </span>
              <span className="text-muted-foreground text-sm">:</span>
              <span className="line-clamp-2 flex-1 text-muted-foreground text-sm">
                {data.creators.map((c) => c).join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-medium">Rekomendasi Serupa</h2>
          <div className="grid grid-cols-3 gap-4">
            {[movies[19], movies[16], movies[21]].map((item) => (
              <CardPoster key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
