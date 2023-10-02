import { Route, Routes } from "react-router-dom";
import ScreenRecorder from "../ScreenRecorder";
import VideoPreview from "../VideoPreview";

export default function AppRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<ScreenRecorder />} />
        <Route path="/file/:id" element={<VideoPreview />} />
    </Routes>
  )
}
