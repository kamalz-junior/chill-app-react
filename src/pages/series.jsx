import { useEffect, useState } from "react";
import { Link } from "react-router";
import PosterCard from "~/components/poster-card";
import PosterInfo from "~/components/poster-info";
import Carousel from "~/components/ui/carousel";
import { getTrending, getTvShow, getTvShows, getWatchlist } from "~/lib/tmdb";

export default function Series() {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [trending, setTrending] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [watchlistRes, trendingRes, newReleaseRes] = await Promise.all([
          getWatchlist("tv"),
          getTrending("tv"),
          getTvShows("airing_today"),
        ]);

        getTvShow(trendingRes.results[0].id).then((res) => {
          setSeries(res);
        });

        setWatchlist(watchlistRes.results);
        setTrending(trendingRes.results);
        setNewRelease(newReleaseRes.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!series || isLoading) return;

  return (
    <main className="space-y-8 pb-8">
      <PosterInfo data={series} className="container" />
      <section className="container space-y-4">
        <h2 className="font-medium text-xl">Continue watching</h2>
        <Carousel controls>
          {watchlist.map((w) => (
            <Link
              key={w.id}
              to={`/series/${w.id}`}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
            >
              <PosterCard title={w.title} src={w.poster_path} premium={false} />
            </Link>
          ))}
        </Carousel>
      </section>
      <section className="container space-y-4">
        <h2 className="font-medium text-xl">Trending series</h2>
        <Carousel controls>
          {trending.map((t) => (
            <Link
              key={t.id}
              to={`/series/${t.id}`}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
            >
              <PosterCard
                title={t.name || t.title}
                src={t.poster_path}
                premium={false}
              />
            </Link>
          ))}
        </Carousel>
      </section>
      <section className="container space-y-4">
        <h2 className="font-medium text-xl">New release</h2>
        <Carousel controls>
          {newRelease.map((n) => (
            <Link
              key={n.id}
              to={`/series/${n.id}`}
              className="min-w-0 shrink-0 grow-0 basis-1/3 lg:basis-1/5"
            >
              <PosterCard title={n.title} src={n.poster_path} premium={false} />
            </Link>
          ))}
        </Carousel>
      </section>
    </main>
  );
}
