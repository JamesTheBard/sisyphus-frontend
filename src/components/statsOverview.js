import { useEffect, useState } from "react"
import IconArrowUpCircle from "./iconArrowUp"
import axios from "axios"

export default function StatsOverview({ queue, workers, status, server }) {

  const apiUrl = process.env.NEXT_PUBLIC_SISYPHUS_API
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get(apiUrl + '/queue');
        setToggle(!response.attributes.disabled);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  const changeState = () => {
    axios.patch(apiUrl + '/queue', {disabled: toggle})
      .then((response) => {
        setToggle(!response.data.disabled)
      })
  }

  return (
    <div className="card w-2/3 shadow-xl">
      <div className="card-body flex">
        <div className="flow-root">
          <div className="float-left">
            <h2 className="card-title float-left">API Server <div className="badge badge-neutral">{server.version}</div></h2>
          </div>
          <div className="float-right">
            <div className="badge badge-success"><IconArrowUpCircle />&nbsp;{server.uptime}</div>

          </div>
        </div>
        <div className="stats shadow flex">

          <div className="stat w-1/3">
            <div className="stat-figure text-secondary">
              <svg className="w-6 h-6 text-gray-800 dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
            </div>
            <div className="stat-title">Online Workers</div>
            <div className="stat-value">{workers.count}</div>
          </div>

          <div className="stat w-1/3">
            <div className="stat-figure text-secondary">
              <svg className="w-6 h-6 text-gray-800 dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9.376v.786l8 3.925 8-3.925v-.786M1.994 14.191v.786l8 3.925 8-3.925v-.786M10 1.422 2 5.347l8 3.925 8-3.925-8-3.925Z" />
              </svg>
            </div>
            <div className="stat-title">Queue Depth</div>
            <div className="stat-value">{queue.entries}</div>
          </div>

          <div className="stat w-1/3">
            <div className="stat-figure text-secondary">
              <input onClick={changeState} type="checkbox" className="toggle toggle-secondary toggle-lg" defaultChecked={ toggle ? true : false } />
            </div>
            <div className="stat-title">Queue Status</div>
            <div className="stat-value">{ toggle ? "Enabled" : "Disabled" }</div>
          </div>

        </div>
      </div>
    </div >
  )
}