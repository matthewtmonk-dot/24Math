const PUZZLES = [
  { numbers:[1, 1, 2, 12], solution:"(1 + 1) x 2 x 12 = 24", difficulty:"starter" },
  { numbers:[1, 1, 3, 8], solution:"(1 + 1 + 1) x 8 = 24", difficulty:"starter" },
  { numbers:[1, 1, 4, 6], solution:"(1 - 1 + 4) x 6 = 24", difficulty:"starter" },
  { numbers:[1, 2, 3, 4], solution:"1 x 2 x 3 x 4 = 24", difficulty:"starter" },
  { numbers:[1, 2, 4, 8], solution:"(8 - 2) x 4 x 1 = 24", difficulty:"starter" },
  { numbers:[1, 2, 5, 7], solution:"(5 + 7) x 2 x 1 = 24", difficulty:"starter" },
  { numbers:[1, 1, 2, 6], solution:"(1 + 1) x 2 x 6 = 24", difficulty:"starter" },
  { numbers:[2, 2, 2, 6], solution:"(2 + 2) x 6 x (2 / 2) = 24", difficulty:"starter" },
  { numbers:[2, 2, 4, 6], solution:"6 x (4 + 2 - 2) = 24", difficulty:"starter" },
  { numbers:[2, 3, 4, 5], solution:"2 x (3 + 4 + 5) = 24", difficulty:"starter" },
  { numbers:[1, 3, 3, 5], solution:"1 x 3 x (3 + 5) = 24", difficulty:"starter" },
  { numbers:[4, 4, 4, 6], solution:"4 x 6 + 4 - 4 = 24", difficulty:"starter" },
  { numbers:[1, 1, 1, 8], solution:"8 × (1 + 1 + 1) = 24", difficulty:"easy" },
  { numbers:[1, 1, 2, 6], solution:"(1 + 1) × 2 × 6 = 24", difficulty:"easy" },
  { numbers:[1, 1, 2, 7], solution:"(1 + 2) × (1 + 7) = 24", difficulty:"easy" },
  { numbers:[1, 1, 3, 4], solution:"(1 + 1) × 3 × 4 = 24", difficulty:"easy" },
  { numbers:[1, 1, 3, 5], solution:"(1 + 3) × (1 + 5) = 24", difficulty:"easy" },
  { numbers:[1, 1, 3, 8], solution:"1 - 1 + 3 × 8 = 24", difficulty:"easy" },
  { numbers:[1, 1, 4, 8], solution:"(1 + 1) × (4 + 8) = 24", difficulty:"easy" },
  { numbers:[1, 2, 2, 5], solution:"(1 + 5) × (2 + 2) = 24", difficulty:"easy" },
  { numbers:[1, 2, 3, 4], solution:"4 × (3 + 1 + 2) = 24", difficulty:"easy" },
  { numbers:[1, 2, 3, 8], solution:"(1 + 3) × (8 - 2) = 24", difficulty:"easy" },
  { numbers:[1, 2, 4, 4], solution:"(1 + 2) × (4 + 4) = 24", difficulty:"easy" },
  { numbers:[1, 2, 5, 7], solution:"1 × 2 × (5 + 7) = 24", difficulty:"easy" },
  { numbers:[1, 3, 5, 7], solution:"(1 + 5) × (7 - 3) = 24", difficulty:"easy" },
  { numbers:[2, 4, 7, 9], solution:"2 × 4 + 7 + 9 = 24", difficulty:"easy" },
  { numbers:[3, 4, 5, 6], solution:"(5 + 3 - 4) × 6 = 24", difficulty:"easy" },
  { numbers:[4, 4, 4, 4], solution:"4 × 4 + 4 + 4 = 24", difficulty:"easy" },
  { numbers:[1, 1, 2, 9], solution:"(1 + 2) × (9 - 1) = 24", difficulty:"medium" },
  { numbers:[1, 1, 4, 9], solution:"(1 - 4) × (1 - 9) = 24", difficulty:"medium" },
  { numbers:[1, 1, 5, 5], solution:"5 × 5 - 1 × 1 = 24", difficulty:"medium" },
  { numbers:[1, 1, 6, 8], solution:"6 × 8 ÷ (1 + 1) = 24", difficulty:"medium" },
  { numbers:[1, 2, 4, 9], solution:"4 × (9 - 1 - 2) = 24", difficulty:"medium" },
  { numbers:[1, 2, 6, 7], solution:"6 × (7 - 1 - 2) = 24", difficulty:"medium" },
  { numbers:[1, 3, 6, 8], solution:"6 × (8 - 1 - 3) = 24", difficulty:"medium" },
  { numbers:[2, 3, 3, 7], solution:"(7 + 3 - 2) × 3 = 24", difficulty:"medium" },
  { numbers:[2, 5, 7, 9], solution:"5 × 7 - (2 + 9) = 24", difficulty:"medium" },
  { numbers:[3, 5, 6, 9], solution:"(3 + 5) × (9 - 6) = 24", difficulty:"medium" },
  { numbers:[3, 6, 6, 6], solution:"6 × (6 - 6 ÷ 3) = 24", difficulty:"medium" },
  { numbers:[4, 5, 7, 8], solution:"4 + 5 + 7 + 8 = 24", difficulty:"medium" },
  { numbers:[4, 6, 6, 8], solution:"(6 + 6) × 8 ÷ 4 = 24", difficulty:"medium" },
  { numbers:[1, 2, 7, 7], solution:"(7 × 7 - 1) ÷ 2 = 24", difficulty:"hard" },
  { numbers:[1, 2, 8, 9], solution:"8 × 9 ÷ (1 + 2) = 24", difficulty:"hard" },
  { numbers:[1, 3, 4, 6], solution:"6 ÷ (1 - 3 ÷ 4) = 24", difficulty:"hard" },
  { numbers:[1, 3, 7, 9], solution:"(1 + 7) ÷ (3 ÷ 9) = 24", difficulty:"hard" },
  { numbers:[1, 5, 5, 5], solution:"5 × (5 - 1 ÷ 5) = 24", difficulty:"hard" },
  { numbers:[2, 6, 7, 8], solution:"8 × (7 + 2 - 6) = 24", difficulty:"hard" },
  { numbers:[3, 3, 8, 8], solution:"8 ÷ (3 - 8 ÷ 3) = 24", difficulty:"hard" }
];

const STORAGE_KEY = "make24_game_v3";
const MAX_TEAMS = 3;
const DEFAULT_ROUND_LIMIT = 6;
const MIN_ROUND_LIMIT = 4;
const MAX_ROUND_LIMIT = 20;
const CORRECT_POINTS = 3;
const FIRST_SOLVE_BONUS = 1;
const TEAM_COLORS = ["#ff4fb9", "#ff9f2e", "#56b7ff"];
const PROGRESSIVE_LEVELS = ["starter", "easy", "medium", "hard"];
const DIFFICULTIES = [...PROGRESSIVE_LEVELS, "mixed", "progressive"];
const DIFFICULTY_MODES = [...DIFFICULTIES, "per-team"];
const DIFFICULTY_LABELS = {
  starter:"Starter",
  easy:"Easy",
  medium:"Medium",
  hard:"Hard",
  mixed:"Random Mixed",
  progressive:"Progressive"
};

