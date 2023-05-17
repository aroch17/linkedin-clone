import React from 'react'
import './styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => ( // round brackets indicate implicit return
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>

        {newsArticle('Assignment 3 scrapped.', 'A day to rejoice')}
        {newsArticle('Exam crises rise', 'Psych is coming to get you')}
    </div>
  )
}

export default Widgets