import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcommerceDemo = () => {
  const navigate = useNavigate();

  const products = [
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      title: "Premium Watch",
      category: "Accessories",
      price: "€299",
      rating: 4.8,
      reviews: 124
    },
    {
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
      title: "Designer Sunglasses",
      category: "Accessories",
      price: "€159",
      rating: 4.6,
      reviews: 89
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      title: "Wireless Headphones",
      category: "Electronics",
      price: "€199",
      rating: 4.9,
      reviews: 256
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            E-commerce Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful online stores that convert visitors into customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden bg-background/50">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 text-sm font-semibold text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between border-t border-border/30 pt-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceDemo;
