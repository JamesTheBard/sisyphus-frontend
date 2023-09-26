export default function Footer({ server }) {
  return (
    <footer className="footer items-center p-4 bg-base-300 text-base-content">
      <aside className="text-left">
        <p>Sisyphus API Server version <span className="font-mono">{ server.version }</span>, online for { server.uptime }.</p>
      </aside>
    </footer>
  )
}