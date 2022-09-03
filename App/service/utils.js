import moment from 'moment-timezone';

const trustscore = profile => {
  return (
    ((profile.photos.length > 0 ? 0.3 : 0) +
      (profile.mobileVerified ? 0.2 : 0) +
      (profile.photoID ? 0.3 : 0) +
      (profile.emailVerified ? 0.2 : 0)) *
    100
  );
};

const ageCalc = date => {
  const newdate = new Date();
  const age = moment(newdate).diff(moment(date), 'years');
  return age;
};

const dateTime = date => {
  let dateData = moment(date).isSame(new Date(), 'day');
  if (dateData) {
    dateData = moment(date).format('hh:mm A');
  } else {
    dateData = moment(date).format('MMM DD,YYYY');
  }
  return dateData;
};

export {trustscore, ageCalc, dateTime};
