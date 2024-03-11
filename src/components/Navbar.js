import { NavLink } from "react-router-dom";

function Navbar() {
    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            <h4>Star Wars</h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
            <li className="nav-item">
               <NavLink to={"/"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}> 
                   Home
               </NavLink>
                </li>
                <li className="nav-item">
               <NavLink to={"/planets"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}> 
                    Planets
               </NavLink>
                </li>
                <li className="nav-item">
               <NavLink to={"/starships"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}> 
                    Starships
               </NavLink>
                </li>
                <li className="nav-item">
               <NavLink to={"/people"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}> 
                  People
               </NavLink>
                </li>
               

                
            </ul>
        </div>
    </nav>;
}

export default Navbar;