import { Router } from "components/Router/Router";
import { MainLayout } from "Layouts/MainLayout/MainLayout";
import React from "react";
import "moment/locale/ru";
function App() {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  );
}

export default App;
