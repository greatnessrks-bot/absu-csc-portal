export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-8 sm:mt-10 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Abia State University — Computer Science Department.
        </p>
        <p className="text-[10px] sm:text-xs mt-1 sm:mt-2">
          Designed by <span className="font-semibold">ABSU CSC Students</span>
        </p>
      </div>
    </footer>
  );
};