import { CheckCircle, LocationEditIcon } from "lucide-react";

import { type FC } from "react";

interface JobCardProps {
  job: any;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {job.title}
          </a>
        </h3>
        {job.paymentVerified && (
          <CheckCircle className="text-green-500 text-lg mt-1" />
        )}
      </div>

      <p className="text-sm text-gray-600 mb-3">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill: string) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="text-sm text-gray-500 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Type:</span>
          <span className="text-xs"> {job.type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Experience:</span>
          <span className="text-xs"> {job.experienceLevel}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-medium text-gray-700">Duration:</span>
          <span className="text-xs"> {job.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <LocationEditIcon className="text-gray-400 size-4" />
          <span className="text-xs">{job.clientLocation}</span>
        </div>
        <div className="flex gap-4 text-xs text-gray-500">
          <span>Spent: {job.clientSpent}</span>
          <span>Rating: {job.rating} ⭐</span>
          <span>Proposals: {job.proposals}</span>
        </div>
        <div className="text-xs text-gray-400">Posted: {job.posted}</div>
      </div>
    </div>
  );
};

export default JobCard;
