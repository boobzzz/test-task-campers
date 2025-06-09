import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Logo from './components/Logo/Logo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import './App.css';

const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage.jsx'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage.jsx'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage/FeaturesPage.jsx'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage.jsx'));

function App() {
    return (
        <>
            <header>
                <div className="wrapper">
                    <Logo />
                    <Navigation />
                </div>
            </header>
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<CampersPage />} />
                        <Route path="/catalog/:itemId" element={<CamperDetailsPage />}>
                            <Route path="features" element={<FeaturesPage />} />
                            <Route path="reviews" element={<ReviewsPage />} />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    )
}

export default App;
