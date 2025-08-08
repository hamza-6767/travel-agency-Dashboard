import React from 'react'
import { Outlet } from 'react-router'
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { Navitems } from 'component'
const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        MobileSidebar
        <aside className='w-full max-w-[270px] hidden lg:block'>
        <SidebarComponent>
            <Navitems />
        </SidebarComponent>
        </aside>
        <aside className='children'>
            <Outlet />
        </aside>
        </div>
  )
}

export default AdminLayout