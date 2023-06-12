function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <div className=" rounded  h-screen p-20 flex flex-col items-center gap-10">
        <h1 className="font-extrabold text-4xl">404</h1>
        <h2 className="font-extrabold text-3xl">Page not found</h2>
        <p className="font-extrabold text-2xl">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
