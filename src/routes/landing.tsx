import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/landing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-3 drop-shadow-lg">Zintar</h1>
      <p className="text-sm mb-5 text-center drop-shadow-md">
        Your AI-powered Upwork assistant.
        <br />
        Automate job search and proposal writing — save time, win projects.
      </p>

      <button
        className="w-full bg-white text-indigo-700 font-bold py-2 rounded-md mb-4 hover:bg-indigo-100 transition"
        onClick={() => {
          // TODO: Trigger job search automation or open extension dashboard
          alert("Job search started!");
        }}
      >
        Start Job Search
      </button>

      <button
        className="w-full bg-indigo-900 bg-opacity-30 border border-white rounded-md py-2 hover:bg-indigo-800 transition"
        onClick={() => {
          // TODO: Open alerts or settings page
          alert("Open alerts");
        }}
      >
        View Alerts
      </button>
    </div>
  );
}
