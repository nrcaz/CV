// fade on load
// $('main').hide().fadeIn(800);

// variable to handle section being clicked or not
let expClick = false;
let skillClick = false;
let formationClick = false;

// color variables
let defaultSectionColor = '#e8e8e9';
let hoverSectionColor = '#cdedd8';
let black1 = '#1a1a1a';
let grey6 = '#6a6a6a';
/*
orange : #fbe8cd
green : #cdedd8
blue : #c0e3f2
red : #f4cfce
*/

// handle active on page load
$('.nav-link').on('click', function() {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
});

// handle hover on sections
// #formation
function activateHoverEvent() {
	if (!formationClick) {
		$('#formation').on('mouseenter', function(e) {
			$('#formation').css({
				backgroundColor : hoverSectionColor
			});
			$('[href="#formation"]').addClass('active');
		});
		$('#formation').on('mouseleave', function(e) {
			$('#formation').css({
				backgroundColor : defaultSectionColor
			});
			$('[href="#formation"]').removeClass('active');
		});
	}
	// #exp
	if (!expClick) {
		$('#exp').on('mouseenter', function(e) {
			$('#exp').css({
				backgroundColor : hoverSectionColor
			});
			$('[href="#exp"]').addClass('active');
		});
		$('#exp').on('mouseleave', function(e) {
			$('#exp').css({
				backgroundColor : defaultSectionColor
			});
			$('[href="#exp"]').removeClass('active');
		});
	}
	// #skill
	if (!skillClick) {
		$('#skill').on('mouseenter', function(e) {
			$('#skill').css({
				backgroundColor : hoverSectionColor
			});
			$('[href="#skill"]').addClass('active');
		});
		$('#skill').on('mouseleave', function(e) {
			$('#skill').css({
				backgroundColor : defaultSectionColor
			});
			$('[href="#skill"]').removeClass('active');
		});
	}
	if (!formationClick) {
		$('[href="#formation"]').on('mouseenter', function(e) {
			$('#formation').css({
				backgroundColor : hoverSectionColor
			});
			$('[href="#formation"]').addClass('active');
		});
		$('[href="#formation"]').on('mouseleave', function(e) {
			$('#formation').css({
				backgroundColor : defaultSectionColor
			});
			$('[href="#formation"]').removeClass('active');
		});
	}
	// #exp
	if (!expClick) {
		$('[href="#exp"]').on('mouseenter', function(e) {
			$('#exp').css({
				backgroundColor : hoverSectionColor
			});
			$('[href="#exp"]').addClass('active');
		});
		$('[href="#exp"]').on('mouseleave', function(e) {
			$('#exp').css({
				backgroundColor : defaultSectionColor
			});
			$('[href="#exp"]').removeClass('active');
		});
	}
	// #skill
	if (!skillClick) {
		$('[href="#skill"]').on('mouseenter', function(e) {
			$('#skill').css({
				backgroundColor : hoverSectionColor
			});
			$('[href="#skill"]').addClass('active');
		});
		$('[href="#skill').on('mouseleave', function(e) {
			$('#skill').css({
				backgroundColor : defaultSectionColor
			});
			$('[href="#skill"]').removeClass('active');
		});
	}
}
activateHoverEvent();

// handle section on Click
function activateClickEvent() {
	if (!expClick) {
		$('#exp').on('click', function(e) {
			e.preventDefault();
			window.scrollTo(0, 0);
			$('#skill').hide();
			$('#formation').hide();
			$('#center').css({
				marginRight : '20px'
			});
			$('#exp').css({
				width           : '750px',
				cursor          : 'default',
				backgroundColor : defaultSectionColor
			});
			$('#exp').hide().fadeIn();
			expClick = true;
			$('#index').removeClass('active');
			$('#exp').off('click mouseenter mouseleave');
			$('[href="#exp"]').off('mouseenter mouseleave');
		});
	}
	if (!skillClick) {
		$('#skill').on('click', function(e) {
			console.log(skillClick);
			e.preventDefault();
			window.scrollTo(0, 0);
			$('#exp').hide();
			$('#formation').hide();
			$('#skill').css({
				width           : '500px',
				paddingLeft     : '100px',
				paddingRight    : '100px',
				cursor          : 'default',
				backgroundColor : defaultSectionColor
			});
			$('#center').css({
				marginRight : '0px'
			});
			$('#skill').hide().fadeIn();
			skillClick = true;
			$('#index').removeClass('active');
			$('#skill').off('click mouseenter mouseleave');
			$('[href="#skill"]').off('mouseenter mouseleave');
			// clear Skill Selected
			$('#skill article:first-of-type > p, .framework').css({
				color      : '#919aa1',
				fontWeight : '200'
			});
			lastClicked = null;
		});
	}
	if (!formationClick) {
		$('#formation').on('click', function(e) {
			e.preventDefault();
			window.scrollTo(0, 0);
			$('#skill').hide();
			$('#exp').hide();
			$('#center').css({
				marginRight : '20px'
			});
			$('#formation').css({
				width           : '750px',
				cursor          : 'default',
				backgroundColor : defaultSectionColor
			});
			$('#formation').hide().fadeIn();
			formationClick = true;
			$('#index').removeClass('active');
			$('#formation').off('click mouseenter mouseleave');
			$('[href="#formation"]').off('mouseenter mouseleave');
		});
	}
}
activateClickEvent();

