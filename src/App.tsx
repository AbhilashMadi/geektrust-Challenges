import ThreeDots from "@/assets/icons/ThreeDots";
import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { routes } from "@/routes/routes";
import { Paths } from "@/routes/paths";

const AppContext = lazy(() => import("@/context/AppContext"));
const Layout = lazy(() => import("@/components/common/Layout"));

const App: FC = () => {

  return (
    <Suspense fallback={<div className="flex-center min-h-screen"><ThreeDots /></div>}>
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
      </AppContext>
    </Suspense>
  )
}

export default App;