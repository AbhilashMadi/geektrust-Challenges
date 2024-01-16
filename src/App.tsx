import ThreeDots from "@/assets/icons/ThreeDots";
import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { routes } from "@/routes/routes";
import { Paths } from "@/routes/paths";

const ErrorBoundary = lazy(() => import("@/pages/handlers/ErrorBoundary"));
const AppContext = lazy(() => import("@/context/AppContext"));
const Layout = lazy(() => import("@/components/common/Layout"));
const Toaster = lazy(() => import("sonner").then((module) => ({ default: module.Toaster })));

const App: FC = () => {

  return (
    <Suspense fallback={<main className="flex-center min-h-screen"><ThreeDots /></main>}>
      <ErrorBoundary>
        <AppContext>
          <Layout>
            <Routes>
              {routes.map((obj) => {
                return <Route key={obj.path}
                  index={obj.path === Paths.LANDING ? true : false}
                  path={obj.path}
                  element={<obj.element />} />
              })}
            </Routes>
          </Layout>
          <Toaster position="bottom-right" />
        </AppContext>
      </ErrorBoundary>
    </Suspense>
  )
}

export default App;