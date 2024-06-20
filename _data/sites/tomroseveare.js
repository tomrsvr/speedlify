module.exports = {
	name: "tomroseveare.com", // optional, falls back to object key
	description: "Tom Roseveare — Portfolio",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	skip: false,
	options: {
		// runs: 1,
		frequency: 60 * 23, // 23 hours
		// frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster) 
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.tomroseveare.com/",
		"https://www.tomroseveare.com/about/",
		"https://www.tomroseveare.com/work/",
		"https://www.tomroseveare.com/contact/",
		"https://www.tomroseveare.com/blog/",
	]
};