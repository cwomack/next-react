import { useRouter } from "next/router";
import { useState, useTransition } from "react";

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

function handleChangeOne(e) {
  setInput(e.target.value);
  const l = [];
  for (let i = 0; i < listSize; i++) {
    l.push(e.target.value);
  }
  setList(l);
}

function handleChangeTwo(e) {
  setInput(e.target.value);
  const l = [];
  for (let i = 0; i < listSize; i++) {
    l.push(e.target.value);
  }
  setList(l);
}
