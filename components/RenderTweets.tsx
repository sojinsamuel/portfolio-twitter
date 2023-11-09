import { Tweet } from "react-tweet";
import { Masonry } from "react-masonry";
const tweets = [
  "1722131841719894054",
  "1721769451622736307",
  "1721407063681822736",
  "1720682285161398547",
  "1719595127360848149",
  "1718870348211658822",
];

function RenderTweets() {
  return (
    <div className="py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tweets.map((tweet) => (
        <div key={tweet}>
          <Tweet id={tweet} />
        </div>
      ))}
    </div>
  );
}

export default RenderTweets;
