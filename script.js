// Global variables
let currentSection = 'home';
let musicStarted = false;
let moodThemes = [
    {
        name: 'chaotic but cute',
        bg: 'radial-gradient(circle at center, rgba(255, 107, 157, 0.3) 0%, rgba(240, 147, 251, 0.2) 30%, rgba(255, 193, 7, 0.1) 70%, transparent 100%)',
        bodyBg: 'linear-gradient(135deg, #2d1b69 0%, #11998e 50%, #38ef7d 100%)',
        particleSpeed: 1.5,
        particleColor: 'rgba(255, 107, 157, 0.6)',
        emoji: '😼',
        detail: 'A whirlwind of pink hearts and yarn tangles.',
        cardBg: 'rgba(255, 107, 157, 0.1)',
        cardBorder: 'rgba(255, 107, 157, 0.3)'
    },
    {
        name: 'thinking about food again',
        bg: 'radial-gradient(circle at center, rgba(255, 193, 7, 0.4) 0%, rgba(255, 107, 157, 0.2) 40%, rgba(76, 175, 80, 0.1) 80%, transparent 100%)',
        bodyBg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        particleSpeed: 0.8,
        particleColor: 'rgba(255, 193, 7, 0.7)',
        emoji: '🍕',
        detail: 'Golden sparkles dance like pizza toppings.',
        cardBg: 'rgba(255, 193, 7, 0.1)',
        cardBorder: 'rgba(255, 193, 7, 0.3)'
    },
    {
        name: 'studying with Miya',
        bg: 'radial-gradient(circle at center, rgba(76, 175, 80, 0.3) 0%, rgba(129, 199, 132, 0.2) 35%, rgba(156, 39, 176, 0.1) 75%, transparent 100%)',
        bodyBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        particleSpeed: 1.2,
        particleColor: 'rgba(76, 175, 80, 0.6)',
        emoji: '📚',
        detail: 'Green leaves flutter like turning pages.',
        cardBg: 'rgba(76, 175, 80, 0.1)',
        cardBorder: 'rgba(76, 175, 80, 0.3)'
    },
    {
        name: 'music mode activated',
        bg: 'radial-gradient(circle at center, rgba(156, 39, 176, 0.4) 0%, rgba(186, 104, 200, 0.3) 45%, rgba(255, 87, 34, 0.1) 85%, transparent 100%)',
        bodyBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        particleSpeed: 2,
        particleColor: 'rgba(156, 39, 176, 0.7)',
        emoji: '🎵',
        detail: 'Purple waves pulse to the beat.',
        cardBg: 'rgba(156, 39, 176, 0.1)',
        cardBorder: 'rgba(156, 39, 176, 0.3)'
    },
    {
        name: 'cozy crochet time',
        bg: 'radial-gradient(circle at center, rgba(255, 87, 34, 0.3) 0%, rgba(255, 138, 101, 0.2) 40%, rgba(255, 193, 7, 0.1) 80%, transparent 100%)',
        bodyBg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        particleSpeed: 0.6,
        particleColor: 'rgba(255, 87, 34, 0.6)',
        emoji: '🧶',
        detail: 'Orange threads weave through the air.',
        cardBg: 'rgba(255, 87, 34, 0.1)',
        cardBorder: 'rgba(255, 87, 34, 0.3)'
    },
    {
        name: 'dreamy night vibes',
        bg: 'radial-gradient(circle at center, rgba(30, 136, 229, 0.3) 0%, rgba(92, 107, 192, 0.2) 50%, rgba(156, 39, 176, 0.1) 100%)',
        bodyBg: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        particleSpeed: 0.9,
        particleColor: 'rgba(30, 136, 229, 0.5)',
        emoji: '🌙',
        detail: 'Starry night whispers fill the space.',
        cardBg: 'rgba(30, 136, 229, 0.1)',
        cardBorder: 'rgba(30, 136, 229, 0.3)'
    },
    {
        name: 'energetic morning',
        bg: 'radial-gradient(circle at center, rgba(255, 235, 59, 0.4) 0%, rgba(255, 193, 7, 0.3) 60%, rgba(76, 175, 80, 0.1) 100%)',
        bodyBg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)',
        particleSpeed: 1.8,
        particleColor: 'rgba(255, 235, 59, 0.8)',
        emoji: '☀️',
        detail: 'Sunshine bursts energize everything!',
        cardBg: 'rgba(255, 235, 59, 0.1)',
        cardBorder: 'rgba(255, 235, 59, 0.3)'
    }
];

