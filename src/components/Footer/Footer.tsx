const Footer = () => {
  return (
    <footer className="footer bg-calm text-base-content p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current mb-4 text-growth">
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>
            <span className="text-energy">JobFinder Inc.</span>
            <br />
            Connecting people with opportunities since 2005
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-clarity">Job Seekers</h6>
          <a className="link link-hover text-attention">Browse Jobs</a>
          <a className="link link-hover text-attention">Career Advice</a>
          <a className="link link-hover text-attention">Job Alerts</a>
          <a className="link link-hover text-attention">Upload Resume</a>
        </nav>
        <nav>
          <h6 className="footer-title text-clarity">Employers</h6>
          <a className="link link-hover text-attention">Post a Job</a>
          <a className="link link-hover text-attention">Search Resumes</a>
          <a className="link link-hover text-attention">Employer Login</a>
          <a className="link link-hover text-attention">Recruiting Services</a>
        </nav>
        <nav>
          <h6 className="footer-title text-clarity">Company</h6>
          <a className="link link-hover text-attention">About Us</a>
          <a className="link link-hover text-attention">Contact Us</a>
          <a className="link link-hover text-attention">Press</a>
          <a className="link link-hover text-attention">Careers</a>
        </nav>
      </div>
      <div className="mt-10 text-center text-sm text-growth">
        <p>&copy; {new Date().getFullYear()} JobFinder Inc. All rights reserved.</p>
        <div className="flex gap-3 justify-center">
          <a href="/terms" className="link link-hover text-clarity">Terms of Service</a> | 
          <a href="/privacy" className="link link-hover text-clarity">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
