import { PreviewSplit } from "./Preview"
import { Counter } from "@/lib/react/Counter"
import { RSSFeed } from "@/lib/react/RSSFeed"

const links = [
  ["Hubs Room", "https://hubs.aelatgt.net/GX5roVM/cisco-hubs-scripts"],
  ["Room Script", "/room.js"],
  ["Build (JS)", "/lib/index.js"],
  ["Build (CSS)", "/lib/style.css"],
]

export function App() {
  return (
    <>
      <PreviewSplit>
        <RSSFeed href="https://www.calendar.gatech.edu/feeds/events.xml" count={6} />
      </PreviewSplit>
      <LinksWidget />
    </>
  )
}

function LinksWidget() {
  return (
    <div className="fixed top-4 left-4 group flex flex-col items-start gap-2">
      <ExternalLinkIcon />
      <div className="hidden group-hover:block">
        <LinksList />
      </div>
    </div>
  )
}

function ExternalLinkIcon() {
  return (
    <span className="text-gray-500 grid place-content-center p-2 border rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </span>
  )
}

function LinksList() {
  return (
    <ul className="font-mono text-blue-500 underline p-2 bg-white rounded-lg border">
      {links.map(([label, href], i) => (
        <li key={i}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
