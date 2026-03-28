
var test = new Array();
test[0] = ["This was a wonderful getaway for our  family. We enjoyed the peace and quiet and nature all around us. Our group enjoyed to stay in your beautiful cabin! What a wonderful place to enjoy mountain landscape! Thank you. We hope to come back one day.", 'Mihai and Tita Rusu, Cluj, Romania'];
test[1] = ["You've done a wonderful job of creating your own little slice of heaven here at the Mira cabin. We thoroughly enjoyed relaxing on the deck after a great day of hiking in Rodnei Mountains. We can't  wait to come back again.","Cristina Balla, Cluj, Romania"];
test[2] = ["What a nice, relaxing week we had at  your cabin. It was a wonderful  way to spend while visiting Maramures County with all that beautiful local traditions. You have a lovely place here - very warm and inviting. We recommended it to all the families  who love nature and mountains. We hope to come again next year.","Gabriel and Corina Rus, Beclean, Romania"];
test[3] = ["We have a great vacation! I can't believe how  fast four days passed. The cabin has the comforts of home in a beautiful setting. The location of the cabin is perfect for see the majestic and spectacular ridge of the Rodnei Mountains.","Ruxandra Leustean, Bucharest, Romania"];
test[4] = ["What a wonderful get-away cabin!! We had a great time. We saw most of the sites you suggested – always couldn’t wait to get back to the cabin! Thanks for the hospitality. We were in want for nothing. Thanks for a bunch of great family memories. We hope to be back soon.","Amalia and Claudiu Zinveliu,Beclean, Romania"];
test[5] = ["We rented your cabin for a weekend, but that was not nearly enough. There was so much to do and see all over the Maramures county. Having said that my favorite times were watching the Rondei Mountains peaks and relaxing in different beautiful places here: wooden churches, waterfalls, rivers, forest. We will be back to Borsa and this will be the cabin i rent again, it could be considered a Vacation Home.","Ioan Dican and his friends, Cluj, Romania"];
test[6] = ["We really enjoyed our stay here. It was very clean and nice. Beautiful cabin with everything we needed.We are very glad that we chose to come here. We had a wonderful three days and we hope to return!","Cristian Beudean and his family, Uriu, Romania"];
test[7] = ["Rodnei Mountains! What a beautiful cabin is Mira cabin! We were so fortunate to have spent one wonderful week here, relaxing in the mountains. We have tucked away in our hearts some very special memories to take back to Bucharest with us.","Ioana and Stefan Radu, Bucharest, Romania"];
test[8] = ["We had a wonderful time. The view is absolutely amazing! We felt very at home. We will definitely be coming back. Thanks for a great time! What a beautiful cabin and view! The weather was absolutely perfect - loved sitting on the deck early every morning with our coffee, enjoying the quiet.","Florin Pop and his friends, Beclean, Romania"];
test[9] = ["The cabin and view was beautiful. Wonderful cabin fun for the whole family. This is the first time I have rented a cabin. Never expected to have all the luxury. Thanks for a great weekend! I'm sure we'll return next year.","Mugur and Adriana Cristina, Cluj, Romania"];

var maxStrings  = test.length;  //this checks how many links there are in the array and gives a limit to the random numbers that can be chosen
var rNum = Math.floor(maxStrings*Math.random());  //generating a random number below whatever maxLinks is

function changeText(){
	//alert('Working');
	document.getElementById('testimonial').innerHTML = test[rNum][0];
	document.getElementById('author').innerHTML = test[rNum][1];
	
}

function printTests(){
	document.getElementById('testimonials').innerHTML
}