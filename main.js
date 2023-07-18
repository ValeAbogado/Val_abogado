let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('I´m starting in the world of web development.')
  .pauseFor(350)
  .deleteChars(16)
  .typeString('<strong>ok! ok!...</strong> as a front-end in web development, using HTML and CSS.')
  .pauseFor(600)
  .start();
