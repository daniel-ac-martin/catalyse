import type { Route } from "./+types/three";

const title = "Three";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "Third page" },
  ];
}

export default function Page() {
  return (
    <>
      <h1>
        {title}
      </h1>
      <p>{title} content</p>
    </>
  );
}
