// import { siteConfig } from "@/config/data";

export default function Footer() {

  return (
    <footer className="w-full border-t py-10 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-10 md:px-20 gap-5">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {"Techno M1"}. All rights reserved.</p>
        <p className="text-sm font-medium text-muted-foreground">v{"1.0.0"} ({"beta"})</p>
      </div>
    </footer>
  )
}