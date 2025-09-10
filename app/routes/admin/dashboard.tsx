import Header from "component/Header"

const Dashboard = () => {
  const user = {name: "hamza"}
  return (
    <main className="dashboard wrapper">
      <Header
      title={`Welacome${user?.name ?? "Guest"} ` }
      description = "Tarack activity , trends and popular destinations in el time"
      
      />
      Dashboard page content

    </main>
  )
}
 
export default Dashboard