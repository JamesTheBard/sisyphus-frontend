import WorkerTableRow from "./workerTableRow";

export default function WorkerStatus({ workers }) {

  return (
    <div className="card w-2/3 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Worker Status</h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="w-20">Enabled</th>
                <th className="w-40">Hostname</th>
                <th>Progress</th>
                <th className="w-24 text-center"></th>
                <th className="w-24 text-center">Module</th>
              </tr>
            </thead>
            <tbody>
              {workers.workers.map(w => (<WorkerTableRow key={w.worker_id} worker={w} />))}
            </tbody>
          </table>
        </div></div></div>
  )
}