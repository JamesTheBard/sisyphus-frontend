export default function WorkerTableRow({ worker }) {

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold text-lg">{ worker.hostname }</div>
            <div className="badge badge-sm font-bold">{ worker.version }</div>
          </div>
        </div>
      </td>
      <td>
        { worker.task
        ? ( worker.progress
          ? <progress className="progress progress-secondary" value={ worker.progress } max="100"></progress>
          : <progress className="progress progress-secondary" max="100"></progress> )
        : <progress className="progress progress-secondary" value={0} max="100"></progress>
        }
        <br />
        { worker.job_title
        ? <span className="badge badge-accent badge-sm text-black font-bold">{ worker.job_title }</span>
        // : <span className="badge badge-ghost badge-sm font-bold">Idle</span>}
        : ""}
      </td>
        { worker.progress
        ? <td className="text-xl font-bold text-center">{ (Math.trunc(worker.progress * 10) / 10).toFixed(1) }%</td>
        : <td className="text-xl font-bold text-center text-slate-500"></td> }
      <th className="text-center">
        { worker.task
        ? <div className="badge badge-secondary text-center">{ worker.task }</div>
        : ( worker.attributes.disabled
          ? <div className="badge text-center badge-error">disabled</div>
          : <div className="badge text-center">idle</div> )
        }
      </th>
    </tr>
  )
}