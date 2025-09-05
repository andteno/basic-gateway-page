import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddProduct1 = () => {
    console.log("Adding product 1");
    // Add product 1 logic here
  };

  const handleAddProduct2 = () => {
    console.log("Adding product 2");
    // Add product 2 logic here
  };

  const handleLogin = () => {
    console.log("Login attempt with:", { name, email });
    // Login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome</h1>
          <p className="text-muted-foreground">Choose a product or sign in to continue</p>
        </div>

        {/* Product Buttons */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Select Product</h2>
          <div className="grid grid-cols-1 gap-3">
            <Button 
              variant="product" 
              size="lg" 
              onClick={handleAddProduct1}
              className="w-full"
            >
              Add Product 1
            </Button>
            <Button 
              variant="product" 
              size="lg" 
              onClick={handleAddProduct2}
              className="w-full"
            >
              Add Product 2
            </Button>
          </div>
        </div>

        {/* Login Form */}
        <Card className="p-6 space-y-6 shadow-lg border border-border">
          <h2 className="text-lg font-semibold text-foreground text-center">Sign In</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <Button 
              variant="gradient" 
              size="lg" 
              onClick={handleLogin}
              className="w-full"
            >
              Log in
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;