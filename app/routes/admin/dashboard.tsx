import { StatsCard, TripCard } from "../../../component";
import Header from "../../../component/Header";
import { getUser } from "~/appwrite/auth";
import { dashboardStats, allTrips  , user } from "~/constants"
const {totalUsers, userJoined, totalTrips, tripsCreated, userRole} = dashboardStats;
import type { Route } from "./+types/dashboard"

export const clientLoader = async () => await getUser();


  

const Dashboard = ({loaderData}: Route.ComponentProps) => { 
  const user =  loaderData as User | null;

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
      <section className="container">
        <h1 className="text-xl font -semibold text-dark-100">Created Trips</h1>
        <div className =" trip-grid">
          {allTrips.slice(0 ,4).map(({id , name, imageUrls, itinerary, tags, estimatedPrice}) => (
            <TripCard
              key={id}
              id={id.toString()}
              name={name}
              imageUrls={imageUrls[0]}
              location={itinerary ?.[0]?.location ?? ""}
              tags={tags}
              price = {estimatedPrice}
            />
          ))}

        </div>
      </section>
     
     

    </main>
  )
}
 
export default Dashboard