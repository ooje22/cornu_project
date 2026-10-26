import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { CandidatesPage } from "./pages/CandidatesPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { ComplaintDetailPage } from "./pages/ComplaintDetailPage";
import { ComplaintsPage } from "./pages/ComplaintsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { FileDetailPage } from "./pages/FileDetailPage";
import { FilesPage } from "./pages/FilesPage";
import { IssueDetailPage } from "./pages/IssueDetailPage";
import { IssuesPage } from "./pages/IssuesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { WorkspaceProvider } from "./state/workspace";

export function App() {
  return (
    <BrowserRouter>
      <WorkspaceProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="files" element={<FilesPage />} />
            <Route path="files/:fileId" element={<FileDetailPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/candidates" element={<CandidatesPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="issues" element={<IssuesPage />} />
            <Route path="issues/:issueId" element={<IssueDetailPage />} />
            <Route path="complaints" element={<ComplaintsPage />} />
            <Route path="complaints/:complaintId" element={<ComplaintDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </WorkspaceProvider>
    </BrowserRouter>
  );
}