const els = {
  appRoot:document.getElementById("app"),
  startScreen:document.getElementById("startScreen"),
  startGameBtn:document.getElementById("startGameBtn"),
  settingsToggleBtn:document.getElementById("settingsToggleBtn"),
  settingsCloseBtn:document.getElementById("settingsCloseBtn"),
  settingsBackdrop:document.getElementById("settingsBackdrop"),
  teamCount:document.getElementById("teamCount"),
  defaultTime:document.getElementById("defaultTime"),
  roundLimit:document.getElementById("roundLimit"),
  difficultyMode:document.getElementById("difficultyMode"),
  showDifficultyLabels:document.getElementById("showDifficultyLabels"),
  incorrectMode:document.getElementById("incorrectMode"),
  soundSettingsToggle:document.getElementById("soundSettingsToggle"),
  soundSettingsBody:document.getElementById("soundSettingsBody"),
  soundEffects:document.getElementById("soundEffects"),
  randomSound:document.getElementById("randomSound"),
  rewardSounds:document.getElementById("rewardSounds"),
  timerSounds:document.getElementById("timerSounds"),
  backgroundMusic:document.getElementById("backgroundMusic"),
  effectsVolume:document.getElementById("effectsVolume"),
  effectsVolumeValue:document.getElementById("effectsVolumeValue"),
  musicVolume:document.getElementById("musicVolume"),
  musicVolumeValue:document.getElementById("musicVolumeValue"),
  teamSettings:document.getElementById("teamSettings"),
  laneIndicator:document.getElementById("laneIndicator"),
  fullscreenBtn:document.getElementById("fullscreenBtn"),
  settingsFullscreenBtn:document.getElementById("settingsFullscreenBtn"),
  backToInstructionsBtn:document.getElementById("backToInstructionsBtn"),
  resetScoresBtn:document.getElementById("resetScoresBtn"),
  settingsResetScoresBtn:document.getElementById("settingsResetScoresBtn"),
  resetGameBtn:document.getElementById("resetGameBtn"),
  settingsResetGameBtn:document.getElementById("settingsResetGameBtn"),
  newPuzzlesBtn:document.getElementById("newPuzzlesBtn"),
  startRoundBtn:document.getElementById("startRoundBtn"),
  endRoundBtn:document.getElementById("endRoundBtn"),
  nextRoundBtn:document.getElementById("nextRoundBtn"),
  revealAllBtn:document.getElementById("revealAllBtn"),
  resetRoundBtn:document.getElementById("resetRoundBtn"),
  timerDisplay:document.getElementById("timerDisplay"),
  timerStartPauseBtn:document.getElementById("timerStartPauseBtn"),
  timerResetBtn:document.getElementById("timerResetBtn"),
  timerMinusBtn:document.getElementById("timerMinusBtn"),
  timerPlusBtn:document.getElementById("timerPlusBtn"),
  puzzleLanes:document.getElementById("puzzleLanes"),
  scoreBody:document.getElementById("scoreBody"),
  scorePanel:document.getElementById("scorePanel"),
  scoreHeaderBar:document.getElementById("scoreHeaderBar"),
  scoreToggleBtn:document.getElementById("scoreToggleBtn"),
  randomTeamBtn:document.getElementById("randomTeamBtn"),
  statusText:document.getElementById("statusText"),
  victoryOverlay:document.getElementById("victoryOverlay"),
  victoryKicker:document.getElementById("victoryKicker"),
  victoryTitle:document.getElementById("victoryTitle"),
  victoryWinnerList:document.getElementById("victoryWinnerList"),
  victoryMessage:document.getElementById("victoryMessage"),
  victoryScores:document.getElementById("victoryScores"),
  victoryNewGameBtn:document.getElementById("victoryNewGameBtn"),
  victoryCloseBtn:document.getElementById("victoryCloseBtn")
};

let timerId = null;
let randomPickerRunning = false;
let randomPickerHighlightIndex = null;
let audioContext = null;
let audioUnlocked = false;
let lastRoundEndSoundKey = "";
let soundSettingsExpanded = false;
let victoryDismissed = false;
const timerBeepsPlayed = new Set();
const AUDIO_FILES = {
  background: "assets/sounds/background-loop.mp3",
  correct: "assets/sounds/correct.mp3",
  bonus: "assets/sounds/bonus.mp3",
  firstSolve: "assets/sounds/first-solve.mp3",
  round: "assets/sounds/round.mp3",
  victory: "assets/sounds/cute_happy_victory.mp3"
};
const fileSounds = {
  correct:null,
  bonus:null,
  firstSolve:null,
  round:null,
  victory:null,
  background:null
};

function clamp(number, min, max){
  return Math.max(min, Math.min(max, number));
}

function titleCase(text){
  return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}

function difficultyLabel(value){
  return DIFFICULTY_LABELS[value] || titleCase(value);
}

function normalizeProgressiveLevel(value, fallback = "easy"){
  return PROGRESSIVE_LEVELS.includes(value) ? value : fallback;
}

function buildDefaultTeams(){
  return TEAM_COLORS.map((color, index) => ({
    name:`Team ${index + 1}`,
    score:0,
    color,
    difficulty:"mixed",
    progressiveStart:"easy",
    progressiveCurrent:"easy"
  }));
}

function defaultState(){
  return {
    gameStarted:false,
    teamCount:3,
    selectedTeam:0,
    defaultSeconds:120,
    roundLimit:DEFAULT_ROUND_LIMIT,
    remainingSeconds:120,
    difficultyMode:"mixed",
    progressiveSettingsDirty:false,
    showDifficultyLabels:false,
    incorrectMode:"no-penalty",
    soundEffects:true,
    randomSound:true,
    rewardSounds:true,
    timerSounds:"warning",
    backgroundMusic:false,
    effectsVolume:70,
    musicVolume:30,
    teams:buildDefaultTeams(),
    puzzleCursors:{ starter:0, easy:0, medium:0, hard:0, mixed:0 },
    roundNumber:0,
    roundActive:false,
    roundEnded:false,
    gameOver:false,
    firstSolvedTeam:null,
    lanes:[]
  };
}

function normalizeDifficulty(value, fallback = "mixed"){
  return DIFFICULTIES.includes(value) ? value : fallback;
}

function progressiveStartForTeam(teamIndex){
  return normalizeProgressiveLevel(teamAt(teamIndex).progressiveStart);
}

function isProgressiveTeam(teamIndex){
  if(state.difficultyMode === "per-team") return normalizeDifficulty(teamAt(teamIndex).difficulty) === "progressive";
  return state.difficultyMode === "progressive";
}

function setProgressiveCurrent(teamIndex, level){
  const team = teamAt(teamIndex);
  team.progressiveCurrent = normalizeProgressiveLevel(level);
}

function resetProgressiveLevels(){
  state.teams.forEach((team, teamIndex) => {
    team.progressiveCurrent = progressiveStartForTeam(teamIndex);
  });
  state.progressiveSettingsDirty = false;
}

