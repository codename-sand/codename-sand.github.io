import React from "react";
import { Route, Routes } from "react-router-dom";
import { Portfolio, Hana, Woori, NH, Hyundai, Moduda, OraiManager, Orai, Edanbi, EwelfareVip, EwelfareAdmin, Ewelfare,Intro } from "./pages";

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Intro />} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/hana-bank" element={<Hana />} />
          <Route path="/e-welfare" element={<Ewelfare />} />
          <Route path="/e-welfare/admin" element={<EwelfareAdmin />} />
          <Route path="/e-welfare/vip" element={<EwelfareVip />} />
          <Route path="/e-danbi" element={<Edanbi />} />
          <Route path="/orai" element={<Orai />} />
          <Route path="/orai/manager" element={<OraiManager />} />
          <Route path="/moduda" element={<Moduda />} />
          <Route path="/theHyundai-selfservice" element={<Hyundai />} />
          <Route path="/nh-bank" element={<NH />} />
          <Route path="/woori-bank" element={<Woori />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
