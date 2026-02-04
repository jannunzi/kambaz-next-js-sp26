import Module from "../modules/page";

export default function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <Module />
      </div>
      <div className="d-none d-md-block">
        <h2>Status Page</h2>
      </div>
    </div>
  );
}
