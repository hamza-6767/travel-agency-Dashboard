import { StatsCard, TripCard } from "component"
import Header from "component/Header"

const Dashboard = () => {
  const user = {name: "hamza"};
  const dashboardStats = {
    totalUsers: 1245,
    userJoined :{currentMonth: 218, lastMonth: 176},
    totalTrips:3210,
    tripsCreated : {currentMonth: 150, lastMonth: 250},
    userRole :{total : 62 , currrentMonth: 25, lastMonth: 15}
  }
  const {totalUsers, userJoined, totalTrips, tripsCreated, userRole} = dashboardStats;
  return (
    <main className="dashboard wrapper">
      <Header
      title={`Welacome${user?.name ?? "Guest"} ` }
      description = "Tarack activity , trends and popular destinations in el time"
      
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
           <StatsCard
            headerTitle="Total Users"
            total= {totalUsers}
            currentMonthCount={userJoined.currentMonth}
            lastMonthCount={userJoined.lastMonth}
           
           />
           <StatsCard
            headerTitle="Total Trips"
            total= {totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
            
           />
           <StatsCard
            headerTitle="Active Users"
            total= {userRole.total}
            currentMonthCount={userRole.currrentMonth}
            lastMonthCount={userRole.lastMonth}
           
           />

        </div>

      </section>
     
      <TripCard />

    </main>
  )
}
 
export default Dashboard