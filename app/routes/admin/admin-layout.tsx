
import { Outlet } from 'react-router'
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { Navitems , MobileSidebar } from "../../../component";
import { account } from '~/appwrite/client';
import { redirect } from 'react-router';
import { getExistingUser ,storeUserData } from '~/appwrite/auth';


export async function clientLoader() {
    try {
        const user = await account.get();
        if (!user.$id) {
            // No authenticated user, redirect to sign-in
            return redirect("/sign-in");
        }

        // Check if a document already exists for this user in your database
        const existingUser = await getExistingUser(user.$id);

        if (existingUser) {
            // User document exists, return it or redirect as needed
            // For example, redirect admin users to a different page
            if (existingUser.status === "admin") { 
                return existingUser;
            }
            return redirect("/");
        } else {
            // User authenticated with Appwrite but no document in the database
            // This is their first time logging in.
            console.log("Creating new user document...");
             const newUser = await storeUserData();
            return newUser;
            
        }

    } catch (e) {
        console.error("Loader Error", e);
        // An error occurred, likely because the user is a guest.
        return redirect("/sign-in");
    }
}

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <MobileSidebar />        
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

export default AdminLayout;