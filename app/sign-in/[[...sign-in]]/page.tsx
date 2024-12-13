import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <Card className="flex min-h-screen flex-col justify-center items-center">
      <CardTitle className="text-3xl mb-5">Sign in To your account</CardTitle>
      <CardContent>
        <SignIn afterSignInUrl={"/todos"} />
      </CardContent>
    </Card>
  );
}
