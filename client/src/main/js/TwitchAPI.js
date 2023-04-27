
// let access_token;

// function handleTwitchAPIClick() {
//   fetchToken()
//     .then(() => {
//       fetchUser()
//         .then(() => {
//           // console.log(username);
//           fetchStreams();
//         });
//     });
// }

// function fetchToken() {
//   return new Promise((resolve, reject) => {
//     fetch('https://id.twitch.tv/oauth2/token', {
//       method: 'POST',
//       body: new URLSearchParams({
//         'client_id': 'jquyrmsglhfh8ttqvfgv2yw4ad2z4n', // variavel do client_id de dev da twitch
//         'client_secret': 'o39g6x2urddytn5kayr0zy88v27h28', // variavel do client_secret de dev da twitch
//         'grant_type': 'client_credentials'
//       })
//     })
//       .then(response => response.json())
//       .then(data => {
//         access_token = data.access_token;
//         console.log(access_token);
//         resolve(access_token);
//       })
//       .catch(err => {
//         console.error(err);
//         reject(err);
//       });
//   });
// }

// var test = "gaules";

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     fetch(`https://api.twitch.tv/helix/users?login=${test}`, {
//       headers: {
//         'Authorization': 'Bearer ' + access_token,
//         'Client-Id': 'jquyrmsglhfh8ttqvfgv2yw4ad2z4n'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         const user = data.data[0];
//         console.log('fetchUser: Fulldata:', user);
//         console.log('fetchUser: Id:', user.id);
//         console.log('fetchUser: display_name:', user.display_name);
//         console.log('fetchUser: profile_image_url:', user.profile_image_url);
//         resolve({ user });
//       })
//       .catch(err => {
//         console.error(err);
//         reject(err);
//       });
//   });
// }

// var stream;

// function fetchStreams() {
//   return new Promise((resolve, reject) => {
//     fetch(`https://api.twitch.tv/helix/streams?user_login=gaules`, {
//       headers: {
//         'Authorization': 'Bearer ' + access_token,
//         'Client-Id': 'jquyrmsglhfh8ttqvfgv2yw4ad2z4n'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         stream = data.data[0];
//       })
//       .then(() => console.log('fetchStream: login:', stream))
//       .then(() => console.log('fetchStream: viewer_count:', stream.viewer_count))
//       .then(() => console.log('fetchStream: game_name:', stream.game_name))
//       .then(() => console.log('fetchStream: type:', stream.type))
//       .catch(err => console.error(err));
//   });
// }

// export default handleTwitchAPIClick;