import moment from 'moment-timezone';

const imageUserFilter = array =>
  array.filter(data => data.photoApproved === 0 || data.photoApproved === 1);
const imageFilter = array => array.filter(data => data.photoApproved === 1);

const trustscore = profile => {
  return (
    ((imageFilter(profile?.photos).length > 0 ? 0.3 : 0) +
      (profile?.mobileVerified ? 0.2 : 0) +
      (profile?.photoIDApproved === 1 ? 0.3 : 0) +
      (profile?.emailVerified ? 0.2 : 0)) *
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

const namePrivacy = data =>
  data?.privacy === 'Hide my name' || data?.gender === 'Female'
    ? data?.name[0]
    : data?.name
    ? data?.name.split(' ')[0]
    : '';

export {
  trustscore,
  ageCalc,
  dateTime,
  imageFilter,
  namePrivacy,
  imageUserFilter,
};
