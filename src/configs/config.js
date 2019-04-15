let ENV = "dev";

const config = {
	'dev' : {
		API_URL: 'http://127.0.0.1:8000/api/v1',
		STATIC: {
			'logo' : "tagse/assets/logo.png"
		}
	},	
	'prod' : {
		API_URL: 'https://website.com/api/v1',
		STATIC: {
			'logo' : "tagse/assets/logo.png"
		}
	}
}

export default config[ENV];