// DOM elements
const introOverlay = document.getElementById('introOverlay');
const startBtn = document.getElementById('startBtn');
const bgMusic = document.getElementById('bgMusic');
const navBar = document.querySelector('.nav-bar');
const sections = document.querySelectorAll('.section');
const navBtns = document.querySelectorAll('.nav-btn');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initEventListeners();
});

// Initialize particles for all sections
function initParticles() {
    const particleContainers = document.querySelectorAll('.particles');
    particleContainers.forEach((container, index) => {
        // Create regular particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            container.appendChild(particle);
        }

        // Create floating bubbles for extra atmosphere
        for (let i = 0; i < 8; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'floating-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 10 + 's';
            bubble.style.animationDuration = (Math.random() * 6 + 8) + 's';
            bubble.style.width = (Math.random() * 20 + 10) + 'px';
            bubble.style.height = bubble.style.width;
            container.appendChild(bubble);
        }

        // Create occasional sparkle effects
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'background-sparkle';
            sparkle.textContent = '✨';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 15 + 's';
            sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            container.appendChild(sparkle);
        }
    });
}

// Initialize event listeners
function initEventListeners() {
    // Intro start button
    startBtn.addEventListener('click', startExperience);

    // Navigation buttons
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => showSection(btn.dataset.section));
    });

    // Home section start button
    document.getElementById('section1StartBtn').addEventListener('click', () => {
        createConfetti();
        setTimeout(() => showSection('favourites'), 1000);
    });

    // Favourites objects
    document.querySelectorAll('.floating-object').forEach(obj => {
        obj.addEventListener('click', () => showObjectPopup(obj.dataset.description));
    });

    // Popup close
    document.getElementById('popupClose').addEventListener('click', hideObjectPopup);

    // Mood zone
    document.getElementById('moodBtn').addEventListener('click', generateMood);

    // Miya chaos
    document.getElementById('cat').addEventListener('click', catClicked);
}

// Start the experience
function startExperience() {
    // Fade out intro
    introOverlay.style.animation = 'fadeOut 1s ease-out forwards';

    // Start music with fade in
    bgMusic.volume = 0;
    bgMusic.play();
    fadeInMusic();

    // Show nav and first section after intro fades
    setTimeout(() => {
        introOverlay.style.display = 'none';
        navBar.classList.remove('hidden');
        showSection('home');
        startAnimations();
    }, 1000);
}

// Fade in music
function fadeInMusic() {
    let volume = 0;
    const fadeInterval = setInterval(() => {
        if (volume < 0.3) {
            volume += 0.01;
            bgMusic.volume = volume;
        } else {
            clearInterval(fadeInterval);
        }
    }, 50);
}

// Show section with transition
function showSection(sectionId) {
    // Update navigation
    navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });

    // Hide current section
    const currentSec = document.querySelector('.section.active');
    if (currentSec) {
        currentSec.classList.remove('active');
    }

    // Show new section immediately
    const newSec = document.getElementById(sectionId);
    if (newSec) {
        newSec.classList.add('active');
    }

    // Initialize cat position when Miya Chaos section is shown
    if (sectionId === 'miya-chaos') {
        initializeCatPosition();
    }

    currentSection = sectionId;
}

// Initialize cat at random position
function initializeCatPosition() {
    const cat = document.getElementById('cat');
    const catScene = document.getElementById('catScene');

    if (cat && catScene) {
        const containerWidth = catScene.offsetWidth;
        const containerHeight = catScene.offsetHeight;
        const catSize = 64; // Approximate size of the cat emoji

        const maxX = containerWidth - catSize;
        const maxY = containerHeight - catSize;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        cat.style.left = randomX + 'px';
        cat.style.top = randomY + 'px';
        cat.style.transform = 'scale(1) rotate(0deg)';
        cat.style.opacity = '1';
    }
}

// Start animations after music begins
function startAnimations() {
    // Parallax effect
    window.addEventListener('mousemove', handleParallax);
    requestAnimationFrame(animateParticles);
}

