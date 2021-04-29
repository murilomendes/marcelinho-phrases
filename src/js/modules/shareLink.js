const shareLink = titleName => {
  const options = {
    username: 'juliolozovei',
    hashtags: 'developer,developertitles',
    url: 'https://developertitles.com/'
  };

  return encodeURI(
    `https://twitter.com/intent/tweet?url=${options.url}&text=I'm the "${titleName}". Check your title at E pra hoje marcelinho?&related=${options.username}&hashtags=${options.hashtags}`
  );
};

export default shareLink;
