function Logo() {
  return (
    <button
      className="bg-red-500 border border-white"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <span>LOGO</span>
    </button>
  );
}

export default Logo;
