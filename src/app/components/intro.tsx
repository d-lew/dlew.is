export function Intro() {
  return (
    <div>
      <h1 className="text-6xl">
        Hi 👋 I&#39;m{" "}
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-bold">
          dlew
        </span>{" "}
      </h1>
      <h2 className="text-2xl text-gray-700">
        Here are my{" "}
        <a
          href="#"
          className="underline hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent"
        >
          projects
        </a>
      </h2>
    </div>
  );
}
