import { ADMIN_ROUTE, COMPANY_ROUTE, JOB_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "./utils/const"

export const authRoutes = [
     {
         path: ADMIN_ROUTE,
        //  Component: Admin
     },
     // here you put next routs for the admins AKA access to company pages and etc
]
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        // Component: Main
    },
    {
        path: JOB_ROUTE + '/:id',
        // Component: Job
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