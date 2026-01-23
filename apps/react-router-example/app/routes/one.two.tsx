import type { Route } from "./+types/one.two";

const title = "Two";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "Second page" },
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
