export const createProfile = profile => (
  $.ajax({
    method: 'POST',
    url: '',
    data: profile
  })
);

export const fetchProfile = id => (
  $.ajax({
    method: 'GET',
    url: '',
    data: id
  })
);

export const fetchAllProfiles = () => (
  $.ajax({
    method: 'GET',
    url: '',
  })
);
