export const MAINROUTES = {
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/signup",
  EMPLOYER_DASHBOARD: "/employer",
  PROFILE: "/profile",
  JOBS: "/jobs",
  CANDIDATES: "/candidates",
  ABOUT: "/about",
};

export const unprotectedRoutes = [MAINROUTES.LOGIN, MAINROUTES.SIGNUP];
