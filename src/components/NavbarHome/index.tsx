import { SwalHelper } from '@/helpers';
import { ROUTER } from '@/router';
import { AuthService } from '@/services';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function NavbarHome() {

  const { login, logout } = AuthService();

  const loginHandler = async () => {
    const resp = await login();
    SwalHelper.timer(resp, ROUTER.HOME);
  }

  const logoutHandler = async () => {
    const resp = await logout();
    SwalHelper.timer(resp, ROUTER.LOGIN);
  }

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex ms-auto">
            <Button variant='info' className="me-2" onClick={()=>loginHandler()}>Login</Button>
            <Button variant='danger' className="me-2" onClick={()=>logoutHandler()}>Logout</Button>
            <Button variant='success'>Notifications</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
