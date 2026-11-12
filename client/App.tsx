import "./global.css";

import type { ComponentType } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import JAideUnProche from "./pages/JAideUnProche";
import LaBlouseCoala from "./pages/LaBlouseCoala";
import Faq from "./pages/Faq";
import PreuvesResultats from "./pages/PreuvesResultats";
import JEquipeUneEquipe from "./pages/JEquipeUneEquipe";
import CommentCaMarche from "./pages/CommentCaMarche";
import Devis from "./pages/Devis";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import QuestionsSurCoala from "./pages/QuestionsSurCoala";
import MentionsLegales from "./pages/MentionsLegales";
import ExternalRedirect from "./components/ExternalRedirect";
import NotFound from "./pages/NotFound";
import { HOSTED_LOCALES } from "./i18n/locales";
import { PAGE_KEYS, pathFor, localeFromPath, type PageKey } from "./i18n/routes";
import { LocaleProvider } from "./i18n/LocaleContext";
import { RootRedirect } from "./i18n/RootRedirect";

const PrivacyPolicy = () => <ExternalRedirect to="https://shop.connectlink.fr/policies/privacy-policy" />;

const PAGE_COMPONENTS: Record<PageKey, ComponentType> = {
  home: Index,
  product: LaBlouseCoala,
  family: JAideUnProche,
  teams: JEquipeUneEquipe,
  howItWorks: CommentCaMarche,
  results: PreuvesResultats,
  explained: QuestionsSurCoala,
  faq: Faq,
  about: APropos,
  contact: Contact,
  quote: Devis,
  legal: MentionsLegales,
  privacy: PrivacyPolicy,
};

function NotFoundRoute() {
  const { pathname } = useLocation();
  return (
    <LocaleProvider locale={localeFromPath(pathname)} page={null}>
      <NotFound />
    </LocaleProvider>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            {HOSTED_LOCALES.flatMap((locale) =>
              PAGE_KEYS.map((page) => {
                const Page = PAGE_COMPONENTS[page];
                return (
                  <Route
                    key={`${locale}-${page}`}
                    path={pathFor(page, locale)}
                    element={
                      <LocaleProvider locale={locale} page={page}>
                        <Page />
                      </LocaleProvider>
                    }
                  />
                );
              }),
            )}
            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
