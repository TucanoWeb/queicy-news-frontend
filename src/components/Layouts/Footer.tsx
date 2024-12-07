const Footer = () => {
  return (
    <div className="text-white-dark text-center ltr:sm:text-left rtl:sm:text-right p-6 pt-0 mt-auto">
      © {new Date().getFullYear()}. Notícias - Todos os direitos reservados.
    </div>
  );
};

export default Footer;
