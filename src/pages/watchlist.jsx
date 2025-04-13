import { useEffect, useState } from "react";
import CardPoster from "~/components/card-poster";
import { getWatchlist } from "~/service/api";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    getWatchlist().then((result) => {
      setWatchlist(result)
    })
  }, [])

  console.log(watchlist);
  

  return (
    <main className="container space-y-8 py-8">
      <h1 className="font-medium text-2xl">Watchlist</h1>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {watchlist.map((item) => (
          <CardPoster key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
}
