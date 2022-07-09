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
  let l = [];
  const k = [];
  for (let i = 0; i < listSize; i++) {
    l.push(e.target.value);
  }
  setList(l);
}

function handleChangeTwo(e) {
  setInput(e.target.value);
  let l = [];
  const k = [];
  for (let i = 0; i < listSize; i++) {
    l.push(e.target.value);
  }
  setList(l);
}

console.log(l, k);

function testThree(e) {
  console.log("test");
}

function testFour(e) {
  console.log("Test Function 4");
}
