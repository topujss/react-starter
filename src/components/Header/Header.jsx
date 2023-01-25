import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <section className="shadow-sm bg-red-400">
        <header className="max-w-screen-xl mx-auto flex justify-between items-center py-5">
          <Link to="/" className="logo">
            <img className="w-52" src="https://download.blender.org/branding/blender_logo.png" alt="" />
          </Link>
          <nav>
            <ul className="flex gap-x-5 text-xl font-light">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shop">Service</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}
