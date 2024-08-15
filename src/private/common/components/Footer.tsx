const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-6 flex w-100 justify-center items-center">
      <p className="text-viridian-green-700 dark:text-viridian-green-50">&copy; {currentYear} Between. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
