import { Button, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React from 'react'
import { Link, redirect } from 'react-router';
import { loginWithGoogle } from '~/appwrite/auth';
import { account } from '~/appwrite/client';


export async function  clientLoader() {
    try{
        // await new Promise(resolve => setTimeout(resolve, 100));
        const user = await account.get();

        if(user.$id) return redirect("/");

    }catch(e){
        console.log("Loder Error",e)
    }
}

const SignIn = () => {
  
  return (
    <div className = "auth"> 
    <section className ="size-full glassmorphism flex-center px-6">
        <div className ="sign-in-card">
            <header className = "header">
                <Link to="/">
                <img
                 src = "/assets/icons/logo.svg"
                 alt = "logo"
                 className= "size-[30px] "
                />                             
                </Link>
                 <h1 className = "p-28-bold text-dark-100">Travel Agency</h1>
            </header>
            <article>
                <h2 className='p-28-semibold text-dark-100 text-center'>Start you tarvel agency journey</h2>
                <p className = "p-18-regular text-center text-gary-100 !leading-7">
                     Sign in with your Google account</p>
            </article>
            <ButtonComponent
                type='button'
                iconCss='e-search-icon'
                className='button-class !h-11 !w-full'
                onClick={loginWithGoogle}
            >
                <img
                    src="/assets/icons/google.svg"
                    alt="google"
                    className="size-5"               
                />
                <span className= "p-18-semibold text-white">Sign in with Google</span>

            </ButtonComponent>
        </div>

    </section>
    
    </div>
  )
}

export default SignIn;