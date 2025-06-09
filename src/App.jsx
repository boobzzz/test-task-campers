import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Logo from './components/Logo/Logo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import CampersPage from './pages/CampersPage/CampersPage.jsx';
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import './App.css';

function App() {
    return (
        <>
            <header>
                <Logo />
                <Navigation />
            </header>
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<CampersPage />} />
                        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    )
}

export default App;
