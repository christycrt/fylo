const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-dark-blue container py-8">
      <img className="h-[30px]" src="images/logo.svg" alt="fylo-logo" />
      <ul className="flex">
        <li className="mr-4 text-sm">Features</li>
        <li className="mr-4 text-sm">Team</li>
        <li className="text-sm">Sign in</li>
      </ul>
    </nav>
  );
};

export default Navbar;
