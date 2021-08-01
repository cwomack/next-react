import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return <h1> This page is for Product {JSON.stringify(router.query)}</h1>;
}