function raiseProgressiveLevel(level){
  const index = PROGRESSIVE_LEVELS.indexOf(normalizeProgressiveLevel(level));
  return PROGRESSIVE_LEVELS[Math.min(index + 1, PROGRESSIVE_LEVELS.length - 1)];
}

function lowerProgressiveLevel(level){
  const index = PROGRESSIVE_LEVELS.indexOf(normalizeProgressiveLevel(level));
  return PROGRESSIVE_LEVELS[Math.max(index - 1, 0)];
}

function normalizeState(raw){
  const base = defaultState();
  if(!raw || typeof raw !== "object") return base;

  const savedTeams = Array.isArray(raw.teams) ? raw.teams : [];
  const teams = buildDefaultTeams().map((fallback, index) => {
    const saved = savedTeams[index] || {};
    return {
      name:String(saved.name || fallback.name),
      score:Number.isFinite(Number(saved.score)) ? Number(saved.score) : 0,
      color:String(saved.color || fallback.color),
      difficulty:normalizeDifficulty(saved.difficulty, fallback.difficulty),
      progressiveStart:normalizeProgressiveLevel(saved.progressiveStart, fallback.progressiveStart),
      progressiveCurrent:normalizeProgressiveLevel(saved.progressiveCurrent, normalizeProgressiveLevel(saved.progressiveStart, fallback.progressiveCurrent))
    };
  });

  const puzzleCursors = { ...base.puzzleCursors, ...(raw.puzzleCursors || {}) };

  return {
    gameStarted:Boolean(raw.gameStarted),
    teamCount:clamp(parseInt(raw.teamCount, 10) || base.teamCount, 1, MAX_TEAMS),
    selectedTeam:clamp(parseInt(raw.selectedTeam, 10) || 0, 0, MAX_TEAMS - 1),
    defaultSeconds:clamp(parseInt(raw.defaultSeconds, 10) || base.defaultSeconds, 10, 600),
    roundLimit:clamp(parseInt(raw.roundLimit, 10) || base.roundLimit, MIN_ROUND_LIMIT, MAX_ROUND_LIMIT),
    remainingSeconds:clamp(parseInt(raw.remainingSeconds, 10) || parseInt(raw.defaultSeconds, 10) || base.remainingSeconds, 0, 600),
    difficultyMode:DIFFICULTY_MODES.includes(raw.difficultyMode) ? raw.difficultyMode : base.difficultyMode,
    progressiveSettingsDirty:Boolean(raw.progressiveSettingsDirty),
    showDifficultyLabels:Boolean(raw.showDifficultyLabels),
    incorrectMode:["off", "no-penalty", "penalty"].includes(raw.incorrectMode) ? raw.incorrectMode : base.incorrectMode,
    soundEffects:raw.soundEffects === undefined ? base.soundEffects : Boolean(raw.soundEffects),
    randomSound:raw.randomSound === undefined ? base.randomSound : Boolean(raw.randomSound),
    rewardSounds:raw.rewardSounds === undefined ? base.rewardSounds : Boolean(raw.rewardSounds),
    timerSounds:["off", "warning", "countdown"].includes(raw.timerSounds) ? raw.timerSounds : base.timerSounds,
    backgroundMusic:raw.backgroundMusic === undefined ? base.backgroundMusic : Boolean(raw.backgroundMusic),
    effectsVolume:clamp(parseInt(raw.effectsVolume, 10) || base.effectsVolume, 0, 100),
    musicVolume:clamp(parseInt(raw.musicVolume, 10) || base.musicVolume, 0, 100),
    teams,
    puzzleCursors,
    roundNumber:Math.max(0, parseInt(raw.roundNumber, 10) || 0),
    roundActive:Boolean(raw.roundActive),
    roundEnded:Boolean(raw.roundEnded),
    gameOver:Boolean(raw.gameOver),
    firstSolvedTeam:Number.isInteger(raw.firstSolvedTeam) ? raw.firstSolvedTeam : null,
    lanes:Array.isArray(raw.lanes) ? raw.lanes : []
  };
}

function loadState(){
  try{
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  }catch{
    return defaultState();
  }
}

let state = loadState();
state.gameStarted = false;
state.roundActive = false;
state.gameOver = false;

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setStatus(text){
  els.statusText.textContent = text;
}

function effectsGain(multiplier = 1){
  return clamp((state.effectsVolume / 100) * multiplier, 0, 1);
}

function musicGain(){
  return clamp(state.musicVolume / 100, 0, 1);
}

function getAudioContext({ requireEffects = true } = {}){
  if(requireEffects && !state.soundEffects) return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if(!AudioContextClass) return null;
  if(!audioContext) audioContext = new AudioContextClass();
  if(audioContext.state === "suspended"){
    audioContext.resume().catch(() => {});
  }
  return audioContext;
}

function unlockAudio(){
  audioUnlocked = true;
  getAudioContext({ requireEffects:false });
  syncBackgroundMusic();
}

function soundAllowed(kind){
  if(!state.soundEffects) return false;
  if(kind === "random") return state.randomSound;
  if(kind === "reward") return state.rewardSounds;
  if(kind === "timer") return state.timerSounds !== "off";
  return true;
}

function getFileSound(name){
  if(fileSounds[name]) return fileSounds[name];
  const source = AUDIO_FILES[name];
  if(!source) return null;
  const audio = new Audio(source);
  audio.preload = "auto";
  audio.volume = name === "background" ? musicGain() : effectsGain(0.95);
  if(name === "background") audio.loop = true;
  fileSounds[name] = audio;
  return audio;
}

function playFileSound(name, fallback){
  if(!soundAllowed("reward")) return;
  const audio = getFileSound(name);
  if(!audio){
    fallback?.();
    return;
  }

  let settled = false;
  const playFallback = () => {
    if(settled) return;
    settled = true;
    fallback?.();
  };

  audio.pause();
  audio.currentTime = 0;
  audio.volume = effectsGain(0.95);
  audio.onerror = playFallback;
  const result = audio.play();
  if(result && typeof result.then === "function"){
    result.then(() => {
      settled = true;
    }).catch(playFallback);
  }
}

function tone({ frequency = 880, duration = 0.08, type = "sine", gain = 0.16, delay = 0 } = {}){
  const context = getAudioContext();
  if(!context) return;
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gainNode.gain.setValueAtTime(0.0001, start);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, effectsGain(gain)), start + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.01);
}

function playGeneratedSuccess(big = false){
  tone({ frequency:big ? 660 : 720, duration:0.11, gain:big ? 0.18 : 0.14 });
  tone({ frequency:big ? 990 : 920, duration:0.13, gain:big ? 0.16 : 0.13, delay:0.09 });
}

function playGeneratedBonus(){
  tone({ frequency:1040, duration:0.07, type:"triangle", gain:0.12 });
  tone({ frequency:1320, duration:0.08, type:"triangle", gain:0.10, delay:0.06 });
}

function playGeneratedNextRound(){
  tone({ frequency:580, duration:0.09, type:"triangle", gain:0.12 });
  tone({ frequency:760, duration:0.10, type:"triangle", gain:0.13, delay:0.08 });
  tone({ frequency:980, duration:0.12, type:"triangle", gain:0.12, delay:0.16 });
}

