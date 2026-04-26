// import { Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/DashboardPage";
// import ModulePage from "./pages/ModulePage";
// import LessonPage from "./pages/LessonPage";
// import { isLoggedIn } from "./utils/auth";

// function ProtectedRoute({ children }) {
//   return isLoggedIn() ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />

//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <DashboardPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/module/:moduleId"
//         element={
//           <ProtectedRoute>
//             <ModulePage />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/module/:moduleId/lesson/:lessonId"
//         element={
//           <ProtectedRoute>
//             <LessonPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";
import SectionPage from "./pages/SectionPage"; // ← QO'SHING
import { isLoggedIn } from "./utils/auth";

function ProtectedRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* ← YANGI ROUTE */}
      <Route
        path="/section/:id"
        element={
          <ProtectedRoute>
            <SectionPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/module/:moduleId"
        element={
          <ProtectedRoute>
            <ModulePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/module/:moduleId/lesson/:lessonId"
        element={
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}