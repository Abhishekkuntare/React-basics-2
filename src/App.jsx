import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Age from "./pages/Age";
import Cat from "./pages/Cat";
import Contact from "./pages/Contact";
import { Error } from "./pages/Error";
import Excuses from "./pages/Excuses";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryCom from "./pages/ReactQueryCom";
import Form from "./pages/Form";

export const AppContext = createContext();

const App = () => {
  const [username, setUsername] = useState("Abhishek ");
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/age" element={<Age />} />
            <Route path="/excuses" element={<Excuses />} />
            <Route path="/reactquerycom" element={<ReactQueryCom />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
