import React, { useContext } from "react";
import AddTodo from "../Components/AddTodo";
import Loading from "../Components/Loading";
import TodoList from "../Components/TodoList";
import { FirebaseContext } from "../Context/firebase/FirebaseState";
import { AlertContext } from "../Context/alert/alertContext";

export default function Home() {
  const { notes, loading } = useContext(FirebaseContext);
  const { alert } = useContext(AlertContext);

  React.useEffect(() => {
    notes.fetch();
    //eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      {!alert.visible ? (
        <h1 style={{ margin: "1rem 0" }}>React Hooks training</h1>
      ) : null}
      <AddTodo />
      <hr />
      {loading ? <Loading /> : <TodoList />}
    </React.Fragment>
  );
}