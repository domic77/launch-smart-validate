import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const ManagingWorkflows: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto rounded-2xl border-[1.5px] bg-card prose prose-lg p-6 sm:p-8">
          <CardContent className="pt-0">
            <h1 className="text-4xl font-bold mb-4">Managing Projects and Workflows</h1>
            <div className="prose max-w-none">
              <p>This guide explains how to manage your projects and workflows in iValidate.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Projects</h3>
              <p>A project in iValidate serves as a dedicated space for all validation activities related to a single idea, product, or business concept. You have the flexibility to create as many projects as you need, allowing you to manage multiple ideas simultaneously without confusion. Each project acts as a container for your validation reports, integrated data, and specific workflow configurations. This structured approach ensures that all information pertinent to a particular idea is centralized and easily accessible, streamlining your validation process.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Workflows</h3>
              <p>Workflows are the backbone of the validation process in iValidate. They represent a series of automated or semi-automated validation activities designed to provide comprehensive insights into your idea's viability. You can leverage our pre-built templates, which are optimized for common validation scenarios, or create custom workflows tailored to your unique requirements. Custom workflows allow you to define specific data sources, analysis parameters, and reporting preferences, giving you granular control over how your idea is evaluated. By utilizing workflows, you can ensure a consistent, thorough, and efficient validation process for all your projects.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Creating and Customizing Workflows</h3>
              <p>To create a new workflow, navigate to the "Workflows" section within your project. You can choose to start from a blank canvas to build a custom workflow from scratch, or select one of our pre-designed templates as a starting point. Customization options include selecting specific data integration points (e.g., Google Trends, Reddit), defining the depth of analysis, and configuring the output format of your validation reports. This flexibility ensures that your validation process aligns perfectly with your research objectives.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Running and Monitoring Workflows</h3>
              <p>Once your workflow is configured, you can initiate the validation process with a single click. iValidate's AI engine will then execute the defined steps, gathering and analyzing data. You can monitor the progress of your workflows in real-time, and once completed, a detailed validation report will be generated, providing you with actionable insights to guide your decision-making.</p>
            </div>
            <div className="text-center mt-4">
              <Link to="/support" className="text-primary hover:underline">← Back to Support</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagingWorkflows;