import { useRouter } from "next/router";

console.log("PRODUCTS page was rendered");

export default function Home() {
  const router = useRouter();
    return <h1> I'm a second page, Products. {JSON.stringify(router.query)}</h1>;
}
