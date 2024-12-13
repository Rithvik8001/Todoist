import { Card } from "@/components/ui/card";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <Card className="flex items-center justify-center flex-col min-h-screen">
      <SignUp afterSignUpUrl={"/todos"} />
    </Card>
  );
}
