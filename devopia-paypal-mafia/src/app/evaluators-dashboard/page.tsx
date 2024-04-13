import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import React from 'react'
import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import Navbar from '@/components/Navbar';
import CreateACourseCard from '@/components/dashboard/CreateACourseCard';
import CourseGalleryCard from '@/components/dashboard/CourseGalleryCard';
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