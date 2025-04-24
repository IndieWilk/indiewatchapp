
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Watch } from "lucide-react";
import MainNav from "@/components/MainNav";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-red-100 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-red-500">404</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find the page you're looking for. The watch or brand you requested might not exist in our catalog yet.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/" className="flex items-center justify-center gap-2">
                  <Home className="h-4 w-4" />
                  Back to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/shop" className="flex items-center justify-center gap-2">
                  <Watch className="h-4 w-4" />
                  Browse All Watches
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
