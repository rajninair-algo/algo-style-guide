const Header = () => {
  return (
    <div className="sticky z-10 top-0 flex justify-end items-center bg-primary-dark text-white py-4 px-6 ">
      {/* <h3>Header</h3> */}
      <ul className="flex gap-3 items-center">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};
export default Header;
