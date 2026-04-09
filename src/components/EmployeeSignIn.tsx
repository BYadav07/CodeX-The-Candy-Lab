import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { User, Lock, CheckCircle, AlertCircle } from 'lucide-react';

interface EmployeeSignInProps {
  onSignIn: (username: string) => void;
  onParanormalAccess: () => void;
  isLoggedIn: boolean;
}

export function EmployeeSignIn({ onSignIn, onParanormalAccess, isLoggedIn }: EmployeeSignInProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication
    if (credentials.username.trim() === '' || credentials.password.trim() === '') {
      setError('Please enter both username and password');
      setIsLoading(false);
      return;
    }

    // Mock authentication - in real app, this would call an API
    setTimeout(() => {
      if (credentials.password.toUpperCase() === 'TCL') {
        // Secret paranormal access
        onParanormalAccess();
        setCredentials({ username: '', password: '' });
      } else if (credentials.password === 'candylab123' || credentials.password === 'admin') {
        onSignIn(credentials.username);
        setCredentials({ username: '', password: '' });
      } else {
        setError('Invalid credentials. Try password: "candylab123", "admin", or... something else');
      }
      setIsLoading(false);
    }, 1000);
  };

  if (isLoggedIn) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-green-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-700 mb-2">Welcome Back!</h3>
                <p className="text-gray-600 mb-4">You are successfully signed in to The Candy Lab.</p>
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>Dashboard Access:</strong> You now have access to inventory management, 
                    recipe database, and quality control systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-pink-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-pink-700">Employee Sign In</CardTitle>
            <p className="text-sm text-gray-600">Access your candy lab dashboard</p>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert className="mb-4 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10"
                    value={credentials.username}
                    onChange={(e) =>
                      setCredentials({ ...credentials, username: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({ ...credentials, password: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                <strong>Demo credentials:</strong><br />
                Username: any username<br />
                Password: candylab123 or admin<br />
                <span className="text-gray-500 text-xs">Or try something... different</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}