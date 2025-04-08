const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Зарлал</h1>
            <span className="text-xs text-gray-400">Бүгдийг харах</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Шалгалт  </h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-04-08</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Шалгалт авах өдөр урагшилсан тул холбогдох багш ажилчдаас шалгалтын өдрийг тодруулна уу! </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Шалгалт  </h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-04-08</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Шалгалт авах өдөр урагшилсан тул холбогдох багш ажилчдаас шалгалтын өдрийг тодруулна уу! </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Шалгалт  </h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-04-08</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Шалгалт авах өдөр урагшилсан тул холбогдох багш ажилчдаас шалгалтын өдрийг тодруулна уу! </p>
        </div>
        </div>
    </div>
  )
}

export default Announcements