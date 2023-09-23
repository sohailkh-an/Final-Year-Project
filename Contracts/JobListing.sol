pragma solidity ^0.8.0;

contract JobListing {

    struct Job {
        address employer;
        address freelancer;
        string jobDetails;
        JobStatus status;  
    }
    
    enum JobStatus { Open, InProgress, Completed }
    
    mapping(uint => Job) public jobs;
    uint public jobCount;
    
    event JobCreated(
        uint id,
        address employer,
        address freelancer,
        string jobDetails,
        JobStatus status
    );
    
    function createJob(
        address _employer, 
        address _freelancer,
        string memory _jobDetails
    ) public {
        jobCount++;
        jobs[jobCount] = Job({
            employer: _employer,
            freelancer: _freelancer,
            jobDetails: _jobDetails,
            status: JobStatus.Open
        });
        emit JobCreated(jobCount, _employer, _freelancer, _jobDetails, JobStatus.Open);
    }
}
