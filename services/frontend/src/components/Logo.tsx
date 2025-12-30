const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-8 w-auto"
        src="/images/small-logo.svg"
        alt="Auction Website Logo"
      />
      <img
        className="hidden lg:block h-8 w-auto"
        src="/images/large-logo.svg"
        alt="Auction Website Logo"
      />
    </div>
  );
};

export default Logo;
