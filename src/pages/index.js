import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import StatsOverview from '@/components/statsOverview'
import { useEffect, useState } from 'react'
import WorkerStatus from '@/components/workerTable'
import Footer from '@/components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const apiUrl = process.env.NEXT_PUBLIC_SISYPHUS_API
  const [workerData, setWorkerData] = useState({ workers: [] })
  const [queueData, setQueueData] = useState({ attributes: {} })
  const [serverData, setServerData] = useState({ version: "Unknown", uptime: "Unknown" })

  useEffect(() => {
    fetch(apiUrl + "/queue")
      .then(response => response.json())
      .then(data => setQueueData(data))
    fetch(apiUrl + "/workers")
      .then(response => response.json())
      .then(data => setWorkerData(data))
    fetch(apiUrl + "/status/config")
      .then(response => response.json())
      .then(data => setServerData(data))

    setInterval(() => {
      fetch(apiUrl + "/queue")
        .then(response => response.json())
        .then(data => setQueueData(data))
      fetch(apiUrl + "/workers")
        .then(response => response.json())
        .then(data => setWorkerData(data))
    }, 3000)

    setInterval(() => {
      fetch(apiUrl + "/status/config")
        .then(response => response.json())
        .then(data => setServerData(data))
    }, 20000)
  }, [apiUrl])

  return (
    <>
      <Head>
        <title>Sisyphus Status</title>
      </Head>
      <Navbar />
      <main
        className={`flex flex-col items-center ${inter.className} bg-black`}
      >
        <StatsOverview queue={queueData} workers={workerData} server={serverData} />
        <WorkerStatus workers={workerData} />
      </main>
      {/* <div className="fixed bottom-0 mx-auto w-full">
        <Footer server={serverData} />
      </div> */}
    </>
  )
}
