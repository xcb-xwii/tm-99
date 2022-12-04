export enum Note {
    A = 0,
    Bes,
    B,
    C,
    Des,
    D,
    Ees,
    E,
    F,
    Fis,
    G,
    Aes,
}

export enum Interval {
    Root = 0,
    Min2,
    Maj2,
    Min3,
    Maj3,
    Per4,
    Trit,
    Per5,
    Min6,
    Maj6,
    Min7,
    Maj7,
}

export namespace Note {
    const nameMappings = [
        "A",
        "B♭",
        "B",
        "C",
        "D♭",
        "D",
        "E♭",
        "E",
        "F",
        "F♯",
        "G",
        "A♭",
    ];

    export function name(note: Note): string {
        return nameMappings[note];
    }

    export function ofInterval(interval: Interval, root: Note): Note {
        return (root + interval) % 12;
    }
}

export namespace Interval {
    const nameMappings = [
        "Root",
        "Minor 2nd",
        "Major 2nd",
        "Minor 3rd",
        "Major 3rd",
        "Perfect 4th",
        "Tritone",
        "Perfect 5th",
        "Minor 6th",
        "Major 6th",
        "Minor 7th",
        "Major 7th",
    ];

    const justMappings = [
        0, 11.73, 3.91, 15.64, -13.69, -1.96, -17.49, 1.96, 13.69, -15.64,
        -3.91, -11.73,
    ];

    export function name(interval: Interval): string {
        return nameMappings[interval];
    }

    export function justAdjustmentOf(interval: Interval): number {
        return justMappings[interval];
    }
}

export function equalPitch(note: Note, octave: number) {
    return 100 * note + 1200 * (octave - 4);
}

export function purePitch(interval: Interval, root: Note, octave: number) {
    return (
        100 * interval +
        Interval.justAdjustmentOf(interval) +
        equalPitch(root, octave)
    );
}