function playNextRoundSound(){
  if(!soundAllowed("round")) return;
  const audio = getFileSound("round");
  if(!audio){
    playGeneratedNextRound();
    return;
  }

  let settled = false;
  const playFallback = () => {
    if(settled) return;
    settled = true;
    playGeneratedNextRound();
  };

  audio.pause();
  audio.currentTime = 0;
  audio.volume = effectsGain(0.95);
  audio.onerror = playFallback;
  const result = audio.play();
  if(result && typeof result.then === "function"){
    result.then(() => {
      settled = true;
    }).catch(playFallback);
  }
}

function playVictorySound(){
  if(!state.soundEffects) return;
  const audio = getFileSound("victory");
  if(!audio){
    playGeneratedSuccess(true);
    return;
  }

  let settled = false;
  const playFallback = () => {
    if(settled) return;
    settled = true;
    playGeneratedSuccess(true);
  };

  audio.pause();
  audio.currentTime = 0;
  audio.volume = effectsGain(1);
  audio.onerror = playFallback;
  const result = audio.play();
  if(result && typeof result.then === "function"){
    result.then(() => {
      settled = true;
    }).catch(playFallback);
  }
}

function playRoundStartSound(){
  if(!soundAllowed("round")) return;
  tone({ frequency:520, duration:0.10, type:"sine", gain:0.13 });
  tone({ frequency:780, duration:0.14, type:"sine", gain:0.15, delay:0.09 });
}

function playRoundEndSound(){
  if(!soundAllowed("timer")) return;
  tone({ frequency:620, duration:0.11, type:"triangle", gain:0.13 });
  tone({ frequency:440, duration:0.16, type:"triangle", gain:0.12, delay:0.10 });
}

function winningTeamIndexes(){
  const eligible = activeTeamIndexes();
  const topScore = Math.max(...eligible.map((teamIndex) => teamAt(teamIndex).score));
  return eligible.filter((teamIndex) => teamAt(teamIndex).score === topScore);
}

function announceVictory(){
  if(state.gameOver || !state.gameStarted) return;
  stopTimer();
  state.roundActive = false;
  state.roundEnded = true;
  state.gameOver = true;
  victoryDismissed = false;
  saveState();
  playVictorySound();
  render();
  setStatus("Victory!");
}

function finishGameIfRoundLimitReached(){
  if(state.gameOver || !state.gameStarted) return false;
  if(state.roundEnded && state.roundNumber >= state.roundLimit){
    announceVictory();
    return true;
  }
  return false;
}

function playTimerBeep(remainingSeconds){
  if(!soundAllowed("timer")) return;
  if(state.timerSounds === "warning" && remainingSeconds !== 10) return;
  if(state.timerSounds === "countdown" && remainingSeconds !== 10 && (remainingSeconds < 1 || remainingSeconds > 5)) return;
  tone({ frequency:remainingSeconds <= 5 ? 880 : 740, duration:0.07, type:"sine", gain:0.10 });
}

function playSelectorTick(progress = 0){
  if(!soundAllowed("random")) return;
  const context = getAudioContext();
  if(!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const duration = 0.035;
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(1120 - progress * 260, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, effectsGain(0.11)), now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function playSelectorLanding(){
  if(!soundAllowed("random")) return;
  const context = getAudioContext();
  if(!context) return;

  [660, 880].forEach((frequency, index) => {
    const start = context.currentTime + index * 0.075;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, effectsGain(0.14)), start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.12);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.13);
  });
}

function syncBackgroundMusic(forceStart = false){
  const audio = getFileSound("background");
  if(!audio) return;
  audio.volume = musicGain();
  if(!state.backgroundMusic){
    audio.pause();
    return;
  }
  if(!audioUnlocked && !forceStart) return;
  const result = audio.play();
  if(result && typeof result.catch === "function"){
    result.catch(() => {});
  }
}

function activeTeamIndexes(){
  return Array.from({ length:state.teamCount }, (_, index) => index);
}

function teamAt(index){
  return state.teams[clamp(index, 0, MAX_TEAMS - 1)];
}

