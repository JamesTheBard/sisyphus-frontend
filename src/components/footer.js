import getConfig from "next/config"

export default function Footer({ server }) {
  const { publicRuntimeConfig } = getConfig();
  const version = publicRuntimeConfig?.version

  return (
    <footer className="footer items-center p-4 bg-base-300 text-neutral-content">
      <aside className="items-left grid-flo-col">
        <p className="font-bold">Sisyphus Server <div className="font-mono badge badge-neutral">{ server.version }</div></p>
      </aside>
    </footer>
  )
}