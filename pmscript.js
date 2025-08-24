document.addEventListener('DOMContentLoaded', () => {
  const artButton = document.getElementById('art-button');
  const modal = document.getElementById('custom-modal');
  const modalMessage = document.getElementById('modal-message');
  const modalYesBtn = document.getElementById('modal-yes-btn');

  // Your message chain:
  const messages = [
    "Do you really want to?",
    "Are you sure?",
    "But they're kinda bad :(",
    "What do you mean yes?",
    "Whatever I guess I'll show you..."
  ];

  let currentIndex = 0;

  function showModal(message) {
    // Replace \n with <br> and use innerHTML to display line breaks
    modalMessage.innerHTML = message.replace(/\n/g, '<br>');
    modal.classList.remove('hidden');
  }

  function hideModal() {
    modal.classList.add('hidden');
  }

  artButton.addEventListener('click', () => {
    currentIndex = 0;
    showModal(messages[currentIndex]);
  });

  modalYesBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < messages.length) {
      showModal(messages[currentIndex]);
    } else {
      hideModal();
      window.open('art.html', '_blank'); // open your art page in new tab
    }
  });

  // Optional: click outside modal content to close (if you want)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-game-btn');
  const modal = document.getElementById('game-modal');
  const message = document.getElementById('game-message');
  const buttonsDiv = document.getElementById('game-buttons');

  let step = 0;

  function showStep(msg, btns) {
    // Also replace \n with <br> here for line breaks in game modal messages
    message.innerHTML = msg.replace(/\n/g, '<br>');
    buttonsDiv.innerHTML = '';
    btns.forEach(({ text, onClick }) => {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.addEventListener('click', onClick);
      buttonsDiv.appendChild(btn);
    });
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
    step = 0;
  }

