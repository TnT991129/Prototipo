
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Social Media Management',
    description:
      'Tools and strategies to plan, create, and manage content on platforms like Instagram, Facebook, LinkedIn, and Twitter.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SEO (Search Engine Optimization)',
    description:
      "Services focused on improving your website's organic ranking to attract quality traffic",
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Digital Advertising (PPC)',
    description:
      'Paid ad campaigns on platforms like Google Ads, Facebook Ads, and LinkedIn Ads to quickly boost conversions.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Content Marketing',
    description:
      'Creating and distributing valuable content to attract and retain your target audience.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Email Marketing and Automation',
    description:
      'Strategies and tools to send personalized and automated emails that convert leads and retain customers.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Analytics and Data Reporting',
    description:
      'Advanced tools to measure, analyze, and improve the performance of your digital marketing strategies.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function PageII() {
  return (
    <div className="bg-white py-10 sm:py-32">
        
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">Our Services</h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Our Tailored Digital Marketing Services
        </p>
        <p className="mt-6 text-lg/8 text-gray-700">
          Boost your business to new heights with customized digital marketing strategies that deliver measurable results
        </p>
      </div>
      
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col shadow-md shadow-gray-950 bg-gray-950 hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover-shadow-black transition-colors p-10 rounded-lg ">
              <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-indigo-300 ">
                <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-400 " />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/7 text-white">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <a href={feature.href} className="text-sm/6 font-semibold text-indigo-400 ">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  )
}