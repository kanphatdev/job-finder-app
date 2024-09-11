const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center p-[3rem]">
      <div className="navbar-start">
        <a className="btn btn-ghost ">
          <h1 className="capitalize text-clarity text-xl">
            job <strong className="capitalize">search</strong>{" "}
          </h1>
        </a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal space-x-4">
          <li className="capitalize">
            <a href="#jobs">jobs</a>
          </li>
          <li className="capitalize">
            <a href="#companies">companies</a>
          </li>
          <li className="capitalize">
            <a href="#about">about</a>
          </li>
          <li className="capitalize">
            <a href="#contact">contact</a>
          </li>
          <li className="capitalize">
            <a href="#blog">blog</a>
          </li>
          <li className="capitalize">
            <a href="#login">login</a>
          </li>
          <li className="capitalize">
            <a href="#register">register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
