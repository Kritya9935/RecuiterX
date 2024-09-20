import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle" ;
import {BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/LandingPage/NavBar";
import Home from "./Components/LandingPage/Home";
import RecruiterRegister from "./Components/Recruiter/RecruiterRegiter";
import SeekerRegister from "./Components/JobSeeker/SeekerRegister";
function App(){
 return (
  <> 
<BrowserRouter>
<NavBar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/findjob" element={<h1>find job</h1>} />
<Route path="/about" element={<h1>About</h1>}/>
<Route path="/contact" element={<h1>Contact</h1>} />
{/* admin routes */}
<Route path="/admin" element={<h1>Admin Dashboard</h1>} />
<Route path="/admin/login" element={<h1>Admin Login</h1>}/>
<Route path="/admin/update" element={<h1>Admin Profile update</h1>}/>
  {/* Seeker */}
 <Route path="/seeker/register" element={<SeekerRegister/>}/> 
 <Route path="/seeker/login" element={<h1>Seeker Login</h1>} />
 <Route path="/seeker" element={<h1>Seeker Dashboard</h1>}/>
 <Route path="/seeker/jobapply" element={<h1>Seeker Job apply</h1>} />
 <Route  path="/seeker/update" element={<h1>Seeker Profile Update</h1>}/>
 <Route path="/seeker/appliedjob" element={<h1>Seeker Appled Job</h1>} />
   {/* Recruiter */}
 <Route  path="/recruiter/register" element={<RecruiterRegister/>}/>  
 <Route  path="/recruiter/login" element={<h1>Recruiter Login</h1>}/>  
 <Route  path="/recruiter" element={<h1>Recruiter Dashboard</h1>}/>  
 <Route  path="/recruiter/jobpost" element={<h1>Recruiter JobPost</h1>}/>
 <Route  path="/recruiter/appliedjob" element={<h1>Recruiter Applied Job list </h1>}/>
 <Route  path="/recruiter/update" element={<h1>Recruiter Profile Update </h1>}/>
 
<Route path="*" element={<h1>404 Page not found</h1>}/>    
</Routes>
  </BrowserRouter>
  </>
 )
}

export default App;