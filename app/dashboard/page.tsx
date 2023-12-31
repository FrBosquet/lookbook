'use client'

import { signOut, useSession } from "next-auth/react"

export default function Page() {
  const { data } = useSession({
    required: true,
  })

  if (!data || !data.user) return null

  return (
    <main className="p-12 flex flex-col gap-4">
      <h1 className="text-4xl uppercase tracking-tighter">My<span className="text-gray-400">dashboard</span></h1>
      <aside>
        <img src={data.user.image as string} alt={data.user.name as string} className="rounded-full w-24 h-24" />
        <p>Hi {data.user.name}!</p>

      </aside>
      <button className="inline-block" onClick={() => signOut()}>Sign out</button>
    </main>
  )
}
