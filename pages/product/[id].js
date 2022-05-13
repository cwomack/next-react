import { useRouter } from "next/router";

console.log("Product[id] page was rendered");

export default function Home() {
  const router = useRouter();
  return <h1> This page is for product {JSON.stringify(router.query)}</h1>;
}

class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