function formatTime(seconds){
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

function updateTimerUi(){
  els.timerDisplay.textContent = formatTime(state.remainingSeconds);
  els.timerStartPauseBtn.textContent = timerId ? "Stop" : "Start";
  els.timerDisplay.classList.toggle("isExpired", state.remainingSeconds === 0);
}

function stopTimer(){
  if(timerId){
    window.clearInterval(timerId);
    timerId = null;
  }
  updateTimerUi();
}

function endRound(reason = "Round ended"){
  if(state.gameOver) return;
  const wasAlreadyEnded = state.roundEnded && !state.roundActive;
  stopTimer();
  state.roundActive = false;
  state.roundEnded = true;
  const endSoundKey = `${state.roundNumber}:${reason}`;
  if(!wasAlreadyEnded && lastRoundEndSoundKey !== endSoundKey){
    playRoundEndSound();
    lastRoundEndSoundKey = endSoundKey;
  }
  saveState();
  setStatus(reason);
  if(!finishGameIfRoundLimitReached()) renderRoundControls();
}

function startTimer(){
  if(timerId || !state.gameStarted) return;
  if(state.remainingSeconds <= 0) state.remainingSeconds = state.defaultSeconds;
  timerId = window.setInterval(() => {
    state.remainingSeconds = Math.max(0, state.remainingSeconds - 1);
    if(!timerBeepsPlayed.has(state.remainingSeconds)){
      playTimerBeep(state.remainingSeconds);
      timerBeepsPlayed.add(state.remainingSeconds);
    }
    if(state.remainingSeconds === 0){
      endRound("Time is up");
    }
    saveState();
    updateTimerUi();
  }, 1000);
  updateTimerUi();
}

function resetTimer(){
  stopTimer();
  state.remainingSeconds = state.defaultSeconds;
  timerBeepsPlayed.clear();
  saveState();
  updateTimerUi();
}

function adjustTimer(seconds){
  state.remainingSeconds = clamp(state.remainingSeconds + seconds, 0, 600);
  saveState();
  updateTimerUi();
}

function difficultyForTeam(teamIndex){
  if(isProgressiveTeam(teamIndex)) return normalizeProgressiveLevel(teamAt(teamIndex).progressiveCurrent, progressiveStartForTeam(teamIndex));
  if(state.difficultyMode === "per-team") return normalizeDifficulty(teamAt(teamIndex).difficulty);
  return normalizeDifficulty(state.difficultyMode);
}

function puzzlePoolForDifficulty(difficulty){
  if(difficulty === "mixed") return PUZZLES.map((puzzle, index) => ({ puzzle, index }));
  return PUZZLES
    .map((puzzle, index) => ({ puzzle, index }))
    .filter((item) => item.puzzle.difficulty === difficulty);
}

function nextPuzzleIndex(teamIndex){
  const difficulty = difficultyForTeam(teamIndex);
  const pool = puzzlePoolForDifficulty(difficulty);
  if(difficulty === "mixed"){
    return pool[Math.floor(Math.random() * pool.length)].index;
  }
  const cursor = state.puzzleCursors[difficulty] || 0;
  const selected = pool[cursor % pool.length];
  state.puzzleCursors[difficulty] = cursor + 1;
  return selected.index;
}

function createLane(teamIndex){
  return {
    teamIndex,
    puzzleIndex:nextPuzzleIndex(teamIndex),
    solutionVisible:false,
    solved:false,
    incorrect:false,
    pointsEarned:0
  };
}

function normalizeLane(lane, teamIndex){
  return {
    teamIndex,
    puzzleIndex:clamp(parseInt(lane?.puzzleIndex, 10) || 0, 0, PUZZLES.length - 1),
    solutionVisible:Boolean(lane?.solutionVisible),
    solved:Boolean(lane?.solved),
    incorrect:Boolean(lane?.incorrect),
    pointsEarned:Math.max(0, parseInt(lane?.pointsEarned, 10) || 0)
  };
}

function prepareRound({ forceNew = false, incrementRound = false } = {}){
  if(forceNew || incrementRound){
    if(incrementRound) state.roundNumber += 1;
    state.roundActive = false;
    state.roundEnded = false;
    state.firstSolvedTeam = null;
    state.remainingSeconds = state.defaultSeconds;
  }

  if(forceNew){
    state.lanes = activeTeamIndexes().map(createLane);
    return;
  }

  state.lanes = activeTeamIndexes().map((teamIndex) => {
    const existing = state.lanes.find((lane) => lane.teamIndex === teamIndex);
    return existing ? normalizeLane(existing, teamIndex) : createLane(teamIndex);
  });
}

function startGame(){
  audioUnlocked = true;
  state.gameStarted = true;
  state.gameOver = false;
  victoryDismissed = false;
  stopTimer();
  timerBeepsPlayed.clear();
  resetProgressiveLevels();
  prepareRound({ forceNew:true, incrementRound:true });
  saveState();
  syncBackgroundMusic(true);
  setStatus("Round ready");
  closeSettings();
  render();
}

function goToInstructions(){
  state.gameStarted = false;
  stopTimer();
  saveState();
  closeSettings();
  setStatus("Ready");
  render();
}

function startRound(){
  if(!state.gameStarted) startGame();
  if(state.gameOver) return;
  state.roundActive = true;
  state.roundEnded = false;
  lastRoundEndSoundKey = "";
  timerBeepsPlayed.clear();
  saveState();
  setStatus(`Round ${state.roundNumber} started`);
  renderRoundControls();
  playRoundStartSound();
  startTimer();
}

function nextRound(){
  if(finishGameIfRoundLimitReached()) return;
  if(state.gameOver) return;
  stopTimer();
  timerBeepsPlayed.clear();
  lastRoundEndSoundKey = "";
  prepareRound({ forceNew:true, incrementRound:true });
  playNextRoundSound();
  saveState();
  setStatus(`Round ${state.roundNumber} ready`);
  render();
}

function resetRound(){
  if(state.gameOver) return;
  stopTimer();
  timerBeepsPlayed.clear();
  lastRoundEndSoundKey = "";
  if(state.progressiveSettingsDirty) resetProgressiveLevels();
  prepareRound({ forceNew:true, incrementRound:false });
  saveState();
  setStatus("Round reset");
  render();
}

function revealAllSolutions(){
  state.lanes.forEach((lane) => {
    lane.solutionVisible = true;
  });
  saveState();
  setStatus("Solutions revealed");
  renderLanes();
}

function allActiveTeamsSolved(){
  return state.lanes.length > 0 && state.lanes.every((lane) => lane.solved);
}

function setSelectedTeam(teamIndex){
  state.selectedTeam = clamp(parseInt(teamIndex, 10) || 0, 0, state.teamCount - 1);
  saveState();
  renderScores();
}

function awardTeam(teamIndex, points, statusText){
  const safeIndex = clamp(teamIndex, 0, state.teamCount - 1);
  state.teams[safeIndex].score += points;
  saveState();
  setStatus(statusText || `${points >= 0 ? "Added" : "Subtracted"} ${Math.abs(points)} for ${state.teams[safeIndex].name}`);
  renderScores();
  renderVictory();
}

function markCorrect(laneIndex){
  if(state.gameOver) return;
  const lane = state.lanes[laneIndex];
  if(!lane || lane.solved || lane.incorrect) return;

  const isFirstSolve = state.firstSolvedTeam === null;
  const points = CORRECT_POINTS + (isFirstSolve ? FIRST_SOLVE_BONUS : 0);
  lane.solved = true;
  lane.solutionVisible = true;
  lane.pointsEarned = points;
  if(isFirstSolve) state.firstSolvedTeam = lane.teamIndex;

  state.teams[lane.teamIndex].score += points;
  if(isProgressiveTeam(lane.teamIndex)){
    setProgressiveCurrent(lane.teamIndex, raiseProgressiveLevel(teamAt(lane.teamIndex).progressiveCurrent));
  }
  if(allActiveTeamsSolved()) {
    state.roundActive = false;
    state.roundEnded = true;
    stopTimer();
  }

  saveState();
  if(isFirstSolve) playFileSound("correct", () => playGeneratedSuccess(true));
  else playFileSound("firstSolve", () => playGeneratedSuccess(false));
  setStatus(`${state.teams[lane.teamIndex].name} solved for ${points} points`);
  render();
  finishGameIfRoundLimitReached();
}

function markIncorrect(laneIndex){
  if(state.gameOver) return;
  const lane = state.lanes[laneIndex];
  if(!lane || lane.solved || lane.incorrect || state.incorrectMode === "off") return;

  lane.incorrect = true;
  const hasPenalty = state.incorrectMode === "penalty";
  if(hasPenalty) state.teams[lane.teamIndex].score -= 3;
  if(isProgressiveTeam(lane.teamIndex)){
    setProgressiveCurrent(lane.teamIndex, lowerProgressiveLevel(teamAt(lane.teamIndex).progressiveCurrent));
  }

  saveState();
  setStatus(`${state.teams[lane.teamIndex].name}: Incorrect${hasPenalty ? " (-3)" : " (no points)"}`);
  render();
}

function toggleSolution(laneIndex){
  const lane = state.lanes[laneIndex];
  if(!lane) return;
  lane.solutionVisible = !lane.solutionVisible;
  saveState();
  renderLanes();
}

function replacePuzzle(laneIndex){
  const lane = state.lanes[laneIndex];
  if(!lane) return;
  if(lane.solved) return;
  const replacement = createLane(lane.teamIndex);
  state.lanes[laneIndex] = replacement;
  saveState();
  setStatus(`New puzzle for ${state.teams[lane.teamIndex].name}`);
  renderLanes();
}

function resetScores(){
  activeTeamIndexes().forEach((teamIndex) => {
    state.teams[teamIndex].score = 0;
  });
  saveState();
  setStatus("Scores reset");
  renderScores();
}

function resetGame(){
  stopTimer();
  timerBeepsPlayed.clear();
  lastRoundEndSoundKey = "";
  victoryDismissed = false;
  state.teams.forEach((team) => {
    team.score = 0;
  });
  state.gameStarted = false;
  state.remainingSeconds = state.defaultSeconds;
  state.roundNumber = 0;
  state.roundActive = false;
  state.roundEnded = false;
  state.gameOver = false;
  state.firstSolvedTeam = null;
  state.lanes = [];
  resetProgressiveLevels();
  saveState();
  closeSettings();
  setStatus("Game reset");
  render();
}

function renderSettings(){
  els.teamCount.value = String(state.teamCount);
  els.defaultTime.value = String(state.defaultSeconds);
  els.roundLimit.value = String(state.roundLimit);
  els.difficultyMode.value = state.difficultyMode;
  els.showDifficultyLabels.value = state.showDifficultyLabels ? "on" : "off";
  els.incorrectMode.value = state.incorrectMode;
  els.soundEffects.value = state.soundEffects ? "on" : "off";
  els.randomSound.value = state.randomSound ? "on" : "off";
  els.rewardSounds.value = state.rewardSounds ? "on" : "off";
  els.timerSounds.value = state.timerSounds;
  els.backgroundMusic.value = state.backgroundMusic ? "on" : "off";
  els.effectsVolume.value = String(state.effectsVolume);
  els.effectsVolumeValue.textContent = String(state.effectsVolume);
  els.musicVolume.value = String(state.musicVolume);
  els.musicVolumeValue.textContent = String(state.musicVolume);
  els.soundSettingsBody.hidden = !soundSettingsExpanded;
  els.soundSettingsToggle.setAttribute("aria-expanded", String(soundSettingsExpanded));
  els.teamSettings.innerHTML = "";

  activeTeamIndexes().forEach((teamIndex) => {
    const team = teamAt(teamIndex);
    const row = document.createElement("div");
    const teamUsesProgressive = isProgressiveTeam(teamIndex);
    row.className = "teamSettingRow" + (state.difficultyMode === "per-team" || teamUsesProgressive ? " hasDifficulty" : "");

    const label = document.createElement("label");
    label.textContent = `Team ${teamIndex + 1}`;
    label.setAttribute("for", `teamName${teamIndex}`);

    const nameInput = document.createElement("input");
    nameInput.id = `teamName${teamIndex}`;
    nameInput.type = "text";
    nameInput.value = team.name;
    nameInput.addEventListener("input", () => {
      team.name = nameInput.value.trim() || `Team ${teamIndex + 1}`;
      saveState();
      renderScores();
      renderLanes();
    });

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = team.color;
    colorInput.title = `Team ${teamIndex + 1} color`;
    colorInput.addEventListener("input", () => {
      team.color = colorInput.value;
      saveState();
      renderScores();
      renderLanes();
    });

    row.append(label, nameInput, colorInput);

    if(state.difficultyMode === "per-team"){
      const difficultyWrap = document.createElement("div");
      difficultyWrap.className = "teamDifficulty";
      const difficultyFieldLabel = document.createElement("label");
      difficultyFieldLabel.textContent = `Team ${teamIndex + 1} Difficulty`;
      difficultyFieldLabel.setAttribute("for", `teamDifficulty${teamIndex}`);
      const difficultySelect = document.createElement("select");
      difficultySelect.id = `teamDifficulty${teamIndex}`;
      [
        ["starter", "Starter"],
        ["easy", "Easy"],
        ["medium", "Medium"],
        ["hard", "Hard"],
        ["mixed", "Random Mixed"],
        ["progressive", "Progressive"]
      ].forEach(([value, text]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        difficultySelect.appendChild(option);
      });
      difficultySelect.value = team.difficulty;
      difficultySelect.addEventListener("change", () => {
        team.difficulty = normalizeDifficulty(difficultySelect.value);
        if(team.difficulty === "progressive" && (!state.gameStarted || !PROGRESSIVE_LEVELS.includes(team.progressiveCurrent))){
          setProgressiveCurrent(teamIndex, team.progressiveStart);
        }
        if(state.gameStarted) prepareRound({ forceNew:true });
        saveState();
        render();
      });
      difficultyWrap.append(difficultyFieldLabel, difficultySelect);
      row.appendChild(difficultyWrap);
    }

    if(teamUsesProgressive){
      const startWrap = document.createElement("div");
      startWrap.className = "teamDifficulty";
      const startLabel = document.createElement("label");
      startLabel.textContent = `Team ${teamIndex + 1} Progressive Start`;
      startLabel.setAttribute("for", `teamProgressiveStart${teamIndex}`);
      const startSelect = document.createElement("select");
      startSelect.id = `teamProgressiveStart${teamIndex}`;
      PROGRESSIVE_LEVELS.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = difficultyLabel(value);
        startSelect.appendChild(option);
      });
      startSelect.value = team.progressiveStart;
      startSelect.addEventListener("change", () => {
        team.progressiveStart = normalizeProgressiveLevel(startSelect.value);
        if(!state.gameStarted) setProgressiveCurrent(teamIndex, team.progressiveStart);
        else state.progressiveSettingsDirty = true;
        saveState();
      });
      startWrap.append(startLabel, startSelect);
      row.appendChild(startWrap);
    }

    els.teamSettings.appendChild(row);
  });
}

