window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector(".visual");
	const colors = [
		"#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
	]

	// Lets get going with the sounds here
	pads.forEach((pad, index) => {
		pad.addEventListener('click', function(){
			sounds[index].currentTime = 0;
			sounds[index].play();
			createBalls(index);
		});
	});
	
	// function for creating balls
	const createBalls = (index) => {
		const ball = document.createElement('div');
		visual.appendChild(ball);
		ball.style.backgroundColor = colors[index];
		ball.style.animation = 'jump 1s ease'
	}
});
