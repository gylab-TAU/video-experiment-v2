import * as stimTrial from "../components/videoSliderComponent";
import TimeService from "../Services/TimeService";

export class showStimProcedure {
    getProcedure(videos) {
        let procedure = {
            timeline: this.getTrials(videos),
            randomize_order: false
        }

        return procedure;
    }

    getTrials(videos) {
        let trials = [];

        let times = new TimeService().getStopTimes();

        for (let i = 0; i < times.length; i++) {
            let start = i == 0 ? null : times[i - 1].time;
            let stop = i == times.length ? null : times[i].time;
            let id = times[i].ID;
            let trial = stimTrial.default.getTrial(videos, start, stop, id)

            trials.push(trial);
        }

        return trials;
    }
}