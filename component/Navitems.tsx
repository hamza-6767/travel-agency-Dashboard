import { sidebarItems } from "~/constants"
import { Link } from 'react-router';
const Navitems = () => {
  return (
    <section className='nav-items'>
        <Link to='/' className='link-logo'>
        <img src='/assets/icons/logo.svg' alt='logo' 
        className="size[-30px]"/>
            <h1>Travel Agency</h1>
        </Link>
        <div className='container'>
            <nav>
                {sidebarItems.map(({id ,href,icon, label})=>(
                    <div>{label}</div>
                ))}
            </nav>
        </div>
    </section>
  )
}

export default Navitems