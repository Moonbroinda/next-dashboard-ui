import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "Үндсэн цэс",
    items: [
      {
        icon: "/home.png",
        label: "Нүүр хуудас",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Багш нарт",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Сурагчид",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Эцэг Эх",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Сургалтын хөтөлбөр",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Анги",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Хичээл",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Шалгалт",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Даалгавар",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Дүн",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Ирц",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Захидал",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Зарлал",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "БУСАД",
    items: [
      {
        icon: "/profile.png",
        label: "Профайл",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Тохиргоо",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Гарах",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className='mt-4 text-sm'>{
      menuItems.map(i=>(<div className="flex flex-col gap-2" key={i.title}>
        <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
        {i.items.map(item=>{
          if(item.visible.includes(role)){
            return (
              <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight">
        <Image src={item.icon} alt="" width={20} height={20}/>
        <span className="hidden lg:block">{item.label}</span>
        </Link>
            )
          }
        })}
      </div>
      ))
    }</div>
  )
}

export default Menu