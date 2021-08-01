import Link from 'next/Link';

console.log("HOME page was rendered");

export default function Home () {
    return (
    <Link href="/products" prefetch={false}>
        Products
    </Link>
    );
}
