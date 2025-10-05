import { InferenceConfg, ProgressCallback, VoiceId } from './types';

interface TtsSessionOptions {
    voiceId: VoiceId;
    progress?: ProgressCallback;
}
export declare class TtsSession {
    #private;
    ready: boolean;
    voiceId: VoiceId;
    waitReady: Promise<void>;
    constructor({ voiceId, progress }: TtsSessionOptions);
    static create(options: TtsSessionOptions): Promise<TtsSession>;
    init(): Promise<void>;
    predict(text: string): Promise<Blob>;
}
/**
 * Run text to speech inference in new worker thread. Fetches the model
 * first, if it has not yet been saved to opfs yet.
 */
export declare function predict(config: InferenceConfg, callback?: ProgressCallback): Promise<Blob>;
export {};
