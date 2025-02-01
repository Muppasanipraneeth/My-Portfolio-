import { ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const contributions = [
    {
      id: 1,
      url: 'https://github.com/openmrs/openmrs-esm-patient-management/pull/1442',
      repo: 'openmrs-esm-patient-management'
    },
    {
      id: 2,
      url: 'https://github.com/openmrs/openmrs-esm-patient-management/pull/1416',
      repo: 'openmrs-esm-patient-management'
    },
    {
      id: 3,
      url: 'https://github.com/openmrs/openmrs-esm-patient-management/pull/1470',
      repo: 'openmrs-esm-patient-management'
    },
    {
      id: 4,
      url: 'https://github.com/openmrs/openmrs-esm-laboratory-app/pull/114',
      repo: 'openmrs-esm-laboratory-app'
    },
    {
      id: 5,
      url: 'https://github.com/openmrs/openmrs-esm-patient-management/pull/1445',
      repo: 'openmrs-esm-patient-management'
    },
    {
      id: 6,
      url: 'https://github.com/openmrs/openmrs-esm-patient-management/pull/1461',
      repo: 'openmrs-esm-patient-management'
    },
    {
      id: 7,
      url: 'https://github.com/openmrs/openmrs-esm-core/pull/1254',
      repo: 'openmrs-esm-core'
    }
  ];

  return (
    <div className="container mx-auto p-8 animate-fade-in-up">
      <div className="max-w-3xl mx-auto bg-black border-gray-800">
        <div className="border-b border-gray-800 p-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <p className="text-gray-500">My Pull Requests to OpenMRS</p>
        </div>
        <div className="mt-6 p-4">
          <div className="space-y-4">
            {contributions.map((contribution) => (
              <a
                key={contribution.id}
                href={contribution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700 group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex-grow">
                  <p className="font-medium text-blue-500 group-hover:text-blue-400 transition-colors">
                    {contribution.repo}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    PR #{contribution.url.split('/').pop()}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
