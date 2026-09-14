import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Writing from "./pages/Writing";
import ArticleDetail from "./pages/ArticleDetail";
import Lab from "./pages/Lab";
import Now from "./pages/Now";
import Uses from "./pages/Uses";
import CV from "./pages/CV";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="writing" element={<Writing />} />
            <Route path="writing/:slug" element={<ArticleDetail />} />
            <Route path="lab" element={<Lab />} />
            <Route path="now" element={<Now />} />
            <Route path="uses" element={<Uses />} />
            <Route path="cv" element={<CV />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
