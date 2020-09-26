# Twitter-Game-

Summary.

This game prompts users to guess tweets. The tweets are retrieved from Elon musk and Kanye West accounts. The user has the option to continue the game each time a new question is prompted. Once the user decides to end the game, the stats for each player are displayed. Just to

Implementation.
Although I did not have time to fully implement the remainder of the game and the data structure due to recruitment events this week, I plan on using a dynamic array to store the 3200 tweets initially risk retrieved from the API. The Twitter API retrieves the 3200 most recent tweets from Elon musk and Kanye West. Before filling the array with these tweets, I plan on filtering out the retweets, replies, and videos and images within the tweet itself. Next, I will generate a random number between zero and 3199 to index the random tweet. Once this tweet is presented to the user in the game, I will pull another tweet from the API to re-populate that index in the array. This program was written in node, and used the fetch method to retrieve the API request from twitter's API
The bearer token was necessary to authenticate the request. 


NOTE: Right now my fat request only grabs 100 tweets from the Twitter API, but I plan on fully implementing the 3200 version within this week.
