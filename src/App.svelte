<script lang="ts">
    import { Note, Interval, equalPitch, purePitch } from "./Pitch";

    const audioCtx = new window.AudioContext();
    audioCtx.suspend();

    let cookies = new Map<string, string>(
        document.cookie
            .split(";")
            .map((c) => c.split("=").map((v) => v.trim())) as Iterable<
            [string, string]
        >
    );
    let concertPitch = parseInt?.(cookies.get("concertPitch")) || 442;
    $: document.cookie = `concertPitch=${concertPitch}`;

    const gainNode = audioCtx.createGain();
    gainNode.connect(audioCtx.destination);

    let rootNote = Note.A;
    let octave = 4;

    let oscNodes: OscillatorNode[] = [];
    let intervals = new Set([Interval.Root]);

    $: {
        oscNodes.forEach((node) => {
            node.disconnect();
            node.stop();
        });

        oscNodes = [...Array(intervals.size)].map((_) =>
            audioCtx.createOscillator()
        );

        [...intervals.keys()].forEach((interval, idx) => {
            let node = oscNodes[idx];
            node.type = "sine";
            node.detune.value = purePitch(interval, rootNote, octave);
            node.connect(gainNode);
            node.start();
        });

        gainNode.gain.value = 1 / (intervals.size || 1);
    }
    $: oscNodes.forEach((node) => (node.frequency.value = concertPitch));

    let playing = false;
    function togglePlay() {
        if (playing) {
            audioCtx.suspend();
            playing = false;
        } else {
            audioCtx.resume();
            playing = true;
        }
    }
</script>

<main>
    <h1>tm-99</h1>
    <p>come at me korg</p>
    <br />

    <div>
        <button on:click={() => concertPitch--}>-</button>
        <strong>A<sub>4</sub> = {concertPitch}</strong>
        <button on:click={() => concertPitch++}>+</button>
        <button on:click={() => (concertPitch = 442)}>Reset</button>
    </div>
    <br />

    <div>
        <div>
            <button on:click={() => octave--}>-</button>
            <strong>{Note.name(rootNote)}<sub>{octave}</sub></strong>
            <button on:click={() => octave++}>+</button>
            <button on:click={() => (octave = 4)}>Reset</button>
        </div>

        <div>
            {#each [...Array(12).keys()] as note}
                <button on:click={() => (rootNote = note)}>
                    {Note.name(note)}
                </button>
            {/each}
        </div>
    </div>
    <br />

    <div>
        <strong>Notes:</strong>
        {[...intervals.keys()]
            .sort((x, y) => x - y)
            .map((interval) => Note.name(Note.ofInterval(interval, rootNote)))
            .join(", ")}

        <div>
            {#each [...Array(12).keys()] as interval}
                {@const list = Interval.name(interval)}

                <button
                    on:click={() => {
                        if (intervals.has(interval)) intervals.delete(interval);
                        else intervals.add(interval);
                        intervals = intervals;
                    }}
                >
                    {#if intervals.has(interval)}<strong>{list}</strong
                        >{:else}{list}{/if}
                </button>
            {/each}
            <button on:click={() => (intervals = new Set([Interval.Root]))}
                >Reset</button
            >
        </div>
    </div>
    <br />

    <button on:click={togglePlay}>{playing ? "Stop" : "Start"}</button>
</main>

<style>
</style>