function renderScores(){
  els.scoreBody.innerHTML = "";

  activeTeamIndexes().forEach((teamIndex) => {
    const team = teamAt(teamIndex);
    const wrap = document.createElement("div");
    wrap.className = "team" + (teamIndex === state.selectedTeam && !randomPickerRunning ? " selected" : "") + (teamIndex === randomPickerHighlightIndex ? " is-picking" : "");
    wrap.style.setProperty("--team-accent", team.color);
    wrap.addEventListener("click", (event) => {
      if(event.target.closest("button")) return;
      setSelectedTeam(teamIndex);
    });

    const top = document.createElement("div");
    top.className = "teamTop";

    const nameButton = document.createElement("button");
    nameButton.className = "teamName";
    nameButton.type = "button";
    nameButton.textContent = team.name;
    nameButton.addEventListener("click", () => setSelectedTeam(teamIndex));

    const scoreButtons = document.createElement("div");
    scoreButtons.className = "scoreDeltaBtns";

    const minusButton = document.createElement("button");
    minusButton.className = "btn ghost mini";
    minusButton.type = "button";
    minusButton.textContent = "-1";
    minusButton.addEventListener("click", () => awardTeam(teamIndex, -1));

    const plusButton = document.createElement("button");
    plusButton.className = "btn mini";
    plusButton.type = "button";
    plusButton.textContent = "+1";
    plusButton.addEventListener("click", () => awardTeam(teamIndex, 1));

    scoreButtons.append(minusButton, plusButton);
    top.append(nameButton, scoreButtons);

    const score = document.createElement("div");
    score.className = "score";
    score.textContent = team.score;

    wrap.append(top, score);
    els.scoreBody.appendChild(wrap);
  });
}

function renderRoundControls(){
  els.startRoundBtn.disabled = !state.gameStarted || state.roundActive || state.gameOver;
  els.endRoundBtn.disabled = !state.gameStarted || !state.roundActive || state.gameOver;
  els.nextRoundBtn.disabled = !state.gameStarted || state.gameOver;
  els.revealAllBtn.disabled = !state.gameStarted;
  els.resetRoundBtn.disabled = !state.gameStarted || state.gameOver;
  els.timerStartPauseBtn.disabled = !state.gameStarted || state.gameOver;
}

