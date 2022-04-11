import { useState, useEffect } from "preact/hooks"

const RSS_SERVER = "https://cisco-rss-server.glitch.me/feed"

function useFeed(href) {
  const [feed, setFeed] = useState()
  useEffect(() => {
    const url = new URL(RSS_SERVER)
    url.searchParams.set("href", href)
    fetch(url)
      .then((res) => res.json())
      .then((json) => setFeed(json))
  }, [href])
  return feed
}

export function RSSFeed({ href, count = 5 }) {
  const feed = useFeed(href)
  return (
    <div>
      {feed ? (
        <ul class="grid gap-4 grid-cols-2 w-[800px]">
          {feed.items.slice(0, count).map((item, i) => (
            <FeedItem key={i} item={item} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

function FeedItem({ item }) {
  const thumbnailURL = item.media?.thumbnail?.url?.replace(/&amp;/g, "&")
  const onClick = () => window.open(item.link, "_blank")
  return (
    <li class="bg-white rounded h-32 relative p-4 flex flex-col" xr-layer>
      <h1 dangerouslySetInnerHTML={{ __html: item.title }} class="flex-grow text-xl font-bold" />
      <p>{formatDate(item.published)}</p>
      <button
        onClick={onClick}
        xr-layer
        class="absolute bottom-4 right-4 h-10 w-10 p-3 grid place-items-center text-sm bg-pink-500 hover:bg-pink-300 text-white font-semibold rounded-full cursor-pointer"
      >
        <svg style="fill: currentColor;" viewBox="0 0 768 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M640 768H128V257.90599999999995L256 
   256V128H0v768h768V576H640V768zM384 
   128l128 128L320 448l128 128 192-192 
  128 128V128H384z"
          />
        </svg>
      </button>
    </li>
  )
}

function formatDate(timestamp) {
  // Create a date object from the timestamp
  var date = new Date(timestamp)

  // Create a list of names for the months
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // return a formatted date
  return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
}
