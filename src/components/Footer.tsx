const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm opacity-90"></div>
              </div>
              <span className="text-xl font-semibold">Property Pack</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Automated pre-search packs for solicitors and property buyers. 
              Fast, affordable, and solicitor-ready reports in minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/generate" className="hover:text-secondary-foreground transition-colors">Generate Pack</a></li>
              <li><a href="/pricing" className="hover:text-secondary-foreground transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Property Pack. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Property Pack uses public/open data. Not a substitute for official conveyancing searches.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;