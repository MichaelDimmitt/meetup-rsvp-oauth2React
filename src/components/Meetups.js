import React from 'react';
import moment from 'moment';

const Meetups = ({ meetups, onSelect, isFetching }) => {
  console.log('faoshdoaisdhoasidhosidhosdih', { meetups, onSelect, isFetching }, 'faoshdoaisdhoasidhosidhosdih')

  const content = meetups.map((meetup, index) => {
    return (
      <div>
        {meetup.name}
        {moment(meetup.time).fromNow()}
        {2}
        {index}
      </div>
    );
  });

  return (
    <div>
      {isFetching ? <div> "loading..." </div> : content}
    </div>
  );
};

export default Meetups;
