var F = Object.defineProperty;
var v = (n) => {
  throw TypeError(n);
};
var L = (n, e, i) => e in n ? F(n, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[e] = i;
var S = (n, e, i) => L(n, typeof e != "symbol" ? e + "" : e, i), R = (n, e, i) => e.has(n) || v("Cannot " + i);
var a = (n, e, i) => (R(n, e, "read from private field"), i ? i.call(n) : e.get(n)), h = (n, e, i) => e.has(n) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, i), w = (n, e, i, o) => (R(n, e, "write to private field"), o ? o.call(n, i) : e.set(n, i), i);
const c = "https://huggingface.co/diffusionstudio/piper-voices/resolve/main", P = "https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.18.0/", B = "https://cdn.jsdelivr.net/npm/@diffusionstudio/piper-wasm@1.0.0/build/piper_phonemize", U = {
  "ar_JO-kareem-low": "ar/ar_JO/kareem/low/ar_JO-kareem-low.onnx",
  "ar_JO-kareem-medium": "ar/ar_JO/kareem/medium/ar_JO-kareem-medium.onnx",
  "ca_ES-upc_ona-medium": "ca/ca_ES/upc_ona/medium/ca_ES-upc_ona-medium.onnx",
  "ca_ES-upc_ona-x_low": "ca/ca_ES/upc_ona/x_low/ca_ES-upc_ona-x_low.onnx",
  "ca_ES-upc_pau-x_low": "ca/ca_ES/upc_pau/x_low/ca_ES-upc_pau-x_low.onnx",
  "cs_CZ-jirka-low": "cs/cs_CZ/jirka/low/cs_CZ-jirka-low.onnx",
  "cs_CZ-jirka-medium": "cs/cs_CZ/jirka/medium/cs_CZ-jirka-medium.onnx",
  "da_DK-talesyntese-medium": "da/da_DK/talesyntese/medium/da_DK-talesyntese-medium.onnx",
  "de_DE-eva_k-x_low": "de/de_DE/eva_k/x_low/de_DE-eva_k-x_low.onnx",
  "de_DE-karlsson-low": "de/de_DE/karlsson/low/de_DE-karlsson-low.onnx",
  "de_DE-kerstin-low": "de/de_DE/kerstin/low/de_DE-kerstin-low.onnx",
  "de_DE-mls-medium": "de/de_DE/mls/medium/de_DE-mls-medium.onnx",
  "de_DE-pavoque-low": "de/de_DE/pavoque/low/de_DE-pavoque-low.onnx",
  "de_DE-ramona-low": "de/de_DE/ramona/low/de_DE-ramona-low.onnx",
  "de_DE-thorsten-high": "de/de_DE/thorsten/high/de_DE-thorsten-high.onnx",
  "de_DE-thorsten-low": "de/de_DE/thorsten/low/de_DE-thorsten-low.onnx",
  "de_DE-thorsten-medium": "de/de_DE/thorsten/medium/de_DE-thorsten-medium.onnx",
  "de_DE-thorsten_emotional-medium": "de/de_DE/thorsten_emotional/medium/de_DE-thorsten_emotional-medium.onnx",
  "el_GR-rapunzelina-low": "el/el_GR/rapunzelina/low/el_GR-rapunzelina-low.onnx",
  "en_GB-alan-low": "en/en_GB/alan/low/en_GB-alan-low.onnx",
  "en_GB-alan-medium": "en/en_GB/alan/medium/en_GB-alan-medium.onnx",
  "en_GB-alba-medium": "en/en_GB/alba/medium/en_GB-alba-medium.onnx",
  "en_GB-aru-medium": "en/en_GB/aru/medium/en_GB-aru-medium.onnx",
  "en_GB-cori-high": "en/en_GB/cori/high/en_GB-cori-high.onnx",
  "en_GB-cori-medium": "en/en_GB/cori/medium/en_GB-cori-medium.onnx",
  "en_GB-jenny_dioco-medium": "en/en_GB/jenny_dioco/medium/en_GB-jenny_dioco-medium.onnx",
  "en_GB-northern_english_male-medium": "en/en_GB/northern_english_male/medium/en_GB-northern_english_male-medium.onnx",
  "en_GB-semaine-medium": "en/en_GB/semaine/medium/en_GB-semaine-medium.onnx",
  "en_GB-southern_english_female-low": "en/en_GB/southern_english_female/low/en_GB-southern_english_female-low.onnx",
  "en_GB-vctk-medium": "en/en_GB/vctk/medium/en_GB-vctk-medium.onnx",
  "en_US-amy-low": "en/en_US/amy/low/en_US-amy-low.onnx",
  "en_US-amy-medium": "en/en_US/amy/medium/en_US-amy-medium.onnx",
  "en_US-arctic-medium": "en/en_US/arctic/medium/en_US-arctic-medium.onnx",
  "en_US-danny-low": "en/en_US/danny/low/en_US-danny-low.onnx",
  "en_US-hfc_female-medium": "en/en_US/hfc_female/medium/en_US-hfc_female-medium.onnx",
  "en_US-hfc_male-medium": "en/en_US/hfc_male/medium/en_US-hfc_male-medium.onnx",
  "en_US-joe-medium": "en/en_US/joe/medium/en_US-joe-medium.onnx",
  "en_US-kathleen-low": "en/en_US/kathleen/low/en_US-kathleen-low.onnx",
  "en_US-kristin-medium": "en/en_US/kristin/medium/en_US-kristin-medium.onnx",
  "en_US-kusal-medium": "en/en_US/kusal/medium/en_US-kusal-medium.onnx",
  "en_US-l2arctic-medium": "en/en_US/l2arctic/medium/en_US-l2arctic-medium.onnx",
  "en_US-lessac-high": "en/en_US/lessac/high/en_US-lessac-high.onnx",
  "en_US-lessac-low": "en/en_US/lessac/low/en_US-lessac-low.onnx",
  "en_US-lessac-medium": "en/en_US/lessac/medium/en_US-lessac-medium.onnx",
  "en_US-libritts-high": "en/en_US/libritts/high/en_US-libritts-high.onnx",
  "en_US-libritts_r-medium": "en/en_US/libritts_r/medium/en_US-libritts_r-medium.onnx",
  "en_US-ljspeech-high": "en/en_US/ljspeech/high/en_US-ljspeech-high.onnx",
  "en_US-ljspeech-medium": "en/en_US/ljspeech/medium/en_US-ljspeech-medium.onnx",
  "en_US-ryan-high": "en/en_US/ryan/high/en_US-ryan-high.onnx",
  "en_US-ryan-low": "en/en_US/ryan/low/en_US-ryan-low.onnx",
  "en_US-ryan-medium": "en/en_US/ryan/medium/en_US-ryan-medium.onnx",
  "es_ES-carlfm-x_low": "es/es_ES/carlfm/x_low/es_ES-carlfm-x_low.onnx",
  "es_ES-davefx-medium": "es/es_ES/davefx/medium/es_ES-davefx-medium.onnx",
  "es_ES-mls_10246-low": "es/es_ES/mls_10246/low/es_ES-mls_10246-low.onnx",
  "es_ES-mls_9972-low": "es/es_ES/mls_9972/low/es_ES-mls_9972-low.onnx",
  "es_ES-sharvard-medium": "es/es_ES/sharvard/medium/es_ES-sharvard-medium.onnx",
  "es_MX-ald-medium": "es/es_MX/ald/medium/es_MX-ald-medium.onnx",
  "es_MX-claude-high": "es/es_MX/claude/high/es_MX-claude-high.onnx",
  "fa_IR-amir-medium": "fa/fa_IR/amir/medium/fa_IR-amir-medium.onnx",
  "fa_IR-gyro-medium": "fa/fa_IR/gyro/medium/fa_IR-gyro-medium.onnx",
  "fi_FI-harri-low": "fi/fi_FI/harri/low/fi_FI-harri-low.onnx",
  "fi_FI-harri-medium": "fi/fi_FI/harri/medium/fi_FI-harri-medium.onnx",
  "fr_FR-gilles-low": "fr/fr_FR/gilles/low/fr_FR-gilles-low.onnx",
  "fr_FR-mls-medium": "fr/fr_FR/mls/medium/fr_FR-mls-medium.onnx",
  "fr_FR-mls_1840-low": "fr/fr_FR/mls_1840/low/fr_FR-mls_1840-low.onnx",
  "fr_FR-siwis-low": "fr/fr_FR/siwis/low/fr_FR-siwis-low.onnx",
  "fr_FR-siwis-medium": "fr/fr_FR/siwis/medium/fr_FR-siwis-medium.onnx",
  "fr_FR-tom-medium": "fr/fr_FR/tom/medium/fr_FR-tom-medium.onnx",
  "fr_FR-upmc-medium": "fr/fr_FR/upmc/medium/fr_FR-upmc-medium.onnx",
  "hu_HU-anna-medium": "hu/hu_HU/anna/medium/hu_HU-anna-medium.onnx",
  "hu_HU-berta-medium": "hu/hu_HU/berta/medium/hu_HU-berta-medium.onnx",
  "hu_HU-imre-medium": "hu/hu_HU/imre/medium/hu_HU-imre-medium.onnx",
  "is_IS-bui-medium": "is/is_IS/bui/medium/is_IS-bui-medium.onnx",
  "is_IS-salka-medium": "is/is_IS/salka/medium/is_IS-salka-medium.onnx",
  "is_IS-steinn-medium": "is/is_IS/steinn/medium/is_IS-steinn-medium.onnx",
  "is_IS-ugla-medium": "is/is_IS/ugla/medium/is_IS-ugla-medium.onnx",
  "it_IT-riccardo-x_low": "it/it_IT/riccardo/x_low/it_IT-riccardo-x_low.onnx",
  "ka_GE-natia-medium": "ka/ka_GE/natia/medium/ka_GE-natia-medium.onnx",
  "kk_KZ-iseke-x_low": "kk/kk_KZ/iseke/x_low/kk_KZ-iseke-x_low.onnx",
  "kk_KZ-issai-high": "kk/kk_KZ/issai/high/kk_KZ-issai-high.onnx",
  "kk_KZ-raya-x_low": "kk/kk_KZ/raya/x_low/kk_KZ-raya-x_low.onnx",
  "lb_LU-marylux-medium": "lb/lb_LU/marylux/medium/lb_LU-marylux-medium.onnx",
  "ne_NP-google-medium": "ne/ne_NP/google/medium/ne_NP-google-medium.onnx",
  "ne_NP-google-x_low": "ne/ne_NP/google/x_low/ne_NP-google-x_low.onnx",
  "nl_BE-nathalie-medium": "nl/nl_BE/nathalie/medium/nl_BE-nathalie-medium.onnx",
  "nl_BE-nathalie-x_low": "nl/nl_BE/nathalie/x_low/nl_BE-nathalie-x_low.onnx",
  "nl_BE-rdh-medium": "nl/nl_BE/rdh/medium/nl_BE-rdh-medium.onnx",
  "nl_BE-rdh-x_low": "nl/nl_BE/rdh/x_low/nl_BE-rdh-x_low.onnx",
  "nl_NL-mls-medium": "nl/nl_NL/mls/medium/nl_NL-mls-medium.onnx",
  "nl_NL-mls_5809-low": "nl/nl_NL/mls_5809/low/nl_NL-mls_5809-low.onnx",
  "nl_NL-mls_7432-low": "nl/nl_NL/mls_7432/low/nl_NL-mls_7432-low.onnx",
  "no_NO-talesyntese-medium": "no/no_NO/talesyntese/medium/no_NO-talesyntese-medium.onnx",
  "pl_PL-darkman-medium": "pl/pl_PL/darkman/medium/pl_PL-darkman-medium.onnx",
  "pl_PL-gosia-medium": "pl/pl_PL/gosia/medium/pl_PL-gosia-medium.onnx",
  "pl_PL-mc_speech-medium": "pl/pl_PL/mc_speech/medium/pl_PL-mc_speech-medium.onnx",
  "pl_PL-mls_6892-low": "pl/pl_PL/mls_6892/low/pl_PL-mls_6892-low.onnx",
  "pt_BR-edresson-low": "pt/pt_BR/edresson/low/pt_BR-edresson-low.onnx",
  "pt_BR-faber-medium": "pt/pt_BR/faber/medium/pt_BR-faber-medium.onnx",
  "pt_PT-tugão-medium": "pt/pt_PT/tugão/medium/pt_PT-tugão-medium.onnx",
  "ro_RO-mihai-medium": "ro/ro_RO/mihai/medium/ro_RO-mihai-medium.onnx",
  "ru_RU-denis-medium": "ru/ru_RU/denis/medium/ru_RU-denis-medium.onnx",
  "ru_RU-dmitri-medium": "ru/ru_RU/dmitri/medium/ru_RU-dmitri-medium.onnx",
  "ru_RU-irina-medium": "ru/ru_RU/irina/medium/ru_RU-irina-medium.onnx",
  "ru_RU-ruslan-medium": "ru/ru_RU/ruslan/medium/ru_RU-ruslan-medium.onnx",
  "sk_SK-lili-medium": "sk/sk_SK/lili/medium/sk_SK-lili-medium.onnx",
  "sl_SI-artur-medium": "sl/sl_SI/artur/medium/sl_SI-artur-medium.onnx",
  "sr_RS-serbski_institut-medium": "sr/sr_RS/serbski_institut/medium/sr_RS-serbski_institut-medium.onnx",
  "sv_SE-nst-medium": "sv/sv_SE/nst/medium/sv_SE-nst-medium.onnx",
  "sw_CD-lanfrica-medium": "sw/sw_CD/lanfrica/medium/sw_CD-lanfrica-medium.onnx",
  "tr_TR-dfki-medium": "tr/tr_TR/dfki/medium/tr_TR-dfki-medium.onnx",
  "tr_TR-fahrettin-medium": "tr/tr_TR/fahrettin/medium/tr_TR-fahrettin-medium.onnx",
  "tr_TR-fettah-medium": "tr/tr_TR/fettah/medium/tr_TR-fettah-medium.onnx",
  "uk_UA-lada-x_low": "uk/uk_UA/lada/x_low/uk_UA-lada-x_low.onnx",
  "uk_UA-ukrainian_tts-medium": "uk/uk_UA/ukrainian_tts/medium/uk_UA-ukrainian_tts-medium.onnx",
  "vi_VN-25hours_single-low": "vi/vi_VN/25hours_single/low/vi_VN-25hours_single-low.onnx",
  "vi_VN-vais1000-medium": "vi/vi_VN/vais1000/medium/vi_VN-vais1000-medium.onnx",
  "vi_VN-vivos-x_low": "vi/vi_VN/vivos/x_low/vi_VN-vivos-x_low.onnx",
  "zh_CN-huayan-medium": "zh/zh_CN/huayan/medium/zh_CN-huayan-medium.onnx",
  "zh_CN-huayan-x_low": "zh/zh_CN/huayan/x_low/zh_CN-huayan-x_low.onnx"
};
async function b(n, e) {
  if (n.match("https://huggingface.co"))
    try {
      const o = await (await navigator.storage.getDirectory()).getDirectoryHandle("piper", {
        create: !0
      }), t = n.split("/").at(-1), s = await (await o.getFileHandle(t, { create: !0 })).createWritable();
      await s.write(e), await s.close();
    } catch (i) {
      console.error(i);
    }
}
async function j(n) {
  try {
    const i = await (await navigator.storage.getDirectory()).getDirectoryHandle("piper"), o = n.split("/").at(-1);
    await (await i.getFileHandle(o)).remove();
  } catch (e) {
    console.error(e);
  }
}
async function T(n) {
  if (n.match("https://huggingface.co"))
    try {
      const i = await (await navigator.storage.getDirectory()).getDirectoryHandle("piper", {
        create: !0
      }), o = n.split("/").at(-1);
      return await (await i.getFileHandle(o)).getFile();
    } catch {
      return;
    }
}
async function I(n, e) {
  var l;
  const i = await fetch(n), o = (l = i.body) == null ? void 0 : l.getReader(), t = +(i.headers.get("Content-Length") ?? 0);
  let m = 0, s = [];
  for (; o; ) {
    const { done: u, value: g } = await o.read();
    if (u)
      break;
    s.push(g), m += g.length, e == null || e({
      url: n,
      total: t,
      loaded: m
    });
  }
  return new Blob(s, { type: i.headers.get("Content-Type") ?? void 0 });
}
function C(n, e, i) {
  const o = n.length, t = 44, m = new DataView(new ArrayBuffer(o * e * 2 + t));
  m.setUint32(0, 1179011410, !0), m.setUint32(4, m.buffer.byteLength - 8, !0), m.setUint32(8, 1163280727, !0), m.setUint32(12, 544501094, !0), m.setUint32(16, 16, !0), m.setUint16(20, 1, !0), m.setUint16(22, e, !0), m.setUint32(24, i, !0), m.setUint32(28, e * 2 * i, !0), m.setUint16(32, e * 2, !0), m.setUint16(34, 16, !0), m.setUint32(36, 1635017060, !0), m.setUint32(40, 2 * o, !0);
  let s = t;
  for (let l = 0; l < o; l++) {
    const u = n[l];
    u >= 1 ? m.setInt16(s, 32767, !0) : u <= -1 ? m.setInt16(s, -32768, !0) : m.setInt16(s, u * 32768 | 0, !0), s += 2;
  }
  return m.buffer;
}
var x, r, _, f, p;
const y = class y {
  constructor({ voiceId: e, progress: i }) {
    S(this, "ready", !1);
    S(this, "voiceId");
    S(this, "waitReady");
    h(this, x);
    h(this, r);
    h(this, _);
    h(this, f);
    h(this, p);
    this.voiceId = e, w(this, p, i), this.waitReady = this.init();
  }
  static async create(e) {
    const i = new y(e);
    return await i.waitReady, i;
  }
  async init() {
    const { createPiperPhonemize: e } = await import("./piper-CaUxBn8Y.js");
    w(this, x, e), w(this, _, await import("onnxruntime-web")), a(this, _).env.allowLocalModels = !1, a(this, _).env.wasm.numThreads = navigator.hardwareConcurrency, a(this, _).env.wasm.wasmPaths = P;
    const i = U[this.voiceId], o = await D(`${c}/${i}.json`);
    w(this, r, JSON.parse(await o.text()));
    const t = await D(`${c}/${i}`, a(this, p));
    w(this, f, await a(this, _).InferenceSession.create(
      await t.arrayBuffer()
    ));
  }
  async predict(e) {
    await this.waitReady;
    const i = JSON.stringify([{ text: e.trim() }]), o = await new Promise(async (N) => {
      (await a(this, x).call(this, {
        print: (d) => {
          N(JSON.parse(d).phoneme_ids);
        },
        printErr: (d) => {
          throw new Error(d);
        },
        locateFile: (d) => d.endsWith(".wasm") ? `${B}.wasm` : d.endsWith(".data") ? `${B}.data` : d
      })).callMain([
        "-l",
        a(this, r).espeak.voice,
        "--input",
        i,
        "--espeak_data",
        "/espeak-ng-data"
      ]);
    }), t = 0, m = a(this, r).audio.sample_rate, s = a(this, r).inference.noise_scale, l = a(this, r).inference.length_scale, u = a(this, r).inference.noise_w, g = a(this, f), E = {
      input: new (a(this, _)).Tensor("int64", o, [1, o.length]),
      input_lengths: new (a(this, _)).Tensor("int64", [o.length]),
      scales: new (a(this, _)).Tensor("float32", [s, l, u])
    };
    Object.keys(a(this, r).speaker_id_map).length && Object.assign(E, {
      sid: new (a(this, _)).Tensor("int64", [t])
    });
    const {
      output: { data: G }
    } = await g.run(E);
    return new Blob([C(G, 1, m)], {
      type: "audio/x-wav"
    });
  }
};
x = new WeakMap(), r = new WeakMap(), _ = new WeakMap(), f = new WeakMap(), p = new WeakMap();
let k = y;
async function K(n, e) {
  return new k({
    voiceId: n.voiceId,
    progress: e
  }).predict(n.text);
}
async function D(n, e) {
  let i = await T(n);
  return i || (i = await I(n, e), await b(n, i)), i;
}
async function Z(n, e) {
  const i = U[n], o = [`${c}/${i}`, `${c}/${i}.json`];
  await Promise.all(
    o.map(async (t) => {
      b(t, await I(t, t.endsWith(".onnx") ? e : void 0));
    })
  );
}
async function $(n) {
  const e = U[n], i = [`${c}/${e}`, `${c}/${e}.json`];
  await Promise.all(i.map((o) => j(o)));
}
async function z() {
  const e = await (await navigator.storage.getDirectory()).getDirectoryHandle("piper", {
    create: !0
  }), i = [];
  for await (const o of e.keys()) {
    const t = o.split(".")[0];
    o.endsWith(".onnx") && t in U && i.push(t);
  }
  return i;
}
async function A() {
  try {
    await (await (await navigator.storage.getDirectory()).getDirectoryHandle("piper")).remove({ recursive: !0 });
  } catch (n) {
    console.error(n);
  }
}
async function M() {
  const n = await fetch(`${c}/voices.json`);
  if (!n.ok)
    throw new Error("Could not retrieve voices file from huggingface");
  return Object.values(await n.json());
}
export {
  c as HF_BASE,
  P as ONNX_BASE,
  U as PATH_MAP,
  k as TtsSession,
  B as WASM_BASE,
  Z as download,
  A as flush,
  K as predict,
  $ as remove,
  z as stored,
  M as voices
};
