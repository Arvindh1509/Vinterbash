import React, { useState } from 'react';
import art from '../assets/art.jpg';
import cinema from '../assets/cinema.jpg';
import dance from '../assets/dance.jpg';
import drama from '../assets/drama.jpg';
import elits from '../assets/elits.jpg';
import music from '../assets/music.jpg';
import quiz from '../assets/quiz.jpg';
import sport from '../assets/sport.jpg';
import tamillits from '../assets/tamillits.jpg';
import tech from '../assets/tech.jpg';
import eventvinterlogo from '../assets/eventvinterlogo.jpg';


const events = [
  { title: 'Art', subtitle: 'Multi media madness', type:'Single shot event', time: '10:00 am to 01:00 pm', venue: 'To be announced', imgSrc: art },
  { title: 'Art', subtitle: 'Cartoon Universe Crossover', type:'Single shot event', time: '02:00 pm to 05:00 pm', venue: 'To be announced', imgSrc: art },
  { title: 'Cinema', subtitle: 'Thirai @480°', type: 'Single shot event', time: 'Will be announced on the event day', venue: 'To be announced', imgSrc: cinema },
  { title: 'Dance', subtitle: 'Heels in the sky', type: 'Two phased event', time: '9:30 am to 11:00 am (Prelims), 5:00 pm to 06:00pm (Finals)', venue: 'To be announced for both Prelims and Finals', imgSrc: dance },
  { title: 'Dance', subtitle: 'Nalamdhaana', type: 'Single shot event', time: '11:30 am to 01:30 pm', venue: 'To be announced', imgSrc: dance },
  { title: 'Dance', subtitle: 'Five,Six,Seven,Eight', type: 'Single shot event', time: '02:00 pm to 04:30 pm', venue: 'To be announced', imgSrc: dance },
  { title: 'Dramatics', subtitle: 'The imitation game', type: 'Two phased event', time: '11:00 am to 12 noon (Prelims), 02:00 pm to 04:00 pm (Finals)', venue: 'To be announced for Prelims and Finals', imgSrc: drama },
  { title: 'Dramatics', subtitle: 'Aathi, idhu adhulla', type: 'Single shot event', time: '11:30 am to 01:30 pm', venue: 'To be announced', imgSrc: drama },
  { title: 'English literature', subtitle: '"What if" Odyssey', type: 'Single shot event', time: '10:00 am to 12 noon', venue: 'To be announced', imgSrc: elits },
  { title: 'English literature', subtitle: 'Think on your Feet', type: 'Two phased event', time: '02:00 pm to 03:00 pm (Prelims), 03:30 pm to 05:30 pm (Finals)', venue: 'To be announced for both Prelims and Finals', imgSrc: elits },
  { title: 'Music', subtitle: 'Chordially Yours : group music', type: 'Single shot event', time: '9:30 am to 11:30 am', venue: 'To be announced', imgSrc: music },
  { title: 'Music', subtitle: 'Acoustic Nirvana', type: 'Single shot event', time: '2:00 pm to 4:00 pm', venue: 'To be announced', imgSrc: music },
  { title: 'Quiz', subtitle: 'The Triquizzard Tournament', type: 'Two phased event', time: '9:30 am to 10:30 am (Prelims), 11:30 am to 01:30 pm (Finals)', venue: 'To be announced for both Prelims and Finals', imgSrc: quiz },
  { title: 'Quiz', subtitle: 'Ithihaas Quiz', type: 'Two phased event', time: '02:00 pm to 03:00 pm (Prelims), 03:30 pm to 05:30 pm (Finals)', venue: 'To be announced for both Prelims and Finals', imgSrc: quiz },
  { title: 'Sports', subtitle: 'Vinter bowl-out (Cricket)', type: 'Whole day event', time: '9:00 am to 6:00 pm', venue: 'To be announced', imgSrc: sport },
  { title: 'Sports', subtitle: 'Vinter kick-off (Football)', type: 'Whole day event', time: '9:00 am to 6:00 pm', venue: 'To be announced', imgSrc: sport },
  { title: 'தமிழ் இலக்கியம்', subtitle: 'மொழியமுதம்', type:'Two phased event', time: '11:30 am to 01:00 pm (Prelims), 02:30 pm to 04:30 pm (Finals)', venue: 'To be announced for Prelims and Finals', imgSrc: tamillits },
  { title: 'Tech', subtitle: 'Python prowess quest', type: 'Two phased event', time: '10:00 am to 11:00 am (Prelims), 02:00 pm to 04:00 pm (Finals)', venue: 'To be announced for both Prelims and Finals', imgSrc: tech },
  { title: 'Title event', subtitle: 'Ms/Mr Vinterbash', type: 'Single shot event', time: '03:30 pm onwards', venue: 'To be announced', imgSrc: eventvinterlogo },
];

function Schedule() {
  const [selectedType, setSelectedType] = useState('All');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredEvents = selectedType === 'All' ? events : events.filter(event => event.title === selectedType);

  const ScheduleCard = ({ title, subtitle, type, time, venue, imgSrc}) => (
    <div className="schedulecard">
      <img src={imgSrc} alt={title} />
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>Type : {type}</h4>
        <h4>Time : {time}</h4>
        <h4>Venue : {venue}</h4>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="Leaderboard">Schedule</h1>
      <div className="filter">
        <label className="eventType">Filter by event type :  </label>
        <select id="eventType" value={selectedType} onChange={handleTypeChange}>
          <option value="All">All</option>
          <option value="Art">Art</option>
          <option value="Cinema">Cinema</option>
          <option value="Dance">Dance</option>
          <option value="Dramatics">Dramatics</option>
          <option value="English literature">English literature</option>
          <option value="Music">Music</option>
          <option value="Quiz">Quiz</option>
          <option value="Sports">Sports</option>
          <option value="தமிழ் இலக்கியம்">தமிழ் இலக்கியம்</option>
          <option value="Tech">Tech</option>
          <option value="Title event">Title event</option>
        </select>
      </div>
      <div className="scheduleflex">
        {filteredEvents.map((event, index) => (
          <ScheduleCard
            key={index}
            title={event.title}
            subtitle={event.subtitle}
            type={event.type}
            time={event.time}
            venue={event.venue}
            imgSrc={event.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedule;
