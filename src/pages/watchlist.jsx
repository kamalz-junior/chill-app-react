import CardPoster from "~/components/card-poster";
import { data } from "~/data/data";
import { watchlist } from "~/data/watchlist";

export default function Watchlist() {
  const history = data.filter((item) =>
    watchlist.some((w) => item.id === w.movieId),
  );

  return (
    <main className="container space-y-8 py-8">
      <h1 className="font-medium text-2xl">Watchlist</h1>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {history.map((item) => (
          <CardPoster key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
}
