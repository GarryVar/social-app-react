import { Route, Routes, BrowserRouter } from 'react-router-dom';
import style from './App.module.css';
import style1 from './components/social-app/Content/Content.module.css';
import Header from './components/social-app/Header/Header';
import Aside from './components/social-app/Aside/Aside';
import Footer from './components/social-app/Footer/Footer';
import { links } from './scripts/items';
import Profile from './components/social-app/Profile/Profile';
import Dialogs from './components/social-app/Dialogs/Dialogs';
import News from './components/social-app/News/News';
import Music from './components/social-app/Music/Music';
import Settings from './components/social-app/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <div className={style.container}>
          <div className="social-wrapper">
            <Header />

            <Aside data={links} />

            <main className={style1.content}>
              <div className={style1.inner}>
                <Routes>
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/dialogs' element={<Dialogs />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />
                  <Route path='/settings' element={<Settings />} />
                </Routes>
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter >
  )
};
export default App;
