import { NavLink } from 'react-router-dom'
import '../App.css'
export const Landing = () => {


    
    return (

        <div className='landingPageContainer'> 
            <nav>
                <div className='navHeader'>
                    <h2>Our Video call</h2> 
                    </div>
                 <div className='navlist'>
                    <p>join as guest</p>
                     <p>Register</p>
                      <div role='button'>
                        <p>login</p>
                      </div>
                 </div>
            </nav>
            <div className='landingmainContainer'>
               <div>
                <h3><span style={{color: 'yellow'}} >Connect</span></h3>
                <p>Cover a distance by Our apna call</p>
                <div role='button'>
                     < NavLink to={"/auth"}>Get started</NavLink>
                </div>
               
               </div> 
               <div>
                <img src='../public/mobile.png'></img>
               </div>
            </div>
        </div>
    )
}