const steps = {
  0: () => {
    showStep(
      "Would you like to play a game?",
      [
        { text: "Yes", onClick: () => { step = 1; steps[step](); } },
        { text: "No", onClick: () => { step = 1.5; steps[step](); } }
      ]
    );
  },
  1: () => {
    showStep(
      "Yahooo, thank you! We are playing guess.",
      [
        { text: "Okay", onClick: () => { step = 2; steps[step](); } }
      ]
    );
  },
  1.5: () => {
    showStep(
      "No? Too bad. Lol",
      [
        { text: "Rude..", onClick: () => { step = 2; steps[step](); } }
      ]
    );
  },
  2: () => {
    showStep(
      "Soooo... guess what my current hyperfixation is (as of making this website):\n\n1. Bungou Stray Dogs\n2. Criminal Minds\n3. Marvel Cinematic Universe\n\nChoose 1, 2, or 3.",
      [
        { text: "1", onClick: () => { step = 3.1; steps[step](); } },
        { text: "2", onClick: () => { step = 3.1; steps[step](); } },
        { text: "3", onClick: () => { step = 3.1; steps[step](); } }
      ]
    );
  },
  "3.1": () => {
    showStep(
      "If you pressed 1, you'd be right! 🎉\n\nOkay now guess who my favourite character is!\n1. Dazai\n2. Dazai\n3. Dazai\n4. Chuuya",
      [
        { text: "1", onClick: () => { step = 3.2; steps[step](); } },
        { text: "2", onClick: () => { step = 3.2; steps[step](); } },
        { text: "3", onClick: () => { step = 3.2; steps[step](); } },
        { text: "4", onClick: () => { step = 3.2; steps[step](); } }
      ]
    );
  },
  "3.2": () => {
    showStep(
      "If you pressed 4, youd be wrong and you're poopy. That's right, I called you poopy.",
      [
        { text: "Okay...", onClick: () => { step = 4.1; steps[step](); } }
      ]
    );
  },
  "4.1": () => {
    showStep(
      "Yeah sorry. I'm fixating bad. I love Dazai.\nWanna hear a fun fact about Dazai?",
      [
        { text: "Yes", onClick: () => { step = 5.1; steps[step](); } },
        { text: "No", onClick: () => { step = 5.2; steps[step](); } }
      ]
    );
  },
  "5.1": () => {
    showStep(
      "Yes? Yahoooo!\nHe is my favourite character.",
      [
        { text: "Is that it..?", onClick: () => { step = 6.1; steps[step](); } },
      ]
    );
  },
  "5.2": () => {
    showStep(
      "No? Well... Too bad, you don't get a choice.\nHe is my favourite character.",
      [
        { text: "Is that it..?", onClick: () => { step = 6.1; steps[step](); } },
      ]
    );
  },
  "6.1": () => {
    showStep(
      "No, I was just joking! The actual fun fact is...",
      [
        { text: "Go on", onClick: () => { step = 7; steps[step](); } }
      ]
    );
  },
  7: () => {
    showStep(
      "Dazai, just like his real-life counterpart, is bad at driving!",
      [
        { text: "Dude I'm not into anime idk what ur on about", onClick: () => { step = 8; steps[step](); } }
      ]
    );
  },
  8: () => {  // <=== This was outside before
    showStep(
      "Okay.. rude :(",
      [
        { text: "Bye", onClick: () => { closeModal(); } }
      ]
    );
  }
};  // <=== close the steps object here, after all steps

  playBtn.addEventListener('click', () => {
    step = 0;
    steps[step]();
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const saveBtn = document.getElementById('save-btn');
    const clearBtn = document.getElementById('clear-btn');
    const gallery = document.getElementById('doodle-gallery');
    const colorPicker = document.getElementById('color-picker');
    const brushSizeInput = document.getElementById('brush-size');
    const brushSizeDisplay = document.getElementById('brush-size-display');

    let drawing = false;
    let currentColor = colorPicker.value;
    let brushSize = parseInt(brushSizeInput.value);

    colorPicker.addEventListener('input', (e) => {
      currentColor = e.target.value;
    });

    brushSizeInput.addEventListener('input', () => {
      brushSize = parseInt(brushSizeInput.value);
      brushSizeDisplay.textContent = `${brushSize}px`;
    });

    canvas.addEventListener('mousedown', (e) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', (e) => {
      if (drawing) {
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      drawing = false;
    });

    canvas.addEventListener('mouseleave', () => {
      drawing = false;
    });

    clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    saveBtn.addEventListener('click', () => {
      const dataURL = canvas.toDataURL();
      const img = document.createElement('img');
      img.src = dataURL;
      gallery.appendChild(img);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll(".polaroid-bg");
  const gap = 350; // space between polaroids
  const start = 100; // first polaroid distance from top

  polaroids.forEach((p, i) => {
    // Auto position
    p.style.top = `${start + gap * i}px`;

    // Random tilt (-7deg to +7deg)
    const randomTilt = (Math.random() * 14 - 7).toFixed(2) + "deg";
    p.style.setProperty("--rotate", randomTilt);
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  polaroids.forEach(p => observer.observe(p));
});



document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("video-popup");
  const video = document.getElementById("intro-video");
  const muteBtn = document.getElementById("mute-btn");
  const closeBtn = document.getElementById("close-btn");
  const playOverlay = document.getElementById("play-overlay");
  const videoTime = document.getElementById("video-time");

  if (popup && video) {
    popup.classList.remove("hidden");

    // Overlay click to start video
    playOverlay.addEventListener("click", () => {
      video.play();
      playOverlay.style.display = "none";
    });

    // Hide popup when video ends
    video.addEventListener("ended", () => {
      popup.classList.add("hidden");
    });

    // Mute/unmute toggle
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? "🔇" : "🔊";
    });

    // Close button
    closeBtn.addEventListener("click", () => {
      video.pause();
      popup.classList.add("hidden");
    });

    // Show time left on hover
    video.addEventListener("mouseenter", () => {
      videoTime.style.display = "block";
    });
    video.addEventListener("mouseleave", () => {
      videoTime.style.display = "none";
    });

    // Update time left
    video.addEventListener("timeupdate", () => {
      const timeLeft = video.duration - video.currentTime;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = Math.floor(timeLeft % 60).toString().padStart(2, '0');
      videoTime.textContent = `${minutes}:${seconds}`;
    });
  }
});
