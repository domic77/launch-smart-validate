import { Clock, DollarSign, Scale, MessageSquare, BarChart2, Target, Lightbulb, Rocket } from "lucide-react";

export const WhySection = () => {

  const comparisonData = [
    {
      icon: <Clock size={20} className="text-primary" />,
      feature: "Time to Validate",
      self: "❌ Days or weeks",
      others: "⚠️ Hours to days",
      ivalidate: "✅ ⚡ Minutes — near instant",
    },
    {
      icon: <DollarSign size={20} className="text-primary" />,
      feature: "Cost",
      self: "❌ High (opportunity cost)",
      others: "❌ High (freelancers, agencies)",
      ivalidate: "✅ Low (subscription)",
    },
    {
      icon: <Scale size={20} className="text-primary" />,
      feature: "Bias-Free Results",
      self: "❌ Prone to bias",
      others: "⚠️ Can be biased",
      ivalidate: "✅ Data-driven, unbiased",
    },
    {
      icon: <MessageSquare size={20} className="text-primary" />,
      feature: "Social Media Integration",
      self: "❌ Manual digging",
      others: "⚠️ Limited or generic",
      ivalidate: "✅ Pulls live signals from platforms like X, Reddit, and many others.",
    },
    {
      icon: <BarChart2 size={20} className="text-primary" />,
      feature: "Real-Time Reports",
      self: "❌ No",
      others: "⚠️ Varies",
      ivalidate: "✅ Yes",
    },
    {
      icon: <Target size={20} className="text-primary" />,
      feature: "Competitor Analysis",
      self: "❌ Manual, basic",
      others: "⚠️ Limited",
      ivalidate: "✅ In-depth, automated",
    },
    {
      icon: <Lightbulb size={20} className="text-primary" />,
      feature: "Actionable Insights",
      self: "❌ Subjective",
      others: "⚠️ Often generic",
      ivalidate: "✅ Specific, data-backed",
    },
    {
      icon: <Rocket size={20} className="text-primary" />,
      feature: "Built for Startups",
      self: "✅ Yes",
      others: "❌ No",
      ivalidate: "✅ Yes",
    },
  ];

  return (
    <section id="why" className="py-16 lg:py-24" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Why choose <span className="text-gradient-blue-teal">iValidate</span> over other options?
          </h2>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Not all validation methods are equal. Whether you're going solo or hiring help, here's how <span className="font-bold">iValidate</span> delivers smarter, faster results — without the guesswork.
          </p>
        </div>

        

        <div className="hidden md:block">
          <table className="w-full border-collapse bg-white rounded-[16px] overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left text-sm font-semibold text-gray-900">Key Differences</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-900">Self-Validation</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-900">Others</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-900 bg-gradient-to-b from-blue-50 to-blue-100 rounded-t-lg">iValidate <span className="ml-2 text-xs font-normal px-2 py-1 bg-blue-500 text-white rounded-full">Recommended</span></th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <td className="p-4 text-gray-900 font-medium flex items-center gap-2" data-label="Key Differences">{row.icon} {row.feature}</td>
                  <td className="p-4 text-gray-700" data-label="Self-Validation">{row.self}</td>
                  <td className="p-4 text-gray-700" data-label="Others">{row.others}</td>
                  <td className="p-4 text-gray-900 font-semibold bg-gradient-to-b from-blue-50 to-blue-100" data-label="iValidate">{row.ivalidate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white rounded-[16px] border-[1.5px] border-blue-500/30 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                {row.icon}
                <h3 className="text-gray-900 font-semibold">{row.feature}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Self-Validation:</span>
                  <span className="text-sm text-gray-700">{row.self}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Others:</span>
                  <span className="text-sm text-gray-700">{row.others}</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-blue-100 p-2 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">iValidate:</span>
                  <span className="text-sm font-semibold text-gray-900">{row.ivalidate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium text-center mt-8">
            Only <span className="font-bold">iValidate</span> reads the room — by tapping into where real users talk about real problems. Backed by social signals. Because opinions are cool, but actual user behavior is better.
          </p>
      </div>
    </section>
  );
};