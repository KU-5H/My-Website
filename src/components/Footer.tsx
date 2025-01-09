const Footer = () => {
  return (
    <footer className="bg-glass w-full p-4 text-center text-white md:fixed md:bottom-0 md:left-0">
      <p className="text-sm md:text-sm">
        &copy; {new Date().getFullYear()} Kush Patel. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;