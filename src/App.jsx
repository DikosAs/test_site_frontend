import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import TestsPage from "./pages/test_page/TestsPage.jsx";
import AccountRoutes from "./pages/account/AccountRoutes.jsx";
import EditorRoutes from "./pages/editor/EditorRoutes.jsx";

import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ '/account/*' } element={ <AccountRoutes /> } />
        <Route path={ '/tests/' } element={ <TestsPage /> } />
        <Route path={ '/tests/:page' } element={ <TestsPage /> } />
        <Route path={ '/editor/*' } element={ <EditorRoutes /> } />
        <Route path={ '*' } element={ <Navigate to="/tests" replace /> } />
      </Routes>
    </>
  )
}
