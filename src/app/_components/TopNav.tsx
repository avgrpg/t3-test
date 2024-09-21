"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export const TopNav = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4"></div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              console.log("onClientUploadComplete");
              router.refresh()
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
