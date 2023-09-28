import Link from "next/link"
import getConfig from "next/config"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const { publicRuntimeConfig } = getConfig();
  const version = publicRuntimeConfig?.version
  const apiUrl = process.env.NEXT_PUBLIC_SISYPHUS_API
  const databaseUrl = process.env.NEXT_PUBLIC_SISYPHUS_DB

  return (
    <div className={`navbar bg-base-100 ${inter.className}`}>
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Sisyphus Status<div className="badge badge-neutral badge-md">{ version }</div></Link>
        
      </div>
      <div className="navbar-end space-x-4">
        <Link href={databaseUrl} className="btn bg-secondary text-white font-bold" target="_blank">Database</Link>
        <Link href={apiUrl + "/doc"} className="btn bg-secondary text-white font-bold" target="_blank">API DOC</Link>
      </div>
    </div>
  )
}