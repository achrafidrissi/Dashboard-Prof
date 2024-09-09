// No need for "use client" if it's not interactive
import Image from "next/image";
import Link from "next/link";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import { studentsData } from "@/lib/data";

// Define the type for a student
interface Student {
  id: number;
  studentId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
  personalityType: string;          // The student's personality type (e.g., ENTJ, ISTJ)
  characteristics: string;          // Main characteristics of the personality
  weaknesses: string;               // Personality weaknesses
  learningStyle: string;            // Preferred learning style
  advice: string;                   // Personalized advice based on the personality type
}

interface Props {
  params: {
    id: string;
  };
}

const SingleStudentPage = ({ params }: Props) => {
  const { id } = params;

  // Convert the string `id` to a number
  const studentId = parseInt(id, 10);

  // Find the student based on the ID from the route
  const student: Student | undefined = studentsData.find(
    (s) => s.id === studentId
  );

  // If the student is not found, return an error message
  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={student.photo}
                alt={student.name}
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">{student.name}</h1>
              <p className="text-sm text-gray-500">{student.address}</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{student.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{student.phone}</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">{student.grade}th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">{student.class}</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-6 shadow-md">
            <h1 className="font-extrabold text-3xl mb-4">Résultat du test de personnalité</h1>
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                    Type de personnalité : {student.personalityType}
                </h2>

                {/* Section pour les conseils basés sur le type de personnalité */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <p className="font-semibold text-xl mb-4">Voici quelques conseils basés sur le type de personnalité :</p>

                    {student.personalityType ? (
                        <div className="space-y-6 text-left">
                            {/* Caractéristiques principales */}
                            <div className="flex items-start gap-6">
                                <Image src="/star.svg" alt="Caractéristiques" width={40} height={40} />
                                <div>
                                    <h3 className="font-bold text-lg text-purple-700">Caractéristiques principales</h3>
                                    <p className="text-gray-700 leading-relaxed">{student.characteristics}</p>
                                </div>
                            </div>

                            {/* Points faibles */}
                            <div className="flex items-start gap-6">
                                <Image src="/exclamation.svg" alt="Points faibles" width={40} height={40} />
                                <div>
                                    <h3 className="font-bold text-lg text-red-600">Points faibles</h3>
                                    <p className="text-gray-700 leading-relaxed">{student.weaknesses}</p>
                                </div>
                            </div>

                            {/* Style d'apprentissage */}
                            <div className="flex items-start gap-6">
                                <Image src="/book.svg" alt="Style d'apprentissage" width={40} height={40} />
                                <div>
                                    <h3 className="font-bold text-lg text-green-600">Style d'apprentissage</h3>
                                    <p className="text-gray-700 leading-relaxed">{student.learningStyle}</p>
                                </div>
                            </div>

                            {/* Conseils */}
                            <div className="flex items-start gap-6">
                                <Image src="/lightbulb.svg" alt="Conseils" width={40} height={40} />
                                <div>
                                    <h3 className="font-bold text-lg text-blue-600">Conseils</h3>
                                    <p className="text-gray-700 leading-relaxed">{student.advice}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500">Chargement des conseils...</p>
                    )}
                </div>
            </div>
        </div>

      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <div>
          <Performance />
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
