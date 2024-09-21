import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const TopNav = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4"></div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
