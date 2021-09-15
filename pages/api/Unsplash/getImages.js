export default async function getImages(query) {
  const ACCESS_KEY = 'nh203w-PzdML4AVOBpUNj1l4ChxKJoKDgBaJJ-OoRcA';

  const results = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`);
  const posts = await results.json();
  const urls = await posts.results.map( (post) => {
    return post.links.download;
  });
  
  return urls;
}