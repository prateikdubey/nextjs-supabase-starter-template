import { ColorSchemeToggle } from "@/src/components/ColorSchemeToggle/ColorSchemeToggle";
import { Welcome } from "@/src/components/Welcome/Welcome";



export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
