Bring your applications to life with Nodespeak, an easy way  to call the SpeechSynthesizer object in System.Speech.Synthesis.

<i>Nodespeak requires the .NET framework 4.5 or higher to be installed. It has been tested on Windows 7, Windows 8.1 and Windows 2012 server. Also if you require a more realistic voice than Microsoft Sam, I highly recommend looking into <a href="https://www.ivona.com/">IVONA</a> and <a href="http://www.nuance.com/for-business/customer-service-solutions/loquendo-small-business-bundle/index.htm">Loquendo</a>.</i>

### Install
```
npm install nodespeak
```

### Use
I made it as simple as possible. 

```javascript
var nodespeak = require('nodespeak')
var speaker = new nodespeak({
	text: "Jochem Stoel, the creator of nodespeak is the most sexy man alive.", 
	voice: "IVONA 2 Ivy"
});

speaker.speak(); // the system will speak using default audio device
speaker.render('myfile.wav'); // it will render to a wav in stead 
``` 
A shorter notation is also possible and it will automatically create an instance of itself if you for some reason forget to use "new" to create the object.

```javascript
require('nodespeak')({
	text: 'Hello, world!', 
	voice: 'Dave'
}).speak()
``` 
You can also write it as a chain if that is what you prefer.

```javascript
new nodespeak()
	.text('Hi!')
	.voice('Susan')
	.speak()
```
Or you might want to set the input variables yourself. Whatever floats your boat.

```javascript
var nodespeak = new nodespeak();
nodespeak.option.text  = ''
nodespeak.option.voice = ''
```


## How does it work?
nodespeak executes a child process 'nodespeak.exe'. This simple 400kb application takes input, voice and output as command line arguments and passes them to a SpeechSynthesizer object in System.Speech.Synthesis. Run nodespeak.exe yourself without arguments to get this list of options. Nodespeak.exe is written in C# and you can find the source on my webite.

nodespeak.exe -i "Hello, node!" -v "Microsoft Sam" 

# License
Nodespeak is free to use, modify and (re)distribute if you send me a thank you email at jochemstoel(at)gmail.com

<img src="http://33.media.tumblr.com/avatar_048a728a1488_128.png"><hr/>
# Jochem Stoel

Involuntary public figure.
<ul>
<li> https://www.npmjs.com/~jochemstoel</li>
<li> http://jochemstoel.github.io/</li>
<li> https://jochemstoel.tumblr.com/</li>
<li> https://jochemstoel.nl/</li>
<li> https://www.facebook.com/Jochem-Stoel-271292656217087/</li>
</ul>