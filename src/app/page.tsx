'use client'

import {redirect} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            redirect('/categories');
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);
    return (
    <div>
        It's a default page. You will be redirected to categories page in a moment!
    </div>
  );
}
