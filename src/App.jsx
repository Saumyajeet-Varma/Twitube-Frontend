import { Route, Routes } from "react-router-dom";

import AppLayout from "./AppLayout";
import Homepage from "./pages/Homepage";
import Channel from "./pages/Channel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/channel/:username" element={<Channel />} />
      </Route>
    </Routes>
  );
}

export default App;
