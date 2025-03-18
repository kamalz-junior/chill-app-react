import { Plus, VolumeOff } from "lucide-react";
import { Link } from "react-router";
import Badge from "~/components/ui/badge";
import Button, { button } from "~/components/ui/button";

export default function SeriesDetail({ data }) {
  return (
    <div className="">
      <figure className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black" />
        <img
          src="images/ted-lasso-h.png"
          alt=""
          className="aspect-video h-[400px] w-full object-cover"
        />
        <div className="absolute bottom-0 w-full space-y-6 p-6">
          <h1 className="font-medium text-3xl text-white">{data.title}</h1>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/watch" className={button({ variant: "primary" })}>
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
          <h2 className="font-medium">Episode</h2>
          {data.episodes.slice(0, 5).map((e) => (
            <figure key={e.episodeNumber} className="flex items-center gap-4">
              <span>{e.episodeNumber}</span>
              <img src={e.img} alt={e.title} className="h-16 object-cover" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm">{e.title}</h4>
                  <p className="text-muted-foreground text-xs">{31} min</p>
                </div>
                <p className="text-muted-foreground text-xs">{e.description}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
