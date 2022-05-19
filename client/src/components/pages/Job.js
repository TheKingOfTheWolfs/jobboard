import React from 'react'

function Job() {
  return (
    <div>
    <div className="company-logo">
      <img src={''} alt="" />
    </div>
    <div className="part1">
      <div className="company">
        <span className="cname">Company</span>
        <span className="new">new!</span>
        <span className="featured">featured</span>
      </div>

      <div className="job-position">Position</div>

      <div className="job-details">
        <span>Posted At</span>
        <span>&nbsp;•&nbsp;</span>
        <span>Contract</span>
        <span>&nbsp;•&nbsp;</span>
        <span>Location</span>
      </div>
      <button>Apply</button>
    </div>

    {/* <div className="part2">
      {keywords.map((key, id) => (
        <span onClick={() => props.setkeywords(key)} key={id}>
          {key}
        </span>
      ))}
    </div> */}
  </div>
  )
}

export default Job