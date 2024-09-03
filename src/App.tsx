import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";

import { setTheme } from "./state/ui/ui-slice";
import { fetchUsers } from "./state/users/users.actions";

import { UsersTable } from "./components/users-table/UsersTable";
import { ChangeTheme } from "./components/ui/ChangeTheme";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  useEffect(() => {
    dispatch(fetchUsers());

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme as "light" | "dark"));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={`w-full h-screen flex justify-start flex-col`}>
      <div className='flex items-center justify-end p-4'>
        <ChangeTheme />
      </div>
      <h1 className='text-center font-bold text-2xl'>Users Table</h1>
      <UsersTable />
    </div>
  );
}

export default App;
