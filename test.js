const puppeteer = require('puppeteer');
const htmlToJson = require('html-to-json');

(run = async() => {
	const browser = await puppeteer.launch({ headless: true });

	const page = await browser.newPage();
	const url = 'http://testing-ground.scraping.pro/';
	const url2 = 'https://google.com';
	await page.goto(url);

	var content = await page.content();

	content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
	content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
	content = content.replace(/<head\b[^<]*(?:(?!<\/head>)<[^<]*)*<\/head>/gi, '');
	content = parseHtmlString(content);
	console.log(content);
	

	await page.screenshot({path: './js-screenshots/'+ Date.now() + '.png'});

	await browser.close();
})()

parseHtmlString = (string) => {
	var promise = htmlToJson.parse(string, {
		'text': function($doc) {
			return ' ' + $doc.find('*').text() + ' ';
		}
	});
	promise.done((result) => {
		console.log('result: ', result);
	});
	
	return string;
	
}

//https://www.npmjs.com/package/html-to-json

