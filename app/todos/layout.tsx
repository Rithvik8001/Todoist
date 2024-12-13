"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function TodosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  return (
    <div>
      <div className="min-h-[10vh] bg-purple-50 flex justify-center items-center">
        <nav className="w-full max-w-2xl flex justify-center items-center bg-white rounded-lg px-3 py-2">
          <div className="flex-1">
            <h3 className="font-bold text-4xl ">Todosit</h3>
          </div>
          <ul className="flex-1 h-full text-center flex justify-end pr-5 items-center">
            {user && (
              <>
                <span className="p-2">{user.firstName}</span>
                <UserButton />
              </>
            )}
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
}
