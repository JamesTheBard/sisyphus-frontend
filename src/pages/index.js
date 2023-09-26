import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import StatsOverview from '@/components/statsOverview'
import { useEffect, useState } from 'react'
import WorkerStatus from '@/components/workerTable'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const apiUrl = process.env.NEXT_PUBLIC_SISYPHUS_API
  const [workerData, setWorkerData] = useState({ workers: [] })
  const [queueData, setQueueData] = useState({ attributes: { disabled: false } })

  useEffect(() => {
    fetch(apiUrl + "/queue")
      .then(response => response.json())
      .then(data => setQueueData(data))
    fetch(apiUrl + "/workers")
      .then(response => response.json())
      .then(data => setWorkerData(data))

    setInterval(() => {
      fetch(apiUrl + "/queue")
        .then(response => response.json())
        .then(data => setQueueData(data))
      fetch(apiUrl + "/workers")
        .then(response => response.json())
        .then(data => setWorkerData(data))
    }, 3000)
  }, [apiUrl])

  return (
    <>
      <Navbar />
      <main
        className={`flex flex-col items-center ${inter.className}`}
      >
        <StatsOverview queue={queueData} workers={workerData} status={queueData.attributes.disabled} />
        <WorkerStatus workers={workerData} />
      </main>
    </>
  )
}
