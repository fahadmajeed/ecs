import CarsData from './dataLayer';

/** expects a news feed, video list and storyTypes i.e, 'top stories', 'most popular' etc. as params
 * returns a merged feed of news item with videos and all formatting required in expected output
 * */
export const mergeFeed = feed => {
    const mainList = storyTypes.map(type => filterByStory(feed, type)).map(sortedList => addVideoMeta(sortedList, videos)).map(humanizeDate);
    let finalFeed = [];
    mainList.forEach(list => {
        finalFeed = [...finalFeed, ...list];
    });
    return finalFeed;
};
//# sourceMappingURL=cars.js.map