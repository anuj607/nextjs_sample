import { useRouter } from 'next/router';

import { useEffect, useState } from "react"; 


export default function () {
    const router = useRouter();
    console.log(router)
    return (<div>this is post detail page {router.query.posts}
                </div>
    )
}