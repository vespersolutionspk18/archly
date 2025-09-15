import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Leads & Clients",
      description: "Lead capture with website form integration. Visual pipeline: New → Contacted → Estimate Sent → Won → Lost. Store client details, property addresses, and apply tags for filtering."
    },
    {
      title: "Estimates / Quotes",
      description: "Predefined service & material line items with editable library. Auto-calculation of totals including labor, materials, markup, and tax. Branded PDF export with customizable templates."
    },
    {
      title: "Projects / Jobs",
      description: "Job phases from demolition to finishing. Assign tasks to team members, upload files and progress photos. Track completion timelines and maintain detailed project documentation."
    },
    {
      title: "Invoices",
      description: "Generate invoices from estimates or projects. Batch invoice creation for multiple jobs. Track status: Unpaid/Partial/Paid. Progress invoicing with milestone billing and automated reminders."
    },
    {
      title: "Payables Management",
      description: "Track vendor & supplier records. Enter bills with amounts, due dates, and job links. Monitor status and export vendor bills as PDF. Complete cashflow view with payables vs receivables reports."
    },
    {
      title: "Scheduling & Calendar",
      description: "Calendar view in month/week/day formats. Assign jobs and crew to dates with drag & drop rescheduling. Email and SMS notifications keep everyone on schedule."
    },
    {
      title: "Reports & Insights",
      description: "Jobs summary by status, value, and client. Outstanding invoices tracking. Payables reports showing overdue and upcoming. Profit snapshot per project with complete financial visibility."
    },
    {
      title: "Job Forms & Checklists",
      description: "Custom job forms for inspections and quality checks. Reusable templates for common remodel projects. Fill and attach forms directly to projects for complete documentation."
    },
    {
      title: "Communication",
      description: "Email templates for estimates, invoices, and project updates. Auto-reminders for overdue invoices. PDF attachments sent directly from the system for seamless client communication."
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-black relative z-10">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-white">COMPREHENSIVE CRM FEATURES</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-white">
            Everything You Need to Run Your Contracting Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 w-full">
          {features.map((feature, index) => (
            <div key={index}>
              <h6 className="font-mono text-white text-xl md:text-2xl mb-6">{feature.title}</h6>
              <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features