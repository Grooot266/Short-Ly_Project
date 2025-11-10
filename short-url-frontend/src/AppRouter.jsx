import App from "./App";
import ShortenUrlPage from "./components/ShortenUrlPage";

const AppRouter = () => {
  return (
    <>
       <Router>
       <NavBar/>
       <Toaster position='bottom-center'/>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/dashboard' element={<DashboardLayout/>}/>
          
        </Routes>
        <Footer/>
       </Router>
    </>
  );
}


export default AppRouter;

export const SubDomainRouter = () => {

    return (
         <Routes>
          <Route path='/:url' element={<ShortenUrlPage />}/>
        </Routes>
    );

}