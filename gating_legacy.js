/********************** 
 * Gating_Legacy Test *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'gating_legacy';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstruccionesRoutineBegin());
flowScheduler.add(InstruccionesRoutineEachFrame());
flowScheduler.add(InstruccionesRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'primera_condicion/otros/07_Columpio_500.mp3', 'path': 'primera_condicion/otros/07_Columpio_500.mp3'},
    {'name': 'primera_condicion/otros/13_Barca_360.mp3', 'path': 'primera_condicion/otros/13_Barca_360.mp3'},
    {'name': 'primera_condicion/otros/12_Zorro_220.mp3', 'path': 'primera_condicion/otros/12_Zorro_220.mp3'},
    {'name': 'primera_condicion/otros/07_Columpio_250.mp3', 'path': 'primera_condicion/otros/07_Columpio_250.mp3'},
    {'name': 'primera_condicion/otros/09_Balanza_350.mp3', 'path': 'primera_condicion/otros/09_Balanza_350.mp3'},
    {'name': 'primera_condicion/otros/14_Granero_340.mp3', 'path': 'primera_condicion/otros/14_Granero_340.mp3'},
    {'name': 'primera_condicion/otros/12_Zorro_190.mp3', 'path': 'primera_condicion/otros/12_Zorro_190.mp3'},
    {'name': 'primera_condicion/otros/11_Taburete_200.mp3', 'path': 'primera_condicion/otros/11_Taburete_200.mp3'},
    {'name': 'primera_condicion/frutas/03_Limon_290.mp3', 'path': 'primera_condicion/frutas/03_Limon_290.mp3'},
    {'name': 'primera_condicion/otros/07_Columpio_300.mp3', 'path': 'primera_condicion/otros/07_Columpio_300.mp3'},
    {'name': 'primera_condicion/frutas/03_Limon_200.mp3', 'path': 'primera_condicion/frutas/03_Limon_200.mp3'},
    {'name': 'primera_condicion/otros/08_Mapache_250.mp3', 'path': 'primera_condicion/otros/08_Mapache_250.mp3'},
    {'name': 'primera_condicion/otros/08_Mapache_350.mp3', 'path': 'primera_condicion/otros/08_Mapache_350.mp3'},
    {'name': 'primera_condicion/otros/10_Podio_150.mp3', 'path': 'primera_condicion/otros/10_Podio_150.mp3'},
    {'name': 'primera_condicion/otros/06_Baston_300.mp3', 'path': 'primera_condicion/otros/06_Baston_300.mp3'},
    {'name': 'primera_condicion/otros/11_Taburete_300.mp3', 'path': 'primera_condicion/otros/11_Taburete_300.mp3'},
    {'name': 'primera_condicion/otros/11_Taburete_400.mp3', 'path': 'primera_condicion/otros/11_Taburete_400.mp3'},
    {'name': 'primera_condicion/otros/06_Baston_250.mp3', 'path': 'primera_condicion/otros/06_Baston_250.mp3'},
    {'name': 'primera_condicion/frutas/02_Naranj_420.mp3', 'path': 'primera_condicion/frutas/02_Naranj_420.mp3'},
    {'name': 'primera_condicion/otros/08_Mapache_400.mp3', 'path': 'primera_condicion/otros/08_Mapache_400.mp3'},
    {'name': 'primera_condicion.xlsx', 'path': 'primera_condicion.xlsx'},
    {'name': 'primera_condicion/otros/01_Cang_200.mp3', 'path': 'primera_condicion/otros/01_Cang_200.mp3'},
    {'name': 'primera_condicion/otros/06_Baston_400.mp3', 'path': 'primera_condicion/otros/06_Baston_400.mp3'},
    {'name': 'primera_condicion/otros/07_Columpio_400.mp3', 'path': 'primera_condicion/otros/07_Columpio_400.mp3'},
    {'name': 'primera_condicion/otros/09_Balanza_400.mp3', 'path': 'primera_condicion/otros/09_Balanza_400.mp3'},
    {'name': 'primera_condicion/otros/01_Cang_250.mp3', 'path': 'primera_condicion/otros/01_Cang_250.mp3'},
    {'name': 'primera_condicion/frutas/04_Pera_180.mp3', 'path': 'primera_condicion/frutas/04_Pera_180.mp3'},
    {'name': 'primera_condicion/otros/12_Zorro_160.mp3', 'path': 'primera_condicion/otros/12_Zorro_160.mp3'},
    {'name': 'primera_condicion/otros/05_Pato_180.mp3', 'path': 'primera_condicion/otros/05_Pato_180.mp3'},
    {'name': 'primera_condicion/otros/09_Balanza_460.mp3', 'path': 'primera_condicion/otros/09_Balanza_460.mp3'},
    {'name': 'primera_condicion/otros/06_Baston_350.mp3', 'path': 'primera_condicion/otros/06_Baston_350.mp3'},
    {'name': 'primera_condicion/otros/13_Barca_340.mp3', 'path': 'primera_condicion/otros/13_Barca_340.mp3'},
    {'name': 'primera_condicion/otros/05_Pato_140.mp3', 'path': 'primera_condicion/otros/05_Pato_140.mp3'},
    {'name': 'primera_condicion/frutas/04_Pera_140.mp3', 'path': 'primera_condicion/frutas/04_Pera_140.mp3'},
    {'name': 'primera_condicion/frutas/02_Naranj_200.mp3', 'path': 'primera_condicion/frutas/02_Naranj_200.mp3'},
    {'name': 'primera_condicion/otros/08_Mapache_440.mp3', 'path': 'primera_condicion/otros/08_Mapache_440.mp3'},
    {'name': 'primera_condicion/otros/14_Granero_250.mp3', 'path': 'primera_condicion/otros/14_Granero_250.mp3'},
    {'name': 'primera_condicion/otros/08_Mapache_300.mp3', 'path': 'primera_condicion/otros/08_Mapache_300.mp3'},
    {'name': 'primera_condicion/frutas/02_Naranj_350.mp3', 'path': 'primera_condicion/frutas/02_Naranj_350.mp3'},
    {'name': 'primera_condicion/frutas/02_Naranj_250.mp3', 'path': 'primera_condicion/frutas/02_Naranj_250.mp3'},
    {'name': 'primera_condicion/otros/13_Barca_300.mp3', 'path': 'primera_condicion/otros/13_Barca_300.mp3'},
    {'name': 'primera_condicion/otros/06_Baston_200.mp3', 'path': 'primera_condicion/otros/06_Baston_200.mp3'},
    {'name': 'primera_condicion/otros/10_Podio_180.mp3', 'path': 'primera_condicion/otros/10_Podio_180.mp3'},
    {'name': 'primera_condicion/otros/11_Taburete_440.mp3', 'path': 'primera_condicion/otros/11_Taburete_440.mp3'},
    {'name': 'primera_condicion/otros/11_Taburete_250.mp3', 'path': 'primera_condicion/otros/11_Taburete_250.mp3'},
    {'name': 'primera_condicion/otros/10_Podio_220.mp3', 'path': 'primera_condicion/otros/10_Podio_220.mp3'},
    {'name': 'primera_condicion/otros/14_Granero_300.mp3', 'path': 'primera_condicion/otros/14_Granero_300.mp3'},
    {'name': 'primera_condicion/otros/09_Balanza_300.mp3', 'path': 'primera_condicion/otros/09_Balanza_300.mp3'},
    {'name': 'primera_condicion/otros/14_Granero_360.mp3', 'path': 'primera_condicion/otros/14_Granero_360.mp3'},
    {'name': 'primera_condicion/otros/08_Mapache_200.mp3', 'path': 'primera_condicion/otros/08_Mapache_200.mp3'},
    {'name': 'primera_condicion/otros/14_Granero_200.mp3', 'path': 'primera_condicion/otros/14_Granero_200.mp3'},
    {'name': 'primera_condicion/otros/09_Balanza_250.mp3', 'path': 'primera_condicion/otros/09_Balanza_250.mp3'},
    {'name': 'primera_condicion/frutas/02_Naranj_300.mp3', 'path': 'primera_condicion/frutas/02_Naranj_300.mp3'},
    {'name': 'primera_condicion/otros/13_Barca_250.mp3', 'path': 'primera_condicion/otros/13_Barca_250.mp3'},
    {'name': 'primera_condicion/otros/07_Columpio_200.mp3', 'path': 'primera_condicion/otros/07_Columpio_200.mp3'},
    {'name': 'primera_condicion/otros/11_Taburete_350.mp3', 'path': 'primera_condicion/otros/11_Taburete_350.mp3'},
    {'name': 'primera_condicion/otros/01_Cang_320.mp3', 'path': 'primera_condicion/otros/01_Cang_320.mp3'},
    {'name': 'primera_condicion/otros/07_Columpio_350.mp3', 'path': 'primera_condicion/otros/07_Columpio_350.mp3'},
    {'name': 'primera_condicion/otros/07_Columpio_450.mp3', 'path': 'primera_condicion/otros/07_Columpio_450.mp3'},
    {'name': 'primera_condicion/frutas/03_Limon_250.mp3', 'path': 'primera_condicion/frutas/03_Limon_250.mp3'},
    {'name': 'primera_condicion/otros/13_Barca_200.mp3', 'path': 'primera_condicion/otros/13_Barca_200.mp3'},
    {'name': 'primera_condicion/otros/09_Balanza_200.mp3', 'path': 'primera_condicion/otros/09_Balanza_200.mp3'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var InstruccionesClock;
var text;
var primera_condicionClock;
var polygon;
var sound_1;
var key_resp;
var segunda_condicionClock;
var polygon_2;
var sound_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instrucciones"
  InstruccionesClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Escriba la palabra que crea que se está pronunciando',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "primera_condicion"
  primera_condicionClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_1.setVolume(1.0);
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "segunda_condicion"
  segunda_condicionClock = new util.Clock();
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_2 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_2.setVolume(1.0);
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var InstruccionesComponents;
function InstruccionesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instrucciones' ---
    t = 0;
    InstruccionesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    InstruccionesComponents = [];
    InstruccionesComponents.push(text);
    
    for (const thisComponent of InstruccionesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function InstruccionesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instrucciones' ---
    // get current time
    t = InstruccionesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstruccionesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstruccionesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instrucciones' ---
    for (const thisComponent of InstruccionesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'primera_condicion.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(primera_condicionRoutineBegin(snapshot));
      trialsLoopScheduler.add(primera_condicionRoutineEachFrame());
      trialsLoopScheduler.add(primera_condicionRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: id_sonidos,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(segunda_condicionRoutineBegin(snapshot));
      trials_2LoopScheduler.add(segunda_condicionRoutineEachFrame());
      trials_2LoopScheduler.add(segunda_condicionRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_allKeys;
var primera_condicionComponents;
function primera_condicionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'primera_condicion' ---
    t = 0;
    primera_condicionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: id_sonido,
    secs: -1,
    });
    sound_1.setVolume(1.0);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    primera_condicionComponents = [];
    primera_condicionComponents.push(polygon);
    primera_condicionComponents.push(sound_1);
    primera_condicionComponents.push(key_resp);
    
    for (const thisComponent of primera_condicionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function primera_condicionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'primera_condicion' ---
    // get current time
    t = primera_condicionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_1.getDuration() + sound_1.tStart)     && sound_1.status === PsychoJS.Status.STARTED) {
      sound_1.stop();  // stop the sound (if longer than duration)
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys.map((key) => key.name);  // storing all keys
        key_resp.rt = _key_resp_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of primera_condicionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function primera_condicionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'primera_condicion' ---
    for (const thisComponent of primera_condicionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_1.stop();  // ensure sound has stopped at end of routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "primera_condicion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var segunda_condicionComponents;
function segunda_condicionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'segunda_condicion' ---
    t = 0;
    segunda_condicionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_2 = new sound.Sound({
    win: psychoJS.window,
    value: id_sonidos,
    secs: -1,
    });
    sound_2.setVolume(1.0);
    // keep track of which components have finished
    segunda_condicionComponents = [];
    segunda_condicionComponents.push(polygon_2);
    segunda_condicionComponents.push(sound_2);
    
    for (const thisComponent of segunda_condicionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function segunda_condicionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'segunda_condicion' ---
    // get current time
    t = segunda_condicionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    // start/stop sound_2
    if (t >= 0.0 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_2.getDuration() + sound_2.tStart)     && sound_2.status === PsychoJS.Status.STARTED) {
      sound_2.stop();  // stop the sound (if longer than duration)
      sound_2.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of segunda_condicionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function segunda_condicionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'segunda_condicion' ---
    for (const thisComponent of segunda_condicionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_2.stop();  // ensure sound has stopped at end of routine
    // the Routine "segunda_condicion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
