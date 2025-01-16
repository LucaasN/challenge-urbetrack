import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Login, Details, Layout, MyImages, Images } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Navigate to="/images" replace />} />
          <Route path="images" element={<Images />} />
          <Route path="myimages" element={<MyImages />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/images" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};