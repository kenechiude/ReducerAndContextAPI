import UserForm from "./components/UserForm";
import { ContextProvider } from "./context/AppContext";

export default function App() {
  return (
    <ContextProvider>
      <UserForm />
    </ContextProvider>
  );
}
