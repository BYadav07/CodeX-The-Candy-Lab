import { useState } from "react";
import { Menu, X, User, LogOut, Info } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { AboutUs } from "./AboutUs";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export function Header({ isLoggedIn, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    setIsAboutOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <Sheet
              open={isMenuOpen}
              onOpenChange={setIsMenuOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-4">
                    <li>
                      <button
                        onClick={handleAboutClick}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left"
                      >
                        <Info className="h-5 w-5" />
                        <span>About Us</span>
                      </button>
                    </li>
                    {isLoggedIn && (
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left"
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Log Out</span>
                        </button>
                      </li>
                    )}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={handleAboutClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </button>
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </button>
              )}
            </nav>

            {/* Company Logo/Title */}
            <div className="flex-1 text-center md:text-left md:ml-8">
              <h1 className="text-2xl md:text-3xl font-bold text-pink-600">
                <span className="text-yellow-400">T</span>HE{" "}
                <span className="text-yellow-400">C</span>ANDY{" "}
                <span className="text-yellow-400">L</span>AB
              </h1>
            </div>

            {/* User Icon */}
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
              {isLoggedIn && (
                <div className="ml-2 w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* About Us Dialog */}
      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">
              About The Candy Lab
            </DialogTitle>
          </DialogHeader>
          <AboutUs />
        </DialogContent>
      </Dialog>
    </>
  );
}