// Parallax effect
function handleParallax(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    document.querySelectorAll('.particle').forEach(particle => {
        const speed = 0.5;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Animate particles
function animateParticles() {
    // Update particle positions based on current mood
    const moodBg = document.getElementById('moodBg');
    if (moodBg && currentSection === 'mood-zone') {
        const particles = document.getElementById('particles3').querySelectorAll('.particle');
        particles.forEach(particle => {
            const speed = parseFloat(particle.style.animationDuration) || 8;
            particle.style.animationDuration = speed * 0.8 + 's'; // Speed up for mood zone
        });
    }

    requestAnimationFrame(animateParticles);
}

// Create confetti for home section
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Show object popup in favourites
function showObjectPopup(description) {
    const popup = document.getElementById('objectPopup');
    document.getElementById('popupMessage').textContent = description;
    popup.classList.add('active');
}

function hideObjectPopup() {
    document.getElementById('objectPopup').classList.remove('active');
}

// Generate mood
function generateMood() {
    const randomMood = moodThemes[Math.floor(Math.random() * moodThemes.length)];
    const moodBg = document.getElementById('moodBg');
    const moodResult = document.getElementById('moodResult');
    const moodTitle = document.getElementById('moodTitle');
    const moodSubtitle = document.getElementById('moodSubtitle');
    const moodCopy = document.getElementById('moodCopy');
    const moodVisual = document.getElementById('moodVisual');
    const moodSection = document.getElementById('mood-zone');
    const sceneCard = moodSection.querySelector('.scene-card');

    // Add transition effect
    moodSection.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    sceneCard.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';

    // Apply dramatic scene changes
    moodBg.style.background = randomMood.bg;
    document.body.style.background = randomMood.bodyBg;

    // Update card styling
    sceneCard.style.background = randomMood.cardBg;
    sceneCard.style.borderColor = randomMood.cardBorder;
    sceneCard.style.boxShadow = `0 8px 32px ${randomMood.cardBorder}`;

    // Update text content
    moodResult.textContent = randomMood.name;
    moodTitle.textContent = 'Mood: ' + randomMood.name;
    moodSubtitle.textContent = 'Feeling ' + randomMood.name + ' today!';
    moodCopy.textContent = 'The entire scene transforms to match your vibe.';
    moodVisual.querySelector('.emoji').textContent = randomMood.emoji;
    moodVisual.querySelector('.scene-detail').textContent = randomMood.detail;

    // Animate particles with new colors
    const particles = document.getElementById('particles3').querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.animationDuration = (8 / randomMood.particleSpeed) + 's';
        particle.style.background = randomMood.particleColor;
        particle.style.boxShadow = `0 0 10px ${randomMood.particleColor}`;
    });

    // Add screen shake effect for dramatic moods
    if (randomMood.name === 'chaotic but cute' || randomMood.name === 'energetic morning') {
        addScreenShake(moodSection);
    }

    // Reset body background after some time for other sections
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)';
    }, 10000);
}

// Add screen shake effect
function addScreenShake(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Cat clicked in Miya Chaos
function catClicked() {
    const cat = document.getElementById('cat');
    const message = document.getElementById('catMessage');
    const catScene = document.getElementById('catScene');

    // Get container dimensions
    const containerWidth = catScene.offsetWidth;
    const containerHeight = catScene.offsetHeight;
    const catSize = 64; // Approximate size of the cat emoji in pixels

    // Generate random position within bounds
    const maxX = containerWidth - catSize;
    const maxY = containerHeight - catSize;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Fun messages for each click
    const messages = [
        'you cannot catch Miya 😭',
        'Miya escaped again! 🏃‍♀️',
        'Too fast for you! ⚡',
        'Miya is too sneaky! 🐱',
        'Try again! 🎯',
        'Miya says: "Catch me if you can!" 😼',
        'Poof! Gone! ✨',
        'Miya teleported! 🌟'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Add teleport effect
    cat.style.transform = 'scale(0) rotate(180deg)';
    cat.style.opacity = '0';

    setTimeout(() => {
        // Teleport to new position
        cat.style.left = randomX + 'px';
        cat.style.top = randomY + 'px';
        cat.style.transform = 'scale(1) rotate(0deg)';
        cat.style.opacity = '1';

        // Update message
        message.textContent = randomMessage;

        // Create sparkle effect at old position
        createSparkle(catScene, cat.offsetLeft, cat.offsetTop);
    }, 200);

    // Reset message after a few seconds
    setTimeout(() => {
        message.textContent = 'Tap the cat and see what happens!';
    }, 3000);
}

// Create sparkle effect
function createSparkle(container, x, y) {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkleFade 1s ease-out forwards';
        sparkle.style.zIndex = '10';

        container.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => sparkle.remove(), 1000);
    }
}