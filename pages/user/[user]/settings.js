import {useRouter} from 'next/router';

export default function (){
    const router = useRouter();
    console.log(router)
    return <h4>This is a Setting {router.query.user} page</h4>
}