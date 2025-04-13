import { Check, ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import Badge from "~/components/ui/badge";
import Button from "~/components/ui/button";
import { imgUrl } from "~/service/api";

export default function CardPoster({ data, className, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <figure
        className="relative aspect-2/3 overflow-hidden rounded-md"
        {...props}
      >
        {data.isPremium && (
          <Badge className="absolute top-4 left-4">Premium</Badge>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/50" />
        <img src={imgUrl + data.poster_path} alt="" className="size-full object-cover" />
      </figure>
      {isHovered ? (
        <Preview
          data={data}
          className="-translate-1/2 absolute top-1/2 left-1/2 z-50 w-[280px]"
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : null}
    </div>
  );
}

function Preview({ data, className, ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-md bg-card ${className}`}
      {...props}
    >
      <img src={data.thumbnail} alt="" className="object-cover" />
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-2">
          <Button size="icon" className="rounded-full">
            <Play className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Check className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto rounded-full"
          >
            <ChevronDown className="size-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Badge>{data.age}</Badge>
          <span className="text-sm">{data.episode} episode</span>
        </div>
        <div className="flex items-center justify-between">
          {data.genres.map((genre, index) => (
            <span key={index} className="text-muted-foreground text-sm">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
