import { Link } from "react-router-dom";
import ValidationDemo from "@/components/ValidationDemo";

const Demo = () => {
  return (
    <div className="w-full" style={{ backgroundColor: '#fafafa' }}>
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Experience the <span className="text-gradient-blue-teal">iValidate</span> Demo
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            See exactly what you'll get for $24.99 with our interactive demo. This is a preview with simulated results.
          </p>
        </div>
      </section>

      {/* Demo Content */}
      <main>
        <ValidationDemo />
      </main>

      {/* Back Button */}
      <div className="text-center mt-8 pb-16">
        <Link to="/" className="inline-flex items-center px-6 py-3 rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Demo;