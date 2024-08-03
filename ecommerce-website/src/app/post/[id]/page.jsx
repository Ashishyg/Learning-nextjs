"use client";
import { usePathname } from "next/navigation";

export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;/* pathname is used to dynamically retrieve and display the current path of the URL 
                             and display it within a paragraph element
                             Use pathname is used to access the current path of the URL*/ 
}
