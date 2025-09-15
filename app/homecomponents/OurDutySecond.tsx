import React from 'react'

const OurDutySecond = () => {
  return (
      <div className="w-full flex flex-col lg:flex-row text-white pb-8 md:pb-16 lg:pb-26 px-4 md:px-8 lg:px-16 gap-8 lg:gap-16 bg-black relative z-10">
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between gap-6 lg:gap-4">
        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-2/3">
          <h5 className="font-mono text-lg lg:text-xl">AI DESIGN TOOLS</h5>
          <p className="text-base lg:text-lg">
            Let AI optimize your layouts instantly. Our smart algorithms suggest furniture placement, color schemes, and material combinations that work. Generate multiple design options in seconds, estimate budgets automatically, and impress clients with data-driven decisions.
          </p>
        </div>
        <h5 className="font-mono text-lg lg:text-xl">LEAD GENERATION</h5>
      </div>
      <p className="text-base lg:text-lg w-full lg:w-1/3">
        Your digital showroom works 24/7 to bring you qualified leads. Built-in SEO tools help you rank locally, while our appointment scheduler and CRM keep your pipeline full. Track visitor engagement, capture contact info, and convert browsers into buyers automatically.
      </p>
    </div>
  )
}

export default OurDutySecond