console.log('Good luck');

fetch('http://localhost:3030', {
  method: 'get'
})
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    console.log('res', res);
  })
  .catch(function(err) {
    console.log('error!', err);
  });
