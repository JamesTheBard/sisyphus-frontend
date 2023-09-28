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
            <div className="badge badge-success"><IconArrowUpCircle />&nbsp;{server.uptime}</div>

          </div>
        </div>
        <div className="stats shadow">

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg className="w-6 h-6 text-gray-800 dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
            </div>
            <div className="stat-title">Workers</div>
            <div className="stat-value">{workers.count}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg className="w-6 h-6 text-gray-800 dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9.376v.786l8 3.925 8-3.925v-.786M1.994 14.191v.786l8 3.925 8-3.925v-.786M10 1.422 2 5.347l8 3.925 8-3.925-8-3.925Z" />
              </svg>
            </div>
            <div className="stat-title">Queue Depth</div>
            <div className="stat-value">{queue.entries}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg className="w-6 h-6 text-gray-800 dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z" />
                  <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </g>
              </svg>
            </div>
            <div className="stat-title">Queue Status</div>
            <div className="stat-value">{status ? "Disabled" : "Enabled"}</div>
          </div>

        </div>
      </div>
    </div >
  )
}