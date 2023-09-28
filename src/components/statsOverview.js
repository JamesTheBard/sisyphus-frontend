import { useEffect, useState } from "react"
import IconArrowUpCircle from "./iconArrowUp"

export default function StatsOverview({ queue, workers, status, server }) {

  return (
    <div className="card w-2/3 shadow-xl">
      <div className="card-body">
        <div className="flow-root">
        <div className="float-left">
          <h2 className="card-title float-left">API Server <div className="badge badge-neutral">{server.version}</div></h2>
        </div>
        <div className="float-right">
          <div className="badge badge-success"><IconArrowUpCircle />&nbsp;{ server.uptime }</div>
      
        </div>
        </div>
        <div className="stats shadow">

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Workers</div>
            <div className="stat-value">{workers.count}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">Queue Depth</div>
            <div className="stat-value">{queue.entries}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div className="stat-title">Queue Status</div>
            <div className="stat-value">{status ? "Disabled" : "Enabled"}</div>
          </div>

        </div>
      </div>
    </div >
  )
}