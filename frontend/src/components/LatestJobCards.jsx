// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Badge } from './ui/badge'; // Ensure that the Badge component is correctly imported from your UI components
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/description/${job._id}`)}
            className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'
        >
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className='text-[#7209b7] font-bold' variant="ghost">
                    {job?.salary} LPA
                </Badge>
            </div>
        </div>
    );
};

// Adding PropTypes validation
LatestJobCards.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string.isRequired, // Ensure _id is a required string
        company: PropTypes.shape({
            name: PropTypes.string.isRequired, // Ensure name is a required string inside company
        }).isRequired, // Ensure company is a required object
        title: PropTypes.string.isRequired, // Ensure title is a required string
        description: PropTypes.string, // Optional string for description
        position: PropTypes.string, // Optional string for position
        jobType: PropTypes.string, // Optional string for jobType
        salary: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]), // Salary can be a string or number
    }).isRequired, // Ensure job is a required object
};

export default LatestJobCards;
