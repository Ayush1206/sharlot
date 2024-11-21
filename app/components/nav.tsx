export default function Nav() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent flex items-center justify-between px-8 py-4">
        <div className="flex gap-6">
          <a href="#about" className="nav-item">
            About
          </a>
          <a href="#samples" className="nav-item">
            Sample
          </a>
        </div>
  
        <div className="text-2xl font-bold">
          <a href="/">LOGO</a>
        </div>
  
        <div className="flex gap-6">
          <a href="#events" className="nav-item">
            Upcomings
          </a>
          <a href="#contact" className="nav-item">
          Contact
          </a>
        </div>
      </nav>
    );
  }
  