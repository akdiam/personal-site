var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Wpm
});
var import_index_4ef0e261 = __toModule(require("../../../chunks/index-4ef0e261.js"));
const stringToArrays = (fullText) => {
  let metaWordArray = [];
  let wordArray = fullText.split(" ");
  let i = 0;
  for (const word of wordArray) {
    const chars = word.split("");
    let charArray = [];
    for (const char of chars) {
      let charData = {
        char,
        status: "unfinished"
      };
      charArray.push(charData);
    }
    if (i !== wordArray.length - 1) {
      charArray.push({ char: " ", status: "unfinished" });
    }
    metaWordArray.push(charArray);
    i++;
  }
  return metaWordArray;
};
var WpmText_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.word.svelte-j6c4cm{margin:0.27rem;border-bottom:2px solid transparent;line-height:2rem}.char.svelte-j6c4cm{border-bottom-style:solid;border-bottom-width:0.05em;border-bottom-color:transparent;display:inline-block}span.svelte-j6c4cm{font-size:30px}.correct.svelte-j6c4cm{color:var(--correct)}.incorrect.svelte-j6c4cm{color:var(--incorrect)}.unfinished.svelte-j6c4cm{color:var(--unfinished)}.blink-before.svelte-j6c4cm::before{content:"";width:3px;height:35px;background:#ffffff;position:absolute;border-radius:5px;animation:svelte-j6c4cm-cursor-blink 1s steps(2) infinite}@keyframes svelte-j6c4cm-cursor-blink{0%{opacity:0.5}}',
  map: null
};
const WpmText = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  let { currentWordIndex } = $$props;
  let { currentCharIndex } = $$props;
  let { allTextArray } = $$props;
  if ($$props.currentWordIndex === void 0 && $$bindings.currentWordIndex && currentWordIndex !== void 0)
    $$bindings.currentWordIndex(currentWordIndex);
  if ($$props.currentCharIndex === void 0 && $$bindings.currentCharIndex && currentCharIndex !== void 0)
    $$bindings.currentCharIndex(currentCharIndex);
  if ($$props.allTextArray === void 0 && $$bindings.allTextArray && allTextArray !== void 0)
    $$bindings.allTextArray(allTextArray);
  $$result.css.add(css$3);
  return `${(0, import_index_4ef0e261.f)(allTextArray, (word, i) => {
    return `<div class="${"word svelte-j6c4cm"}">${(0, import_index_4ef0e261.f)(word, (charObj, j) => {
      return `${i === currentWordIndex && j === currentCharIndex && charObj.char !== " " ? `${charObj.status === "correct" ? `<span class="${"char correct blink-before svelte-j6c4cm"}">${(0, import_index_4ef0e261.e)(charObj.char)}</span>` : `${charObj.status === "incorrect" ? `<span class="${"char incorrect blink-before svelte-j6c4cm"}">${(0, import_index_4ef0e261.e)(charObj.char)}</span>` : `${charObj.status === "unfinished" ? `<span class="${"char unfinished blink-before svelte-j6c4cm"}">${(0, import_index_4ef0e261.e)(charObj.char)}</span>` : ``}`}`}` : `${charObj.status === "correct" ? `<span class="${"char correct svelte-j6c4cm"}">${(0, import_index_4ef0e261.e)(charObj.char)}</span>` : `${charObj.status === "incorrect" ? `<span class="${"char incorrect svelte-j6c4cm"}">${(0, import_index_4ef0e261.e)(charObj.char)}</span>` : `${charObj.status === "unfinished" ? `<span class="${"char unfinished svelte-j6c4cm"}">${(0, import_index_4ef0e261.e)(charObj.char)}</span>` : ``}`}`}`}`;
    })}
    </div>`;
  })}`;
});
const ElapsedTime = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  let { elapsedTime } = $$props;
  let minutes = "";
  let seconds = "";
  if ($$props.elapsedTime === void 0 && $$bindings.elapsedTime && elapsedTime !== void 0)
    $$bindings.elapsedTime(elapsedTime);
  {
    {
      const elapsedTimeInSeconds = elapsedTime / 1e3;
      let minutesNum = Math.floor(elapsedTimeInSeconds / 60);
      let secondsNum = Math.floor(elapsedTimeInSeconds % 60);
      minutes = "";
      seconds = "";
      minutes += minutesNum;
      if (secondsNum < 10) {
        seconds = "0" + secondsNum;
      } else {
        seconds += secondsNum;
      }
    }
  }
  return `<span class="${"timer"}">${(0, import_index_4ef0e261.e)(minutes)}:${(0, import_index_4ef0e261.e)(seconds)}</span>`;
});
var StatBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".stats.svelte-1qmvysy{font-size:25px;color:var(--wpm-text);width:auto;background-color:var(--card);border-radius:var(--border-radius);margin:20px;padding:15px;display:flex;z-index:0}.wpm.svelte-1qmvysy{width:95%;text-align:start;position:relative;line-height:30px;display:flex;flex-direction:row}.net.svelte-1qmvysy,.gross.svelte-1qmvysy{width:130px;margin-right:20px;background-color:var(--card-secondary);padding:7px;border-radius:var(--border-radius);position:relative;display:block;text-align:center;font-size:40px}.title.svelte-1qmvysy{font-size:small;color:var(--color-secondary)}.time.svelte-1qmvysy{align-self:flex-end;display:flex;flex-direction:row\n    }.refresh-container.svelte-1qmvysy{height:70px;width:70px;display:flex;align-items:center;justify-content:center;padding:10px;background-color:var(--card-secondary);border-radius:50%}.refresh.svelte-1qmvysy{height:50px;width:50px;padding:20px;transition:ease-in 100ms}.refresh.svelte-1qmvysy:hover{height:55px;width:55px;transition:ease-in 100ms;cursor:pointer}.elapsed-time.svelte-1qmvysy{background-color:var(--card-secondary);padding:20px;line-height:45px;min-width:100px;border-radius:10px;margin-left:20px;font-size:30px}@media screen and (max-width: 950px){.gross.svelte-1qmvysy{display:none}.elapsed-time.svelte-1qmvysy{display:none}}",
  map: null
};
const StatBar = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  let { netWpm } = $$props;
  let { grossWpm } = $$props;
  let { totalTime } = $$props;
  let { isRaceOngoing } = $$props;
  let { restartTest } = $$props;
  if ($$props.netWpm === void 0 && $$bindings.netWpm && netWpm !== void 0)
    $$bindings.netWpm(netWpm);
  if ($$props.grossWpm === void 0 && $$bindings.grossWpm && grossWpm !== void 0)
    $$bindings.grossWpm(grossWpm);
  if ($$props.totalTime === void 0 && $$bindings.totalTime && totalTime !== void 0)
    $$bindings.totalTime(totalTime);
  if ($$props.isRaceOngoing === void 0 && $$bindings.isRaceOngoing && isRaceOngoing !== void 0)
    $$bindings.isRaceOngoing(isRaceOngoing);
  if ($$props.restartTest === void 0 && $$bindings.restartTest && restartTest !== void 0)
    $$bindings.restartTest(restartTest);
  $$result.css.add(css$2);
  return `<div class="${"stats svelte-1qmvysy"}"><span class="${"wpm svelte-1qmvysy"}"><div class="${"net svelte-1qmvysy"}"><div class="${"title svelte-1qmvysy"}">Net WPM
            </div>
            ${(0, import_index_4ef0e261.e)(netWpm)}</div>
        <div class="${"gross svelte-1qmvysy"}"><div class="${"title svelte-1qmvysy"}">Gross WPM
            </div>
            ${(0, import_index_4ef0e261.e)(grossWpm)}</div></span>
    <span class="${"time svelte-1qmvysy"}"><div class="${"refresh-container svelte-1qmvysy"}"><img class="${"refresh svelte-1qmvysy"}" src="${"svg/refresh.svg"}" alt="${"refresh"}"></div>
        <div class="${"elapsed-time svelte-1qmvysy"}">${(0, import_index_4ef0e261.v)(ElapsedTime, "ElapsedTime").$$render($$result, { elapsedTime: totalTime }, {}, {})}</div></span>
</div>`;
});
var Results_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".result-container.svelte-tqr9np{width:auto;background-color:var(--card);border-radius:var(--border-radius);display:flex;color:var(--wpm-text)\n    }.data-container.svelte-tqr9np{width:80%;text-align:center;position:relative;display:flex;flex-direction:row;justify-content:space-evenly;padding-right:50px;flex-wrap:wrap}.rhs.svelte-tqr9np{align-items:center;justify-content:flex-end;display:flex;flex-direction:row;padding:40px}.refresh-container.svelte-tqr9np{height:90px;width:90px;display:flex;align-items:center;justify-content:center;padding:10px;background-color:var(--card-secondary);border-radius:50%}.refresh.svelte-tqr9np{height:70px;width:70px;padding:20px;transition:ease-in 100ms}.refresh.svelte-tqr9np:hover{height:75px;width:75px;transition:ease-in 100ms;cursor:pointer}@media screen and (max-width: 500px){.data-container.svelte-tqr9np{padding-right:20px}.refresh-container.svelte-tqr9np{height:30px;width:30px;padding:10px}.refresh.svelte-tqr9np{height:30px;width:30px}.refresh.svelte-tqr9np:hover{height:33px;width:33px}}.result.svelte-tqr9np{padding:20px}.result-title.svelte-tqr9np{color:var(--color-secondary)\n    }.result-data.svelte-tqr9np{font-size:100px}",
  map: null
};
const Results = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  let { netWpm } = $$props;
  let { grossWpm } = $$props;
  let { accuracy } = $$props;
  let { totalTime } = $$props;
  let { restartTest } = $$props;
  if ($$props.netWpm === void 0 && $$bindings.netWpm && netWpm !== void 0)
    $$bindings.netWpm(netWpm);
  if ($$props.grossWpm === void 0 && $$bindings.grossWpm && grossWpm !== void 0)
    $$bindings.grossWpm(grossWpm);
  if ($$props.accuracy === void 0 && $$bindings.accuracy && accuracy !== void 0)
    $$bindings.accuracy(accuracy);
  if ($$props.totalTime === void 0 && $$bindings.totalTime && totalTime !== void 0)
    $$bindings.totalTime(totalTime);
  if ($$props.restartTest === void 0 && $$bindings.restartTest && restartTest !== void 0)
    $$bindings.restartTest(restartTest);
  $$result.css.add(css$1);
  return `<div class="${"result-container svelte-tqr9np"}"><div class="${"data-container svelte-tqr9np"}"><div class="${"result svelte-tqr9np"}"><div class="${"result-title svelte-tqr9np"}">Net WPM
            </div>
            <span class="${"result-data svelte-tqr9np"}">${(0, import_index_4ef0e261.e)(netWpm)}</span></div>
        <div class="${"result svelte-tqr9np"}"><div class="${"result-title svelte-tqr9np"}">Gross WPM
            </div>
            <span class="${"result-data svelte-tqr9np"}">${(0, import_index_4ef0e261.e)(grossWpm)}</span></div>
        <div class="${"result svelte-tqr9np"}"><div class="${"result-title svelte-tqr9np"}">Accuracy
            </div>
            <span class="${"result-data svelte-tqr9np"}">${(0, import_index_4ef0e261.e)(accuracy)}%</span></div>
        <div class="${"result svelte-tqr9np"}"><div class="${"result-title svelte-tqr9np"}">Time Spent
            </div>
            <span class="${"result-data svelte-tqr9np"}">${(0, import_index_4ef0e261.v)(ElapsedTime, "ElapsedTime").$$render($$result, { elapsedTime: totalTime }, {}, {})}</span></div></div>
    <div class="${"rhs svelte-tqr9np"}"><div class="${"refresh-container svelte-tqr9np"}"><img class="${"refresh svelte-tqr9np"}" src="${"svg/refresh.svg"}" alt="${"refresh"}"></div></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-qs93s3.svelte-qs93s3{outline:0;height:100%;cursor:default;overflow-x:hidden;border-radius:var(--border-radius)}.blur.svelte-qs93s3.svelte-qs93s3{filter:blur(8px);padding:20px}.blur.svelte-qs93s3.svelte-qs93s3:focus{filter:none;outline:0}.blur.svelte-qs93s3:focus .racetext.svelte-qs93s3{border:2px solid var(--color-secondary)}.racetext.svelte-qs93s3.svelte-qs93s3{transition:filter 100ms linear ease-out;padding:20px;font-size:0;border-radius:var(--border-radius);display:flex;flex-wrap:wrap;align-content:flex-start;user-select:none;background-color:var(--card)}.racetext.svelte-qs93s3.svelte-qs93s3:focus{border:none}.racetext.svelte-qs93s3.svelte-qs93s3:hover{cursor:pointer}.helper-text.svelte-qs93s3.svelte-qs93s3{padding-top:20px;color:var(--text-primary)\n    }",
  map: null
};
const Wpm = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  const text = `To calculate Net WPM, take your gross WPM result and subtract the amount of errors you left in per minute, also known as the error rate. To calculate error rate, simply divide the number of errors by the time you typed for in minutes.`;
  const unfinishedTextRaw = text;
  let isRaceOngoing = false;
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let allTextArray = stringToArrays(unfinishedTextRaw);
  let wpmInterval;
  let grossWpm = 0;
  let netWpm = 0;
  let accuracy = 0;
  let totalTime = 0;
  let hasUserCompletedRace = false;
  const restartTest = () => {
    clearInterval(wpmInterval);
    grossWpm = 0;
    netWpm = 0;
    currentWordIndex = 0;
    currentCharIndex = 0;
    isRaceOngoing = false;
    hasUserCompletedRace = false;
    allTextArray = stringToArrays(unfinishedTextRaw);
    totalTime = 0;
  };
  $$result.css.add(css);
  return `<section class="${"svelte-qs93s3"}">${!hasUserCompletedRace ? `${(0, import_index_4ef0e261.v)(StatBar, "StatBar").$$render($$result, {
    netWpm,
    grossWpm,
    totalTime,
    isRaceOngoing,
    restartTest
  }, {}, {})}
        <div class="${"blur svelte-qs93s3"}" tabindex="${"0"}"><div class="${"racetext svelte-qs93s3"}" id="${"racetext"}">${(0, import_index_4ef0e261.v)(WpmText, "WpmText").$$render($$result, {
    currentWordIndex,
    currentCharIndex,
    allTextArray
  }, {}, {})}</div></div>
        <div class="${"helper-text svelte-qs93s3"}"><span><i>Click the above blurred text to focus. Once focused, begin typing to start the test.</i></span></div>` : `${(0, import_index_4ef0e261.v)(Results, "Results").$$render($$result, {
    netWpm,
    grossWpm,
    accuracy,
    totalTime,
    restartTest
  }, {}, {})}`}
</section>`;
});
