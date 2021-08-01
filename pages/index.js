import Link from 'next/Link';

console.log("HOME page was rendered");

export default function Home () {
    console.log('api url', process.env.NEXT_PUBLIC_API_URL)
    return (
    <Link href="/products" prefetch={false}>
        Products
    </Link>
    );
}
