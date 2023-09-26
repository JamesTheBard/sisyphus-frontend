import Link from "next/link"

export default function Navbar() {
  var apiUrl = process.env.NEXT_PUBLIC_SISYPHUS_API
  var databaseUrl = process.env.NEXT_PUBLIC_SISYPHUS_DB

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Sisyphus Server</Link>
      </div>
      <div className="navbar-end space-x-4">
        <Link href={databaseUrl} className="btn bg-secondary text-white font-bold" target="_blank">Database</Link>
        <Link href={apiUrl + "/doc"} className="btn bg-secondary text-white font-bold" target="_blank">API DOC</Link>
      </div>
    </div>
  )
}