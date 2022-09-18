import logo from './logo.svg';
import { NavLink, Outlet } from 'react-router-dom';

import './App.css';
import BaiTapThucHanhLayout from './components/BaiTapLayoutComponent/BaiTapThucHanhLayout';
import BaiTapThuKinh from './components/BaiTapThuKinh/BaiTapThuKinh';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="">BaiTapJS</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài tập reactJS</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/baitapthuchanhlayout">Bài tập layout components</NavLink>
                <NavLink className="dropdown-item" to="/baitapthukinh">Bài tập thử kính</NavLink>
                <NavLink className="dropdown-item" to="/baitapform">Bài tập form</NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