function renderVictory(){
  if(!els.victoryOverlay) return;
  const shouldShow = state.gameOver && !victoryDismissed;
  els.victoryOverlay.hidden = !shouldShow;
  if(!shouldShow) return;

  const winners = winningTeamIndexes();
  const winnerNames = winners.map((teamIndex) => teamAt(teamIndex).name);
  const winnerScore = winners.length ? teamAt(winners[0]).score : 0;
  const tied = winners.length > 1;

  els.victoryKicker.textContent = `After ${state.roundLimit} ${state.roundLimit === 1 ? "round" : "rounds"}`;
  els.victoryTitle.textContent = tied ? "Tie Victory!" : `${winnerNames[0]} Won!`;
  els.victoryMessage.textContent = tied ? "They won in victory!" : `${winnerNames[0]} won in victory!`;
  els.victoryWinnerList.innerHTML = "";

  winners.forEach((teamIndex) => {
    const team = teamAt(teamIndex);
    const winner = document.createElement("div");
    winner.className = "victoryWinner";
    winner.style.setProperty("--winner-color", team.color);

    const swatch = document.createElement("span");
    swatch.className = "victorySwatch";
    swatch.setAttribute("aria-hidden", "true");

    const name = document.createElement("span");
    name.textContent = team.name;

    const color = document.createElement("span");
    color.className = "victoryColorText";
    color.textContent = team.color.toUpperCase();

    winner.append(swatch, name, color);
    els.victoryWinnerList.appendChild(winner);
  });

  els.victoryScores.innerHTML = "";
  activeTeamIndexes()
    .slice()
    .sort((a, b) => teamAt(b).score - teamAt(a).score)
    .forEach((teamIndex) => {
      const team = teamAt(teamIndex);
      const score = document.createElement("div");
      score.className = "victoryScore";
      score.style.setProperty("--winner-color", team.color);
      if(team.score === winnerScore) score.classList.add("is-winner");
      const name = document.createElement("span");
      name.textContent = team.name;
      const points = document.createElement("strong");
      points.textContent = team.score;
      score.append(name, points);
      els.victoryScores.appendChild(score);
    });
}

function renderLanes(){
  els.puzzleLanes.style.setProperty("--team-count", String(state.teamCount));
  els.puzzleLanes.innerHTML = "";

  if(!state.gameStarted){
    els.laneIndicator.textContent = "Instructions";
    return;
  }

  prepareRound();
  els.laneIndicator.textContent = `Round ${state.roundNumber || 1}/${state.roundLimit} · ${state.teamCount} ${state.teamCount === 1 ? "Team" : "Teams"}`;

  state.lanes.forEach((lane, laneIndex) => {
    const team = teamAt(lane.teamIndex);
    const puzzle = PUZZLES[lane.puzzleIndex];

    const card = document.createElement("article");
    card.className = "puzzleCard" + (lane.solutionVisible ? " show-solution" : "") + (lane.solved ? " is-solved" : "") + (lane.incorrect ? " is-incorrect" : "");
    card.style.setProperty("--lane-color", team.color);

    const top = document.createElement("div");
    top.className = "puzzleTop";

    const titleWrap = document.createElement("div");
    const title = document.createElement("div");
    title.className = "laneName";
    title.textContent = team.name;
    const meta = document.createElement("div");
    meta.className = "laneMeta";
    meta.textContent = lane.solved ? `Solved · +${lane.pointsEarned}` : lane.incorrect ? "Incorrect" : "Working";
    titleWrap.append(title, meta);
    top.appendChild(titleWrap);

    if(state.showDifficultyLabels){
      const difficulty = document.createElement("div");
      difficulty.className = "difficulty";
      difficulty.textContent = difficultyLabel(puzzle.difficulty);
      top.appendChild(difficulty);
    }

    const tiles = document.createElement("div");
    tiles.className = "numberTiles";
    puzzle.numbers.forEach((number) => {
      const tile = document.createElement("div");
      tile.className = "numberTile";
      tile.textContent = number;
      tiles.appendChild(tile);
    });

    const solution = document.createElement("div");
    solution.className = "solutionBox";
    solution.textContent = puzzle.solution;

    const actions = document.createElement("div");
    actions.className = "puzzleActions" + (state.incorrectMode !== "off" ? " hasIncorrect" : "");

    const correctButton = document.createElement("button");
    correctButton.className = "btn good";
    correctButton.type = "button";
    correctButton.textContent = lane.solved ? "Solved" : "Correct";
    correctButton.disabled = lane.solved || lane.incorrect;
    correctButton.addEventListener("click", () => markCorrect(laneIndex));

    const solutionButton = document.createElement("button");
    solutionButton.className = "btn ghost";
    solutionButton.type = "button";
    solutionButton.textContent = lane.solutionVisible ? "Hide Solution" : "Show Solution";
    solutionButton.addEventListener("click", () => toggleSolution(laneIndex));

    const newPuzzleButton = document.createElement("button");
    newPuzzleButton.className = "btn";
    newPuzzleButton.type = "button";
    newPuzzleButton.textContent = "Replace Puzzle";
    newPuzzleButton.disabled = lane.solved;
    newPuzzleButton.addEventListener("click", () => replacePuzzle(laneIndex));

    actions.append(correctButton, solutionButton, newPuzzleButton);

    if(state.incorrectMode !== "off"){
      const incorrectButton = document.createElement("button");
      incorrectButton.className = "btn ghost incorrectBtn";
      incorrectButton.type = "button";
      incorrectButton.textContent = "Incorrect";
      incorrectButton.disabled = lane.solved || lane.incorrect;
      incorrectButton.addEventListener("click", () => markIncorrect(laneIndex));
      actions.appendChild(incorrectButton);
    }

    card.append(top, tiles, solution, actions);
    els.puzzleLanes.appendChild(card);
  });
}

function renderStartScreen(){
  els.startScreen.hidden = state.gameStarted;
  els.appRoot.classList.toggle("showingStart", !state.gameStarted);
}

function render(){
  state.teamCount = clamp(state.teamCount, 1, MAX_TEAMS);
  state.selectedTeam = clamp(state.selectedTeam, 0, state.teamCount - 1);
  renderStartScreen();
  renderSettings();
  renderScores();
  renderLanes();
  renderRoundControls();
  renderVictory();
  updateTimerUi();
}

function openSettings(){
  els.appRoot.dataset.settingsOpen = "true";
  els.settingsBackdrop.hidden = false;
  els.settingsToggleBtn.setAttribute("aria-expanded", "true");
}

function closeSettings(){
  els.appRoot.dataset.settingsOpen = "false";
  els.settingsBackdrop.hidden = true;
  els.settingsToggleBtn.setAttribute("aria-expanded", "false");
}

function toggleSettings(){
  if(els.appRoot.dataset.settingsOpen === "true") closeSettings();
  else openSettings();
}

function toggleFullscreen(){
  if(document.fullscreenElement){
    document.exitFullscreen?.();
  }else{
    els.appRoot.requestFullscreen?.();
  }
}

function updateFullscreenButtons(){
  const label = document.fullscreenElement ? "Exit Fullscreen" : "Fullscreen";
  els.fullscreenBtn.textContent = label;
  els.settingsFullscreenBtn.textContent = label;
}

