import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useLocation } from "wouter";

type TransitionPhase = "idle" | "exiting" | "entering";

interface TransitionContextType {
  phase: TransitionPhase;
  navigate: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider",
    );
  }
  return context;
}

interface PageTransitionProviderProps {
  children: ReactNode;
}

export function PageTransitionProvider({
  children,
}: PageTransitionProviderProps) {
  const [location, setLocation] = useLocation();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [nextPath, setNextPath] = useState<string | null>(null);

  const navigate = useCallback(
    (path: string) => {
      // Ignore if already transitioning or navigating to same path
      if (phase !== "idle" || path === location) {
        return;
      }

      setNextPath(path);
      setPhase("exiting");

      // After blur-out completes, switch route and fade-in
      // Apple-style timing: exit 260ms + gap 60ms + enter 560ms
      setTimeout(() => {
        setLocation(path);
        setPhase("entering");

        // After fade-in completes, return to idle
        setTimeout(() => {
          setPhase("idle");
          setNextPath(null);
        }, 560); // Enter animation duration
      }, 260); // Exit animation duration
    },
    [phase, location, setLocation],
  );

  const getPhaseClass = () => {
    switch (phase) {
      case "exiting":
        return "page-exit";
      case "entering":
        return "page-enter";
      default:
        return "";
    }
  };

  return (
    <TransitionContext.Provider value={{ phase, navigate }}>
      <div className={`route-container ${getPhaseClass()}`}>
        <div className="transition-root">{children}</div>
      </div>
    </TransitionContext.Provider>
  );
}

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  "data-testid"?: string;
}

export function TransitionLink({
  href,
  children,
  className = "",
  "data-testid": testId,
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
