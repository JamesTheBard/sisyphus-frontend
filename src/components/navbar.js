import Link from "next/link"

export default function Navbar() {
  var apiUrl = process.env.NEXT_PUBLIC_SISYPHUS_API

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Sisyphus</Link>
      </div>
      <div className="navbar-end">
        <Link href={apiUrl + "/doc"} className="btn bg-secondary text-white">API DOC</Link>
      </div>
    </div>
  )
}