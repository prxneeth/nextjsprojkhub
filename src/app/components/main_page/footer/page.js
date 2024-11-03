export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center md:text-left md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Brand</h2>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}
