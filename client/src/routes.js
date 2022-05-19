import "./index.scss";
import MainPage from "./components/pages/MainPage";
import { ADMIN_ROUTE, COMPANY_ROUTE, JOB_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, JOBSEARCH_ROUTE } from "./utils/const"
import JobSearch from "./components/pages/JobSearchPage";
import Job from "./components/pages/Job";
import Jobs from "./components/pages/JobsBar";

export const authRoutes = [
     {
         path: ADMIN_ROUTE,
         Component: <p>Admin</p>
     },
     // here you put next routs for the admins AKA access to company pages and etc
]
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: JOBSEARCH_ROUTE,
        Component: <Jobs/>
    },
    {
        path: JOB_ROUTE + '/:id',
        // Component: 
    },
    {
        path: LOGIN_ROUTE,
        // Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        // Component: Auth
    },
    {
        path: COMPANY_ROUTE + '/:id',
        // Component: CompanyPage
    },

]