import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import React from 'react'
import Navbar from '@/components/Navbar';
import TeachersDashboard from '@/components/TeachersDashboard';

type Props = {}

export const metadata = {
  title: "Dashboard 👨‍💻",
  description: "Dashboard",
}

const page = async (props: Props) => {
  const session = await getAuthSession()
  if (!session?.user) {
    return redirect("/")
  }
  return (
    <div>
      <Navbar />
      <TeachersDashboard/>
    </div>
  )
}

export default page