function runRandomTeamPicker(){
  if(randomPickerRunning) return;

  getAudioContext();
  const eligible = activeTeamIndexes();
  const finalIndex = eligible[Math.floor(Math.random() * eligible.length)];

  if(eligible.length === 1){
    setSelectedTeam(finalIndex);
    playSelectorLanding();
    setStatus(`Random team: ${state.teams[finalIndex].name}`);
    return;
  }

  randomPickerRunning = true;
  els.randomTeamBtn.disabled = true;
  els.randomTeamBtn.textContent = "Picking...";

  let step = 0;
  const startedAt = performance.now();
  const tick = () => {
    const progress = clamp((performance.now() - startedAt) / 2200, 0, 1);
    randomPickerHighlightIndex = eligible[step % eligible.length];
    renderScores();
    playSelectorTick(progress);
    step += 1;

    if(progress >= 1){
      randomPickerRunning = false;
      randomPickerHighlightIndex = null;
      els.randomTeamBtn.disabled = false;
      els.randomTeamBtn.textContent = "Random Team";
      setSelectedTeam(finalIndex);
      playSelectorLanding();
      setStatus(`Random team: ${state.teams[finalIndex].name}`);
      return;
    }

    window.setTimeout(tick, 45 + progress * 150);
  };

  tick();
}

function setScoresCollapsed(collapsed){
  els.scorePanel.classList.toggle("is-collapsed", collapsed);
  els.scoreToggleBtn.textContent = collapsed ? "▼" : "▲";
  els.scoreToggleBtn.setAttribute("aria-expanded", String(!collapsed));
}

els.startGameBtn.addEventListener("click", startGame);
els.settingsToggleBtn.addEventListener("click", toggleSettings);
els.settingsCloseBtn.addEventListener("click", closeSettings);
els.settingsBackdrop.addEventListener("click", closeSettings);
els.backToInstructionsBtn.addEventListener("click", goToInstructions);

els.teamCount.addEventListener("change", () => {
  state.teamCount = clamp(parseInt(els.teamCount.value, 10) || 3, 1, MAX_TEAMS);
  state.selectedTeam = clamp(state.selectedTeam, 0, state.teamCount - 1);
  if(state.gameStarted) prepareRound({ forceNew:true });
  saveState();
  render();
});

els.defaultTime.addEventListener("change", () => {
  state.defaultSeconds = clamp(parseInt(els.defaultTime.value, 10) || 120, 10, 600);
  resetTimer();
});

els.roundLimit.addEventListener("change", () => {
  state.roundLimit = clamp(parseInt(els.roundLimit.value, 10) || DEFAULT_ROUND_LIMIT, MIN_ROUND_LIMIT, MAX_ROUND_LIMIT);
  saveState();
  renderSettings();
  finishGameIfRoundLimitReached();
});

els.difficultyMode.addEventListener("change", () => {
  state.difficultyMode = els.difficultyMode.value;
  if(state.difficultyMode === "progressive" && !state.gameStarted) resetProgressiveLevels();
  else if(state.difficultyMode === "progressive") state.progressiveSettingsDirty = true;
  if(state.gameStarted) prepareRound({ forceNew:true });
  saveState();
  render();
});

els.showDifficultyLabels.addEventListener("change", () => {
  state.showDifficultyLabels = els.showDifficultyLabels.value === "on";
  saveState();
  renderLanes();
});

els.incorrectMode.addEventListener("change", () => {
  state.incorrectMode = els.incorrectMode.value;
  saveState();
  renderLanes();
});

els.soundSettingsToggle.addEventListener("click", () => {
  soundSettingsExpanded = !soundSettingsExpanded;
  renderSettings();
});

els.soundEffects.addEventListener("change", () => {
  state.soundEffects = els.soundEffects.value === "on";
  saveState();
});

els.randomSound.addEventListener("change", () => {
  state.randomSound = els.randomSound.value === "on";
  saveState();
});

els.rewardSounds.addEventListener("change", () => {
  state.rewardSounds = els.rewardSounds.value === "on";
  saveState();
});

els.timerSounds.addEventListener("change", () => {
  state.timerSounds = els.timerSounds.value;
  timerBeepsPlayed.clear();
  saveState();
});

els.backgroundMusic.addEventListener("change", () => {
  audioUnlocked = true;
  state.backgroundMusic = els.backgroundMusic.value === "on";
  saveState();
  syncBackgroundMusic(true);
});

els.effectsVolume.addEventListener("input", () => {
  state.effectsVolume = clamp(parseInt(els.effectsVolume.value, 10) || 0, 0, 100);
  els.effectsVolumeValue.textContent = String(state.effectsVolume);
  saveState();
});

els.musicVolume.addEventListener("input", () => {
  state.musicVolume = clamp(parseInt(els.musicVolume.value, 10) || 0, 0, 100);
  els.musicVolumeValue.textContent = String(state.musicVolume);
  if(fileSounds.background) fileSounds.background.volume = musicGain();
  saveState();
});

els.newPuzzlesBtn.addEventListener("click", resetRound);
els.startRoundBtn.addEventListener("click", startRound);
els.endRoundBtn.addEventListener("click", () => endRound("Timer stopped"));
els.nextRoundBtn.addEventListener("click", nextRound);
els.revealAllBtn.addEventListener("click", revealAllSolutions);
els.resetRoundBtn.addEventListener("click", resetRound);
els.resetScoresBtn.addEventListener("click", resetScores);
els.settingsResetScoresBtn.addEventListener("click", resetScores);
els.resetGameBtn.addEventListener("click", resetGame);
els.settingsResetGameBtn.addEventListener("click", resetGame);
els.fullscreenBtn.addEventListener("click", toggleFullscreen);
els.settingsFullscreenBtn.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenButtons);

els.timerStartPauseBtn.addEventListener("click", () => {
  if(state.gameOver) return;
  if(timerId) stopTimer();
  else {
    state.roundActive = true;
    state.roundEnded = false;
    saveState();
    startTimer();
  }
});
els.timerResetBtn.addEventListener("click", resetTimer);
els.timerMinusBtn.addEventListener("click", () => adjustTimer(-10));
els.timerPlusBtn.addEventListener("click", () => adjustTimer(10));
els.randomTeamBtn.addEventListener("click", runRandomTeamPicker);
els.victoryNewGameBtn.addEventListener("click", resetGame);
els.victoryCloseBtn.addEventListener("click", () => {
  victoryDismissed = true;
  renderVictory();
});

els.scoreToggleBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  setScoresCollapsed(!els.scorePanel.classList.contains("is-collapsed"));
});

els.scoreHeaderBar.addEventListener("click", () => {
  if(window.matchMedia("(max-width: 768px)").matches){
    setScoresCollapsed(!els.scorePanel.classList.contains("is-collapsed"));
  }
});

document.addEventListener("keydown", (event) => {
  if(event.key === "Escape" && state.gameOver){
    victoryDismissed = true;
    renderVictory();
    return;
  }
  if(event.key === "Escape") closeSettings();
});

window.addEventListener("pointerdown", unlockAudio, { once:true });
window.addEventListener("keydown", unlockAudio, { once:true });

if(state.gameStarted) prepareRound();
saveState();
render();
