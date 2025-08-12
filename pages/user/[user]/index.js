import { useRouter } from 'next/router';

export default function User() {
    const router = useRouter();
    console.log(router)
    return (<div>
        <button onClick={(e) =>
            router.push({
                pathname: "[user]/settings",
                query: { user: router.query.user }
            })
        }>Go to Setting page</button>
        <button onClick={(e) => {
            router.replace("/")
        }}>Go to Home page</button></div>)
}