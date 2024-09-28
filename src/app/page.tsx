import { ColorSchemeToggle } from "@/src/components/ColorSchemeToggle/ColorSchemeToggle";
import { Welcome } from "@/src/components/Welcome/Welcome";



export default function HomePage() {
  return (
    <div className="p-6 w-screen h-screen flex flex-col justify-center">
      <Welcome />
      <ColorSchemeToggle />
    </div>
  );
}
