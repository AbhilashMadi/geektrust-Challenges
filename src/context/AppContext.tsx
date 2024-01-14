import { StorageKeys } from "@/resources/stoarge.const";
import { Paths } from "@/routes/paths";
import { Dispatch, FC, ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { appReducer, intialAppState, type AppState, type AppAction, } from "@/context/reducers";

type Theme = "system" | "dark" | "light";

type AppContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  navigateToRoute: (path: Paths) => void;
  state: AppState;
  dispatch: Dispatch<AppAction>
}

export const appContext = createContext<AppContextState>({
  theme: "system",
  setTheme: () => null,
  navigateToRoute: () => null,
  state: intialAppState,
  dispatch: () => null,
})

interface IAppContext {
  children: ReactNode;
  defaultTheme?: Theme;
}

const AppContext: FC<IAppContext> = (props) => {
  const {
    children,
    defaultTheme = "system",
    ...restProps
  } = props;
  const [theme, setThemeFunc] = useState<Theme>(() => localStorage.getItem(StorageKeys.THEME_KEY) as Theme || defaultTheme);
  const [state, dispatch]: [AppState, Dispatch<AppAction>] = useReducer(appReducer, intialAppState);
  const navigate = useNavigate();

  const navigateToRoute = (path: Paths): void => {
    navigate(path);
  }

  const setTheme = (theme: Theme): void => {
    localStorage.setItem(StorageKeys.THEME_KEY, theme);
    setThemeFunc(theme);
  }

  const configureRootTheme = (): void => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }

  const values = {
    theme,
    setTheme,
    navigateToRoute,
    state,
    dispatch
  };

  useEffect(() => {
    configureRootTheme();
  }, [theme]);

  return (
    <appContext.Provider value={values} {...restProps}>
      {children}
    </appContext.Provider>
  )
}

export default AppContext