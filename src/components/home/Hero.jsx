import Button from '../universal/Button';

const Hero = () => {
  return (
    <div className="bg-primary-teal min-h-[600px] relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Unique <span className="text-primary-gold">Treasures</span> at Your Fingertips
            </h1>
            <p className="text-lg text-white/80">
              Join thousands of collectors and enthusiasts in a premium online auction experience. Bid, win, and build your collection today.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button>Start Bidding</Button>
              <Button variant="outline">Sell an Item</Button>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Hero image will be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;