// handle nav
// click Experiences
function activateClickExp() {
	$('[href="#exp"]').on('click', function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
		$('#skill').hide();
		$('#formation').hide();
		$('#center').css({
			marginRight : '20px'
		});
		$('#exp').css({
			width           : '750px',
			cursor          : 'default',
			backgroundColor : defaultSectionColor
		});
		$('#exp').hide().fadeIn();
		expClick = true;
		$('#exp').off('click mouseenter mouseleave');
		$('[href="#exp"]').off('mouseenter mouseleave');
		// Clear Skill Selected
		$('#skill article:first-of-type > p, .framework').css({
			color      : '#919aa1',
			fontWeight : '200'
		});
		lastClicked = null;
	});
}
activateClickExp();
// Click Competences
function activateClickSkill() {
	$('[href="#skill"]').on('click', function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
		$('#exp').hide();
		$('#formation').hide();
		$('#skill').css({
			width           : '500px',
			paddingLeft     : '100px',
			paddingRight    : '100px',
			cursor          : 'default',
			backgroundColor : defaultSectionColor
		});
		$('#center').css({
			marginRight : '0px'
		});
		$('#skill').hide().fadeIn();
		skillClick = true;
		$('#skill').off('click mouseenter mouseleave');
		$('[href="#skill"]').off('mouseenter mouseleave');
	});
}
activateClickSkill();
// Click Formation
function activateClickFormation() {
	$('[href="#formation"]').on('click', function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
		$('#skill').hide();
		$('#exp').hide();
		$('#center').css({
			marginRight : '20px'
		});
		$('#formation').css({
			width           : '500px',
			cursor          : 'default',
			backgroundColor : defaultSectionColor
		});
		$('#formation').hide().fadeIn();
		formationClick = true;
		$('#formation').off('click mouseenter mouseleave');
		$('[href="#formation"]').off('mouseenter mouseleave');
		// Clear Skill Selected
		$('#skill article:first-of-type > p, .framework').css({
			color      : '#919aa1',
			fontWeight : '200'
		});
		lastClicked = null;
	});
}
activateClickFormation();

$('#index').on('click', function(e) {
	e.preventDefault();
	window.scrollTo(0, 0);
	// cancel css
	document.querySelector('#exp').style.width = '500px';
	document.querySelector('#formation').style.width = '500px';
	$('#skill').css({
		width           : '250px',
		paddingLeft     : '10px',
		paddingRight    : '10px',
		cursor          : 'pointer',
		backgroundColor : defaultSectionColor
	});
	$('#formation').css({
		width           : '500px',
		cursor          : 'pointer',
		backgroundColor : defaultSectionColor
	});
	$('#exp').css({
		width           : '500px',
		cursor          : 'pointer',
		backgroundColor : defaultSectionColor
	});
	$('#center').css({
		marginRight : '20px'
	});
	// display
	$('#exp').hide().fadeIn();
	$('#skill').hide().fadeIn();
	$('#formation').hide().fadeIn();
	// reset Click variables
	expClick = false;
	formationClick = false;
	skillClick = false;
	// reactivate Mouse Event
	activateHoverEvent();
	activateClickEvent();
	// Clear Skill Selected
	$('#skill article:first-of-type > p, .framework').css({
		color      : '#919aa1',
		fontWeight : '200'
	});
	lastClicked = null;
});

// handle icons
$('.fa-gamepad').on('click', function() {
	open('http://nicholas-rossette.epizy.com/mario-portfolio/');
});
$('.fa-git-square').on('click', function() {
	open('https://github.com/nrcaz?tab=repositories');
});
$('.fa-linkedin').on('click', function() {
	open('https://fr.linkedin.com/in/nicholas-rossette-cazel/');
});
$('.fa-mobile-alt').on('click', function() {
	$('#contact').show();
	$('#email').hide();
	$('#num').fadeIn(500);
});
$('.fa-envelope').on('click', function() {
	$('#contact').show();
	$('#num').hide();
	$('#email').fadeIn(500);
});

///////////////////////////////////////////////
// SKILLS FOCUS : future github link on click
///////////////////////////////////////////////
let lastClicked = null;
$('#skill article:first-of-type > p, .framework').on('mouseenter', function() {
	// on click
	if (skillClick) {
		$(this).on('click', function() {
			$('#skill article:first-of-type > p, .framework').off('click');
			$('#skill article:first-of-type > p, .framework').css({
				color      : grey6,
				fontWeight : '200'
			});
			$(this).css({
				color      : black1,
				fontWeight : '900'
			});
			lastClicked = $(this);
		});
	}
	// hover in
	$(this).css({
		color      : black1,
		fontWeight : '900',
		cursor     : 'pointer'
	});
	// hover out
	$('#skill article:first-of-type > p, .framework').on('mouseleave', function() {
		$('#skill article:first-of-type > p, .framework').css({
			color      : grey6,
			fontWeight : '200'
		});
		if (skillClick && lastClicked != null) {
			lastClicked.css({
				color      : black1,
				fontWeight : '900'
			});
		}
	});
});
