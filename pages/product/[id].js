import { useRouter } from "next/router";

console.log("Product[id] page was rendered");

export default function Home() {
  const router = useRouter();
  return <h1> This page is for product {JSON.stringify(router.query)}</h1>;
}
