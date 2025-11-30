import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Made with{" "}
          <Heart className="inline-block h-4 w-4 text-primary fill-primary mx-1" />{" "}
          by{" "}
          <a
            href="https://qadi-tech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Qadi-tech
          </a>
        </p>
      </div>
    </footer>
  );
};


