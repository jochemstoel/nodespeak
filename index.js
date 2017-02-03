function nodeSpeak(options) {
	if (!(this instanceof nodeSpeak)) {
		return new nodeSpeak(options)
	}
	this.options = typeof options == 'object' ? options : { }
	this.text = (text) => {
		this.options.text = text
		return this
	}
	this.voice = (voice) => {
		this.options.voice = voice
		return this
	}
	this.speak = () => {
		require('child_process').spawn(`${__dirname}/bin/nodespeak.exe`, ['-i', this.options.text, '-v', this.options.voice])
		return this
	}
	this.render = (file) => {
		require('child_process').spawn(`${__dirname}/bin/nodespeak.exe`, ['-i', this.options.text, '-v', this.options.voice, '-w', '-o', file])
		return this
	}
	return this
}

module.exports = nodeSpeak