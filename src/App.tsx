import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@/redux';
import { AuthGuard } from '@/guards';
import { ROUTER } from '@/router';
import { SuspenseLazy } from '@/components/SuspenseLazy';
import { BASE_URL } from '@/env';
import { NavbarHome } from './components';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter basename={BASE_URL}>

        <NavbarHome/>

        <Routes>
          <Route element={<AuthGuard/>}>
            <Route path={`${ROUTER.MAIN}/`} element={<SuspenseLazy path={import('@/pages/SolicitudesPage')}/>}/>
            <Route path={`${ROUTER.MAIN}/:id`} element={<SuspenseLazy path={import('@/pages/HistoryPage')}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
