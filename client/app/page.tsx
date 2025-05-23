"use client"
import Image from "next/image";

import { useEffect } from "react";
import { messaging, getToken, auth, getFCMToken } from "./firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {

  async function requestPermission() {
    try {
      //requesting permission using Notification API
      const permission = await Notification.requestPermission();
      console.log("Permission status: ", permission);
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: "BI3DJw0ldxGWhvyaS_AvIk91GhstFoU5wONRGUI1Cly7-ya2M9T0Bg0zglKSyL9KaMzRltI6QESNeNIlBdYf4vc",
        });

        //We can send token to server
        console.log("Token generated : ", token);
      } else if (permission === "denied") {
        //notifications are blocked
        alert("You denied for the notification");
      }
    } catch (error) {
      console.error("Error getting permission: ", error);

    }
  }

  useEffect(() => {
    requestPermission();
  }, []);




  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">Notification </h1>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
